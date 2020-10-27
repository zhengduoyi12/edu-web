const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        proxy("/edu", {
            target: 'http://10.1.133.9:8000',   //zhou
            target: 'http://10.1.132.83:8000',   //kan
            changeOrigin: true,
            pathRewrite: {
                '^/edu': ''
            }
        })
    );
};