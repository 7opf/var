var path = require('path');

exports.CONFIG = process.env.ENV_VAR_CONFIG_FILE || 'env.json';

exports.get = (fileName) => path.join(process.cwd(), fileName);
