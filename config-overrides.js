const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({})(config);

  return config;
};
