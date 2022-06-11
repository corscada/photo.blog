require('toml-require').install({toml: require('toml')});

exports.getServerConfig = () =>  {
  let config = require('../config.toml');
  try {
    config = Object.assign(config, require('/etc/photo.blog/config.toml'));
  } catch (e) {}
  try {
    config = Object.assign(config, require(`${require('os').homedir()}/.config/photo.blog/config.toml`));
  } catch (e) {}

  return config;
};

exports.getImageConfig = (name, type) => {
  const config = require(`../public/images/${name}.toml`);
  config.fileName = name;
  config.fileType = type;

  if (config.alt) return config;
  else throw Error(`alt text required for ${name}`);
}
