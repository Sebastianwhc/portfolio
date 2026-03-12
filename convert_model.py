import sys
import types
import numpy as np

# Patch deprecated numpy types that tensorflowjs still tries to use
np.object = object
np.bool = bool

# Mock tensorflow_hub so it doesn't crash trying to import removed tf.estimator
mock_hub = types.ModuleType('tensorflow_hub')
sys.modules['tensorflow_hub'] = mock_hub

from tensorflowjs.converters import converter

if __name__ == '__main__':
    converter.convert([
        '--input_format=tf_saved_model',
        'saved_model_temp',
        'public/lsc-model'
    ])
