const envalid = require('envalid')
const {
    cleanEnv,
    host,
    str,
    port,
    url,
    bool,
} = envalid

module.exports = cleanEnv(process.env, {
    NODE_ENV: str({
        default: 'production',
        desc: 'Node environment name',
    }),

    HOST: host({
        default: '0.0.0.0',
        desc: 'Application host',
    }),
    PORT: port({
        default: 6001,
        desc: 'Application port',
    }),
    SERVICE_NAME: str({
        default: 'viblo-websocket',
        desc: 'Application service name',
    }),
    REDIS_HOST: str({
        default: '127.0.0.1',
        desc: 'Redis host: IP, Domain, Docker container hostname',
    }),
    REDIS_PORT: port({
        default: 6379,
        desc: 'Redis port',
    }),
    AUTH_HOST: url({
        desc: 'API authentication host',
    }),
    AUTH_ENDPOINT: str({
        default: '/api/broadcasting/auth',
        desc: 'API authentication endpoint',
    }),
    ALLOW_CORS: bool({
        default: false,
        desc: 'Enable CORS',
    }),
    ALLOW_ORIGIN: url({
        default: 'http://localhost',
    }),
    ALLOW_METHODS: str({
        default: '',
    }),
    ALLOW_HEADERS: str({
        default: '',
    }),
})
