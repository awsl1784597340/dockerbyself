module.exports = {
    devServer: {
        host: '127.0.0.1',
        port: '8080',
        proxy: {
            '/api': {
                target: 'http://106.12.189.105:8081',
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