const fs = require('fs');
const { dependencies } = require('../package.json');

const data = `REACT_APP_BREEJS_LATER_VERSION=${dependencies['@breejs/later']}`;
fs.writeFileSync('.env', data);
