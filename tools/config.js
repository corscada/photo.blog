require('toml-require').install({toml: require('toml')});
let config = require('../config.toml');
try {
  config = Object.assign(config, require('/etc/photo.blog/config.toml'));
} catch (e) {}
try {
  config = Object.assign(config, require(`${require('os').homedir()}/.config/photo.blog/config.toml`));
} catch (e) {}

exports.getServerConfig = async () => await  config;

exports.getImageConfig = async (name) => {
  const config = ({name, ...require(`../public/images/${name}.toml`)});

  if (config.alt) return config;
  else throw Error(`alt text required for ${name}`);
}
