import tensorflow as tf

print("Loading Keras 3 model...")
model = tf.keras.models.load_model('lsc_model_A_v2.h5')

print("Saving as generic SavedModel...")
tf.saved_model.save(model, "saved_model_temp")
print("SavedModel prepared.")
