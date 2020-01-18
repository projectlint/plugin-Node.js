const requireDirectory = require('require-directory')


const rules = requireDirectory(module, './rules')


exports.config = {
  recommended: {
    'version': {
      'error': {status: 'maintained'},
      'warning': {status: 'lts_active'}
    }
  },
  strict: {
    'version': {
      'error': {status: 'lts_active'}
    }
  }
}

exports.rules = rules
