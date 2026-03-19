import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Play, Square, RotateCcw, Activity } from 'lucide-react';
import * as MathCore from '../utils/mathCore';

// Helper to generate a Spiral Dataset (Non-linear so it requires a deep network)
const generateSpirals = (n_points = 150) => {
  const X = []; 
  const Y = [];
  for (let class_number = 0; class_number < 2; class_number++) {
    for (let i = 0; i < n_points; i++) {
      const radius = (i / n_points) * 2.0; 
      const theta = (i / n_points) * 3 * Math.PI + (class_number * Math.PI);
      // add some noise
      const x1 = radius * Math.sin(theta) + (Math.random() * 0.2 - 0.1);
      const x2 = radius * Math.cos(theta) + (Math.random() * 0.2 - 0.1);
      
      X.push([x1, x2]);
      Y.push([class_number]);
    }
  }
  // MathCore expects Data as (Features, Examples). So X needs to be (2, 300) and Y (1, 300).
  return { 
    X: MathCore.transpose(X), 
    Y: MathCore.transpose(Y),
    rawX: X, // shape (300, 2) for drawing
    rawY: Y
  };
};

const DlPlayground = () => {
  const canvasRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [epoch, setEpoch] = useState(0);
  const [cost, setCost] = useState(1.0);
  const [learningRate, setLearningRate] = useState(0.3);
  const [networkArchitecture, setNetworkArchitecture] = useState("2, 6, 6, 1"); // 2 hidden layers
  
  // Refs to hold mutable state for the animation loop
  const stateRef = useRef({
    parameters: null,
    X: null,
    Y: null,
    rawX: null,
    rawY: null,
    gridX: null,
    epoch: 0,
    cost: 1.0,
    lr: 0.3,
    isPlaying: false
  });

  // Keep ref up to date with state
  stateRef.current.lr = learningRate;
  stateRef.current.isPlaying = isPlaying;

  // Initialize Data and Network
  const initNetwork = useCallback(() => {
    const data = generateSpirals(150);
    stateRef.current.X = data.X;
    stateRef.current.Y = data.Y;
    stateRef.current.rawX = data.rawX;
    stateRef.current.rawY = data.rawY;
    stateRef.current.epoch = 0;

    // Parse Architecture: "2, 6, 6, 1" -> [2, 6, 6, 1]
    const dims = networkArchitecture.split(',').map(n => parseInt(n.trim()));
    stateRef.current.parameters = MathCore.initialize_parameters_deep(dims);
    
    // Generate static Grid for the background decision boundary visualization
    // 40x40 grid spanning from x: -2.5 to 2.5, y: -2.5 to 2.5
    const gridRes = 40;
    const gridPoints = [];
    for (let i = 0; i < gridRes; i++) {
      for (let j = 0; j < gridRes; j++) {
        const x1 = -2.5 + (j / gridRes) * 5.0;
        const x2 = -2.5 + (i / gridRes) * 5.0; // i is y-axis
        gridPoints.push([x1, x2]);
      }
    }
    stateRef.current.gridX = MathCore.transpose(gridPoints);
    
    setEpoch(0);
    setCost("N/A");
    setIsPlaying(false);
    drawCanvas(); // Draw initial state
  }, [networkArchitecture]);

  useEffect(() => {
    initNetwork();
  }, [initNetwork]);

  // Main Training and Render Loop
  useEffect(() => {
    let animationId;
    
    const loop = () => {
      if (stateRef.current.isPlaying) {
        let currentCost = stateRef.current.cost;
        let params = stateRef.current.parameters;
        
        // Train for 20 epochs per animation frame to speed up visualization
        for(let i=0; i<20; i++){
          const { AL, caches } = MathCore.L_model_forward(stateRef.current.X, params);
          currentCost = MathCore.compute_cost(AL, stateRef.current.Y);
          const grads = MathCore.L_model_backward(AL, stateRef.current.Y, caches);
          params = MathCore.update_parameters(params, grads, stateRef.current.lr);
          stateRef.current.epoch += 1;
        }
        
        stateRef.current.parameters = params;
        stateRef.current.cost = currentCost;
        
        // Sync to React state occasionally to avoiding lag
        if (stateRef.current.epoch % 10 === 0) {
          setEpoch(stateRef.current.epoch);
          setCost(currentCost.toFixed(5));
        }

        drawCanvas();
      }
      animationId = requestAnimationFrame(loop);
    };
    
    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    const { parameters, rawX, rawY, gridX } = stateRef.current;
    if(!parameters || !gridX) return;

    // 1. Evaluate Math Engine on the Background Grid
    const { AL: gridAL } = MathCore.L_model_forward(gridX, parameters);
    
    // 2. Draw Background Decision Boundaries
    const gridRes = 40;
    const cellW = width / gridRes;
    const cellH = height / gridRes;
    
    for (let i = 0; i < gridRes; i++) {
        for (let j = 0; j < gridRes; j++) {
            const index = i * gridRes + j;
            const pred = gridAL[0][index];
            
            // Interpolate colors: Blue for ~0, Red for ~1
            // Convert probability to alpha for soft boundaries
            const r = Math.round(pred * 255);
            const g = 60; // darkish background
            const b = Math.round((1 - pred) * 255);
            
            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.fillRect(j * cellW, i * cellH, cellW + 1, cellH + 1);
        }
    }

    // Translate coordinates from Math Space (-2.5 to 2.5) to Canvas Space
    const getCanvasPos = (x1, x2) => {
      // x1 is mapped to j (width), x2 is mapped to i (height)
      const cx = ((x1 + 2.5) / 5.0) * width;
      const cy = ((x2 + 2.5) / 5.0) * height; // Invert Y? Usually origin is top-left in canvas.
      return { cx, cy };
    };

    // 3. Draw the Dataset points
    for (let i = 0; i < rawX.length; i++) {
      const { cx, cy } = getCanvasPos(rawX[i][0], rawX[i][1]);
      const cls = rawY[i][0];
      
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, 2 * Math.PI);
      ctx.fillStyle = cls === 1 ? '#ff3333' : '#3333ff'; // Red for 1, Blue for 0
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-2xl w-full max-w-4xl mx-auto shadow-2xl border border-slate-700/50 mb-12">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-6 text-white border-b border-slate-700/50 pb-4 gap-4">
        <div>
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-blue-500">Pure Math</span> Deep Learning
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Rebuilt from Scratch in Javascript. No frameworks. Only `+`, `-`, `*`, `/`.
          </p>
        </div>
        
        <div className="flex gap-4 items-center">
            {/* Control Buttons */}
            <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${isPlaying ? 'bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/30' : 'bg-green-500/20 text-green-400 border border-green-500/50 hover:bg-green-500/30'}`}
            >
                {isPlaying ? <Square size={16} /> : <Play size={16} />}
                {isPlaying ? 'Pause' : 'Train Math Model'}
            </button>
            <button 
                onClick={initNetwork}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition"
            >
                <RotateCcw size={16} /> Reset
            </button>
        </div>
      </div>

      <div className="w-full grid lg:grid-cols-3 gap-6">
        {/* Left Panel: Settings & Info */}
        <div className="flex flex-col gap-6">
            <div className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50 flex flex-col gap-4">
               <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Network Architecture</p>
                  <select 
                      value={networkArchitecture} 
                      onChange={(e) => {
                          setNetworkArchitecture(e.target.value);
                          setIsPlaying(false);
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white outline-none"
                  >
                      <option value="2, 4, 1">Shallow (2, 4, 1)</option>
                      <option value="2, 6, 6, 1">Deep (2, 6, 6, 1)</option>
                      <option value="2, 10, 10, 10, 1">Ultra Deep (2, 10, 10, 10, 1)</option>
                  </select>
               </div>
               
               <div>
                  <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">
                     <span>Learning Rate</span>
                     <span className="text-cyan-400">{learningRate}</span>
                  </div>
                  <input 
                      type="range" 
                      min="0.01" max="1.5" step="0.01" 
                      value={learningRate} 
                      onChange={(e) => setLearningRate(parseFloat(e.target.value))}
                      className="w-full accent-cyan-500"
                  />
               </div>
            </div>

            <div className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50">
               <div className="flex items-center gap-2 mb-4 text-white">
                  <Activity size={18} className="text-blue-500"/> 
                  <span className="font-bold">Live Metrics</span>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                     <p className="text-xs text-slate-500 uppercase font-bold">Epoch</p>
                     <p className="text-2xl font-mono text-cyan-400 mt-1">{epoch}</p>
                  </div>
                  <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                     <p className="text-xs text-slate-500 uppercase font-bold">Cost (Loss)</p>
                     <p className="text-xl font-mono text-red-400 mt-1">{cost}</p>
                  </div>
               </div>
            </div>

            <div className="text-xs text-slate-500 leading-relaxed bg-blue-900/10 border border-blue-900/30 p-4 rounded-xl">
               <p>
                 <strong>How it works:</strong> The canvas evaluates the pure JavaScript Math functions (Forward Propagation) across 1600 coordinates to paint the background. 
                 Gradient Descent continuously calculates Partial Derivatives (Backward Propagation) to optimize the curve to separate Blue from Red.
               </p>
            </div>
        </div>

        {/* Right Panel: The Math Canvas */}
        <div className="lg:col-span-2 relative aspect-square lg:aspect-auto bg-black rounded-xl overflow-hidden border border-slate-700/80 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <canvas 
                ref={canvasRef}
                width={500}
                height={500}
                className="w-full h-full object-cover"
            />
        </div>
      </div>
    </div>
  );
};

export default DlPlayground;
