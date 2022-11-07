const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://dybb.cdqianyun.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            }
        })
    ); 
};