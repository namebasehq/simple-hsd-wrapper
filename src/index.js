require('./helpers').loadConfigIntoEnv('../hsd.conf');
const FullNode = require('hsd/lib/node/fullnode');
const plugin = require('hsd/lib/wallet/plugin');

// create the full node
const node = new FullNode({
  config: true,
  argv: true,
  env: true,
  logFile: false,
  logConsole: true,
  logLevel: 'info',
  memory: false,
  workers: true,
  listen: false,
  spv: true,
  loader: require,
});

// sync with the network
(async () => {
  node.use(plugin);
  await node.ensure();
  await node.open();
  await node.connect();

  node.startSync();
})().catch(err => {
  console.error(err.stack);
  process.exit(1);
});
