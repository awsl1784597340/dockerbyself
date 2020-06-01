module.exports = {
    devServer: {
        host: '127.0.0.1',
        port: '8080',
        proxy: {
            '/api': {
                target: 'http://120.79.202.172:8080',
                changeOrigin: true,
                secure: false,
                ws: true,
                pathRewrite: {
                    "^/api": "/api"
                }
            }
        },
        disableHostCheck: true
    },
};