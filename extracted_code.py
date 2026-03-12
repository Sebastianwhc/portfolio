!pip install scikit-learn
!pip install pandas
!pip install tqdm
!pip install tensorflow opencv-python mediapipe
import cv2
import mediapipe as mp

# Initialize MediaPipe Hands
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode=False, max_num_hands=1, min_detection_confidence=0.5)
mp_drawing = mp.solutions.drawing_utils

# Start video capture
cap = cv2.VideoCapture(0)

print("Environment verified. Press 'q' to exit.")

while cap.isOpened():
    success, image = cap.read()
    if not success:
        print("Ignoring empty camera frame.")
        continue

    # Convert the image to RGB for MediaPipe
    image = cv2.cvtColor(cv2.flip(image, 1), cv2.COLOR_BGR2RGB)
    image.flags.writeable = False
    results = hands.process(image)

    # Draw the hand annotations on the image
    image.flags.writeable = True
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
    if results.multi_hand_landmarks:
        for hand_landmarks in results.multi_hand_landmarks:
            # Print wrist landmark coordinates (landmark 0)
            print(f'Wrist coordinates: {hand_landmarks.landmark}')
            mp_drawing.draw_landmarks(
                image,
                hand_landmarks,
                mp_hands.HAND_CONNECTIONS)
    
    cv2.imshow('MediaPipe Verification', image)
    if cv2.waitKey(5) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
import os
import cv2
import mediapipe as mp
import pandas as pd
from tqdm import tqdm

# INITIAL CONFIGURATION 
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode=True, max_num_hands=1, min_detection_confidence=0.5)

DATA_DIR = './datos' 

# PROCESSING AND EXTRACTION
data = []
labels = []

print("Starting image processing ...")

for label in sorted(os.listdir(DATA_DIR)):
    label_path = os.path.join(DATA_DIR, label)
    if not os.path.isdir(label_path):
        continue

    image_files = os.listdir(label_path)
    for img_file in tqdm(image_files, desc=f'Processing letter "{label}"'):
        img_path = os.path.join(label_path, img_file)
        image_landmarks = []
        
        img = cv2.imread(img_path)
        if img is None:
            continue
            
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        results = hands.process(img_rgb)
        
        if results.multi_hand_landmarks:
            # We iterate over the list of detected hands.
            for single_hand_landmarks in results.multi_hand_landmarks:
                # And now, we iterate over the points of that specific hand.
                for landmark in single_hand_landmarks.landmark:
                    image_landmarks.extend([landmark.x, landmark.y, landmark.z])
            
            data.append(image_landmarks)
            labels.append(label)

print("\nProcessing completed.")
hands.close()

# Saving the data as a DATAFRAME
df = pd.DataFrame(data)
df['label'] = labels

output_path = 'hand_landmarks.csv'
df.to_csv(output_path, index=False)

print(f"\ Success! File'{output_path}' created with {len(df)} samples.")
print(df.head())
import pandas as pd
import numpy as np
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import matplotlib.pyplot as plt

# Load the data
df = pd.read_csv('hand_landmarks.csv')
X = df.iloc[:, :-1].values
y = df.iloc[:, -1].values
label_encoder = LabelEncoder()
y_encoded = label_encoder.fit_transform(y)
X_train, X_test, y_train, y_test = train_test_split(X, y_encoded, test_size=0.2, random_state=42, stratify=y_encoded)
num_classes = len(np.unique(y_encoded))

# Build the model ---
model = tf.keras.models.Sequential([
    tf.keras.layers.Input(shape=(X_train.shape[1],)),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dropout(0.4),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dropout(0.4),
    tf.keras.layers.Dense(num_classes, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# TRAIN THE MODEL (With more ages to allow time for learning)
print("\nStarting the model training (with more eras)...")
# We increased the ages because the model has more to learn from the augmented data.
history = model.fit(
    X_train, 
    y_train, 
    epochs=200, # we increase upto 200 ages
    validation_data=(X_test, y_test),
    batch_size=32,
    verbose=0 
)
print("Training completed.")

#VISUALIZE AND EVALUATE THE MODEL

plt.figure(figsize=(12, 5))
plt.subplot(1, 2, 1)
plt.plot(history.history['accuracy'], label='Training Accuracy')
plt.plot(history.history['val_accuracy'], label='Validation Accuracy')
plt.title('Model Accuracy')
plt.xlabel('Time')
plt.ylabel('Precisión')
plt.legend()

plt.subplot(1, 2, 2)
plt.plot(history.history['loss'], label='Training Loss')
plt.plot(history.history['val_loss'], label='Loss of Validation')
plt.title('Loss of the Model')
plt.xlabel('Age')
plt.ylabel('Loss')
plt.legend()

plt.show()

#Evaluate the final performance of the model using the test data.
loss, accuracy = model.evaluate(X_test, y_test)
print(f"\nModel accuracy in test data: {accuracy * 100:.2f}%")

# Save the trained model
model.save('lsc_model_A_v2.h5')
print("\n¡Improved model saved as 'lsc_model_A_v2.h5'!")
import cv2
import mediapipe as mp
import numpy as np
import tensorflow as tf
from sklearn.preprocessing import LabelEncoder
import string # Para obtener el abecedario fácilmente

# --- 1. CARGAR MODELO Y CONFIGURACIÓN ---

# Carga el modelo de red neuronal que entrenamos lsc_model_A_v2.
model = tf.keras.models.load_model('lsc_model_A_v2.h5')

# Inicializa MediaPipe Hands.
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode=False, max_num_hands=1, min_detection_confidence=0.7, min_tracking_confidence=0.7)
mp_drawing = mp.solutions.drawing_utils

# --- 2. PREPARAR EL TRADUCTOR DE ETIQUETAS ---
# Es CRUCIAL que las etiquetas aquí estén en el mismo orden que durante el entrenamiento.
# El script de procesamiento las ordenó alfabéticamente, así que hacemos lo mismo aquí.
# NOTA: Asumimos el alfabeto español estándar de 27 letras. Si usaste otras, ajústalo.
labels_list = list(string.ascii_uppercase) + ['Ñ']
labels_list.sort() # Aseguramos el orden alfabético

# Creamos el codificador y lo "entrenamos" con nuestra lista de etiquetas.
# Esto asegura que el número 0 corresponda a 'A', 1 a 'B', etc., igual que en el entrenamiento.
label_encoder = LabelEncoder()
label_encoder.fit(labels_list)


# --- 3. BUCLE PRINCIPAL DE LA APLICACIÓN ---

# Inicia la captura de video desde la cámara web (la cámara 0).
cap = cv2.VideoCapture(0)

print("Iniciando aplicación... Presiona 'q' para salir.")

while cap.isOpened():
    # Lee un fotograma de la cámara.
    success, frame = cap.read()
    if not success:
        print("No se pudo leer el fotograma de la cámara.")
        break

    # Voltea el fotograma horizontalmente para un efecto espejo más intuitivo.
    frame = cv2.flip(frame, 1)
    
    # Guarda las dimensiones del fotograma.
    frame_h, frame_w, _ = frame.shape

    # Convierte la imagen de BGR (OpenCV) a RGB (MediaPipe).
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    
    # Procesa la imagen para detectar manos.
    results = hands.process(rgb_frame)

    # Si se detecta una mano...
    if results.multi_hand_landmarks:
        # Dibuja los puntos y las conexiones de la mano en el fotograma.
        for hand_landmarks in results.multi_hand_landmarks:
            mp_drawing.draw_landmarks(
                frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)

            # --- PREPARACIÓN DE DATOS PARA EL MODELO ---
            landmarks_data = []
            for landmark in hand_landmarks.landmark:
                landmarks_data.extend([landmark.x, landmark.y, landmark.z])
            
            # Convierte la lista a un array de NumPy y ajústalo a la forma que el modelo espera.
            # El modelo fue entrenado con lotes de datos, así que necesita un array 2D: (1, 63).
            input_data = np.expand_dims(landmarks_data, axis=0)

            # --- PREDICCIÓN DEL MODELO ---
            prediction = model.predict(input_data, verbose=0)
            predicted_index = np.argmax(prediction)
            confidence = np.max(prediction)
            
            # Traduce el índice predicho de nuevo a una letra.
            predicted_letter = label_encoder.inverse_transform([predicted_index])

            # --- VISUALIZACIÓN DEL RESULTADO (SECCIÓN MODIFICADA) ---
            # Dibuja un rectángulo de fondo más pequeño y ajustado.
            cv2.rectangle(frame, (10, 10), (220, 85), (0, 0, 0), -1)
            
            # Muestra la letra predicha con una fuente más pequeña y delgada.
            cv2.putText(frame, f"Letra: {predicted_letter}", (20, 45), 
                        cv2.FONT_HERSHEY_SIMPLEX, 1.2, (255, 255, 255), 2, cv2.LINE_AA)
            
            # Muestra la confianza con una fuente aún más pequeña para que sea secundaria.
            cv2.putText(frame, f"Confianza: {confidence:.2f}", (20, 70), 
                        cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2, cv2.LINE_AA)

    # Muestra el fotograma final en una ventana.
    cv2.imshow('Reconocimiento LSC en Tiempo Real', frame)

    # Si se presiona la tecla 'q', se rompe el bucle y se cierra la aplicación.
    if cv2.waitKey(5) & 0xFF == ord('q'):
        break

# Libera la cámara y cierra todas las ventanas de OpenCV.
cap.release()
cv2.destroyAllWindows()
print("Aplicación cerrada.")