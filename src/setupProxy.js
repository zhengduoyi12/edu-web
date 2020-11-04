const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/edu", {
<<<<<<< HEAD
      // target: 'http://10.1.133.9:8000', //Zhou Deyong
      target: 'http://10.1.132.83:8000',   //Kan Baochun
      // target:'http://10.1.133.16:8000',// jin hao
=======
      //target: 'http://10.1.133.9:8000', //Zhou Deyong
      // target: 'http://10.1.132.83:8000',   //Kan Baochun
      // target:'http://10.1.133.16:8000',// jin hao
      target:'http://10.1.132.200:8000',//dev
>>>>>>> d01246ba7eb8ddfa5e4c6ca8089f079064fd7fb9
      changeOrigin: true,
      pathRewrite: {
        '^/edu': ''
      }
    })
  );
};