const baseConfig = require('../../packages/config/tailwind/tailwind.base.cjs');

module.exports = {
  ...baseConfig,
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend
    }
  }
};
