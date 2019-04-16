const fs = require('fs');
const path = require('path');

// precondition: file is formatted correctly
function loadConfigIntoEnv(fileName) {
  fs
    .readFileSync(path.join(__dirname, fileName), 'utf-8')
    .split('\n')
    .filter(Boolean)
    .map(parseLine)
    .forEach(loadEnvVar);
}

function parseLine(line) {
  const [key, value] = line.split(': ');
  const envVarName = configKeyToEnvVarName(key);
  return [envVarName, value];
}

function configKeyToEnvVarName(key) {
  return 'HSD_' + key.replace(/-/g, '_').toUpperCase();
}

function loadEnvVar([name, value]) {
  process.env[name] = value;
}

module.exports = { loadConfigIntoEnv };
