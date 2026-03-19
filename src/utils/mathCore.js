/**
 * Pure JavaScript Deep Learning Mathematical Core
 * Replicates NumPy's matrix operations and Coursera's L-Layer Neural Network architectures
 * Built entirely from scratch for the Web Sandbox
 */

// Matrix (Array of arrays) Generator
export const zeros = (r, c) => Array.from({ length: r }, () => new Array(c).fill(0));

// Random initialization scaled by factor (He initialization or standard)
export const randn = (r, c, factor = 0.01) => {
  return Array.from({ length: r }, () =>
    Array.from({ length: c }, () => {
      // Box-Muller transform for normal distribution
      let u = 0, v = 0;
      while (u === 0) u = Math.random(); 
      while (v === 0) v = Math.random();
      let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
      return num * factor;
    })
  );
};

// Matrix Transpose: A.T
export const transpose = (A) => A[0].map((_, colIndex) => A.map(row => row[colIndex]));

// Matrix Dot Product: np.dot(A, B)
export const dot = (A, B) => {
  return A.map(row => 
    transpose(B).map(col => 
      row.reduce((acc, val, i) => acc + val * col[i], 0)
    )
  );
};

// Add two matrices or matrix and column vector mathematically: A + b
export const add = (A, b) => {
  const isVector = b[0].length === 1;
  return A.map((row, i) =>
    row.map((val, j) => val + (isVector ? b[i][0] : b[i][j]))
  );
};

export const subtract = (A, B) => A.map((row, i) => row.map((val, j) => val - B[i][j]));
export const multiplyElem = (A, B) => A.map((row, i) => row.map((val, j) => val * B[i][j]));
export const multiplyScalar = (A, scalar) => A.map(row => row.map(val => val * scalar));

// Sum elements of a matrix over the columns axis (axis=1 in python)
export const sumAxis1 = (A) => A.map(row => [row.reduce((acc, val) => acc + val, 0)]);

// === ACTIVATION FUNCTIONS ===

export const sigmoid = (Z) => {
  const A = Z.map(row => row.map(val => 1 / (1 + Math.exp(-val))));
  return { A, cache: Z };
};

export const relu = (Z) => {
  const A = Z.map(row => row.map(val => Math.max(0, val)));
  return { A, cache: Z };
};

export const tanh = (Z) => {
  const A = Z.map(row => row.map(val => Math.tanh(val)));
  return { A, cache: Z };
};

export const relu_backward = (dA, cache) => {
  const Z = cache;
  return dA.map((row, i) => row.map((val, j) => Z[i][j] > 0 ? val : 0));
};

export const tanh_backward = (dA, cache) => {
  const a = tanh(cache).A;
  return dA.map((row, i) => row.map((val, j) => val * (1 - Math.pow(a[i][j], 2))));
};

export const sigmoid_backward = (dA, cache) => {
  const Z = cache;
  const s = sigmoid(Z).A;
  return dA.map((row, i) => row.map((val, j) => val * s[i][j] * (1 - s[i][j])));
};

// === DEEP LEARNING LOGIC ===

export const initialize_parameters_deep = (layer_dims) => {
  const parameters = {};
  for (let l = 1; l < layer_dims.length; l++) {
    // He initialization factor often works well for ReLU
    parameters[`W${l}`] = randn(layer_dims[l], layer_dims[l - 1], Math.sqrt(2 / layer_dims[l - 1]));
    parameters[`b${l}`] = zeros(layer_dims[l], 1);
  }
  return parameters;
};

const linear_forward = (A, W, b) => {
  const Z = add(dot(W, A), b);
  return { Z, cache: { A, W, b } };
};

const linear_activation_forward = (A_prev, W, b, activation) => {
  const { Z, cache: linear_cache } = linear_forward(A_prev, W, b);
  let A, activation_cache;
  
  if (activation === "sigmoid") {
    ({ A, cache: activation_cache } = sigmoid(Z));
  } else if (activation === "relu") {
    ({ A, cache: activation_cache } = relu(Z));
  } else if (activation === "tanh") {
    ({ A, cache: activation_cache } = tanh(Z));
  }
  
  return { A, cache: { linear_cache, activation_cache } };
};

export const L_model_forward = (X, parameters) => {
  const caches = [];
  let A = X;
  const L = Object.keys(parameters).length / 2;

  for (let l = 1; l < L; l++) {
    let A_prev = A;
    const { A: nextA, cache } = linear_activation_forward(A_prev, parameters[`W${l}`], parameters[`b${l}`], "tanh");
    A = nextA;
    caches.push(cache);
  }

  const { A: AL, cache } = linear_activation_forward(A, parameters[`W${L}`], parameters[`b${L}`], "sigmoid");
  caches.push(cache);

  return { AL, caches };
};

export const compute_cost = (AL, Y) => {
  const m = Y[0].length;
  let cost = 0;
  for (let i = 0; i < Y[0].length; i++) {
    const y = Y[0][i];
    const al = Math.max(Math.min(AL[0][i], 0.9999999), 0.0000001); // Prevent log(0)
    cost += y * Math.log(al) + (1 - y) * Math.log(1 - al);
  }
  cost = (-1 / m) * cost;
  return cost;
};

const linear_backward = (dZ, cache) => {
  const { A: A_prev, W } = cache;
  const m = A_prev[0].length;

  const dW = multiplyScalar(dot(dZ, transpose(A_prev)), 1 / m);
  const db = multiplyScalar(sumAxis1(dZ), 1 / m);
  const dA_prev = dot(transpose(W), dZ);

  return { dA_prev, dW, db };
};

const linear_activation_backward = (dA, cache, activation) => {
  const { linear_cache, activation_cache } = cache;
  let dZ;

  if (activation === "relu") {
    dZ = relu_backward(dA, activation_cache);
  } else if (activation === "sigmoid") {
    dZ = sigmoid_backward(dA, activation_cache);
  } else if (activation === "tanh") {
    dZ = tanh_backward(dA, activation_cache);
  }

  const { dA_prev, dW, db } = linear_backward(dZ, linear_cache);
  return { dA_prev, dW, db };
};

export const L_model_backward = (AL, Y, caches) => {
  const grads = {};
  const L = caches.length;
  
  // Initialize backpropagation
  const dAL = AL.map((row, i) => row.map((val, j) => {
    const al = Math.max(Math.min(val, 0.9999999), 0.0000001);
    return -(Y[i][j] / al) + ((1 - Y[i][j]) / (1 - al));
  }));

  const current_cache = caches[L - 1];
  const { dA_prev, dW, db } = linear_activation_backward(dAL, current_cache, "sigmoid");
  grads[`dA${L - 1}`] = dA_prev;
  grads[`dW${L}`] = dW;
  grads[`db${L}`] = db;

  for (let l = L - 2; l >= 0; l--) {
    const cache = caches[l];
    const { dA_prev, dW, db } = linear_activation_backward(grads[`dA${l + 1}`], cache, "tanh");
    grads[`dA${l}`] = dA_prev;
    grads[`dW${l + 1}`] = dW;
    grads[`db${l + 1}`] = db;
  }

  return grads;
};

export const update_parameters = (parameters, grads, learning_rate) => {
  const L = Object.keys(parameters).length / 2;
  const new_parameters = {};
  
  for (let l = 1; l <= L; l++) {
    new_parameters[`W${l}`] = subtract(parameters[`W${l}`], multiplyScalar(grads[`dW${l}`], learning_rate));
    new_parameters[`b${l}`] = subtract(parameters[`b${l}`], multiplyScalar(grads[`db${l}`], learning_rate));
  }
  return new_parameters;
};
