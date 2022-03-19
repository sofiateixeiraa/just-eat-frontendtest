const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('/restaurants/bypostcode/ec4m',
            {
                target: 'https://uk.api.just-eat.io',
                changeOrigin: true
            })
    )

}