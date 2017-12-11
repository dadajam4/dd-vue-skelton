const config = require('app-root-path').require('/config');



const serverSettings = {
  public: {
    port  : 3000,
    static: {
      '/': config.path('public'),
    },
    historyApiFallback: true,
  },
};



module.exports = serverSettings;
