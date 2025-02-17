const morgan = require('morgan');
const fs = require('fs');

const logStream = fs.createWriteStream('./requests.log', { flags: 'a' });
const logger = morgan('combined', { stream: logStream });

module.exports = logger;
