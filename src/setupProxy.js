const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/edu", {
      // target: 'http://10.1.133.9:8000', //Zhou Deyong
      target: 'http://10.1.132.83:8000',   //Kan Baochun
      // target:'http://10.1.133.16:8000',// jin hao
      changeOrigin: true,
      pathRewrite: {
        '^/edu': ''
      }
    })
  );
};