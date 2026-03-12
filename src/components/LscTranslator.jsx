import React, { useRef, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { Hands, HAND_CONNECTIONS } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { RefreshCw } from 'lucide-react';

const LABELS = "ABCDEFGHIJKLMNOPQRSTUVWXYZÑ".split("").sort();

const LscTranslator = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [confidence, setConfidence] = useState(0);
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [isCameraReady, setIsCameraReady] = useState(false);

  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        // The Keras model was converted via SavedModel, resulting in a GraphModel structure.
        const loadedModel = await tf.loadGraphModel('/lsc-model/model.json');
        setModel(loadedModel);
        setIsModelLoading(false);
      } catch (err) {
        console.error("Error loading TFJS model:", err);
        setErrorMsg("Failed to load AI model. Check console.");
        setIsModelLoading(false);
      }
    };
    loadModel();
  }, []);

  useEffect(() => {
    if (!model) return;

    let camera = null;
    const hands = new Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7
    });

    hands.onResults((results) => {
      if (!canvasRef.current || !videoRef.current) return;
      const canvasCtx = canvasRef.current.getContext('2d');
      const cw = canvasRef.current.width;
      const ch = canvasRef.current.height;

      canvasCtx.save();
      canvasCtx.clearRect(0, 0, cw, ch);
      
      // Draw video frame to canvas (mirrored)
      canvasCtx.translate(cw, 0); 
      canvasCtx.scale(-1, 1);
      canvasCtx.drawImage(results.image, 0, 0, cw, ch);

      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        const landmarks = results.multiHandLandmarks[0];
        
        // Draw MediaPipe Skeleton
        drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, { color: '#00FF00', lineWidth: 2 });
        drawLandmarks(canvasCtx, landmarks, { color: '#FF0000', lineWidth: 1, radius: 2 });

        const coords = [];
        for (let lm of landmarks) {
          coords.push(lm.x, lm.y, lm.z);
        }

        const inputTensor = tf.tensor2d([coords], [1, 63]);
        const pred = model.predict(inputTensor);
        const scores = pred.dataSync();
        const maxScore = Math.max(...scores);
        const maxIndex = scores.indexOf(maxScore);

        setPrediction(LABELS[maxIndex] || "?");
        setConfidence((maxScore * 100).toFixed(1));
        
        inputTensor.dispose();
        pred.dispose();
      } else {
        setPrediction("");
        setConfidence(0);
      }
      canvasCtx.restore();
    });

    if (videoRef.current) {
      camera = new Camera(videoRef.current, {
        onFrame: async () => {
          if (!isCameraReady) setIsCameraReady(true);
          if (videoRef.current) {
            await hands.send({ image: videoRef.current });
          }
        },
        width: 640,
        height: 480,
        facingMode: 'user'
      });
      camera.start();
    }

    return () => {
      if (camera) camera.stop();
      hands.close();
    };
  }, [model]);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-900/50 rounded-2xl w-full max-w-3xl mx-auto overflow-hidden shadow-2xl border border-gray-800/50 relative mb-12">
      <div className="w-full flex justify-between items-center mb-4 text-white px-2">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <span className="text-blue-500">LSC</span> Live Translator
        </h3>
        <div className="flex items-center gap-3">
          {isModelLoading && <span className="text-sm text-gray-400 animate-pulse">Loading AI Model...</span>}
          {!isModelLoading && !isCameraReady && <span className="text-sm text-yellow-500 animate-pulse">Waiting for Camera...</span>}
          {!isModelLoading && isCameraReady && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse"></div>
              <span className="text-sm text-green-400 font-medium">System Online</span>
            </div>
          )}
        </div>
      </div>

      <div className="relative w-full aspect-video bg-black/80 rounded-xl overflow-hidden flex items-center justify-center border border-gray-800 shadow-inner">
        <video ref={videoRef} className="hidden" playsInline muted />
        
        {isModelLoading || !isCameraReady ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90 z-10 backdrop-blur-sm">
            <RefreshCw className="text-blue-500 w-8 h-8 animate-spin mb-4" />
            <p className="text-gray-300 font-medium tracking-wide">{isModelLoading ? 'Initializing Neural Network Architecture...' : 'Requesting WebRTC Camera Access...'}</p>
          </div>
        ) : null}

        <canvas 
          ref={canvasRef} 
          width="640" 
          height="480" 
          className="w-full h-full object-cover"
        />

        {/* HUD Overlay */}
        {prediction && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-xl px-12 py-4 rounded-2xl border border-gray-700/50 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col items-center transition-all duration-300">
            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Detected Sign</span>
            <span className="text-7xl font-black text-white drop-shadow-lg">{prediction}</span>
            <div className="w-full mt-3 h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-300 ${confidence > 80 ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' : confidence > 50 ? 'bg-yellow-500 shadow-[0_0_10px_#eab308]' : 'bg-red-500 shadow-[0_0_10px_#ef4444]'}`}
                style={{ width: `${confidence}%` }}
              />
            </div>
            <span className="text-gray-400 font-medium text-xs mt-2 tracking-wider">{confidence}% Match</span>
          </div>
        )}
      </div>
      <p className="text-xs text-gray-500 mt-4 text-center max-w-lg">
        This demo executes the Custom Keras MLP Model entirely on your device's CPU using TensorFlow.js. No video data is sent to outward servers, ensuring zero latency and total privacy.
      </p>
    </div>
  );
};

export default LscTranslator;
