const configureNativeX = require('@bonhill-group/package-global/config/native-x');

const config = configureNativeX();

config.enabled = false;

config
  .setAliasPlacements('default', [
    { name: 'default', id: 'NOT_SET' },
  ]);

module.exports = config;
