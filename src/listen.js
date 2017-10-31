// Environment variables
const {
    AUTH_HOST,
    AUTH_ENDPOINT,
    REDIS_HOST,
    REDIS_PORT,
    NODE_ENV,
    HOST,
    PORT,
    ALLOW_CORS,
    ALLOW_ORIGIN,
    ALLOW_METHODS,
    ALLOW_HEADERS,
} = require('./config')

const LaravelEcho = require('laravel-echo-server')

/**
 * The Laravel Echo Server options.
 */
const options = {
    authHost: AUTH_HOST,
    authEndpoint: AUTH_ENDPOINT,
    database: 'redis',
    databaseConfig: {
        redis: {
            host: REDIS_HOST,
            port: REDIS_PORT,
        },
        sqlite: {
            databasePath: '/database/laravel-echo-server.sqlite',
        },
    },
    devMode: NODE_ENV !== 'production',
    host: HOST,
    port: PORT,
    protocol: 'http',
    apiOriginAllow: {
        allowCors: ALLOW_CORS,
        allowOrigin: ALLOW_ORIGIN,
        allowMethods: ALLOW_METHODS,
        allowHeaders: ALLOW_HEADERS,
    },
}

module.exports = () => {
    return LaravelEcho.run(options)
}
