const env = process.env.NODE_ENV;

const btcSettings = () => {
    if (env==='development') {
        return {
            btcTxFeeSat: 300000,
            sochainSettings: {
                apiUrl: 'https://chain.so/api/v2',
                minimumConfirmations: 1,
                network: 'btctest'
            },
        };
    }
    if (env==='production') {
        return {
            btcTxFeeSat: 15000,
            sochainSettings: {
                apiUrl: 'https://chain.so/api/v2',
                minimumConfirmations: 1,
                network: 'btc'
            },
        };
    }
};

module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: '8081',
    appHost: process.env.ND_APP_HOST || 'https://e749c8f3.ngrok.io',
    secret: 'd6F3Efeq',
    orderDeadlineInMin:{
        qiwi: 10,
        bitcoin: 40,
    },
    telegramBotSessionInSec: 300,
    ngrok: 'https://a469b70f.ngrok.io',
    qiwi: {
        maxDeposit: 14000,
        defaultLimitRub: 30000,
        apiUrl: 'https://edge.qiwi.com',
    },
    cloudinaryCreds: {
        cloud_name: 'cloudbaike',
        api_key: '155874445797269',
        api_secret: 'f_HpkY4pS3CrEDR8vpRoRE3aWAY'
    },
    DB:{
        link: `mongodb://${process.env.ND_MONGO_USER}:${process.env.ND_MONGO_PASS}@${process.env.ND_MONGO_HOST+':'+process.env.ND_MONGO_PORT}/${env === 'development' ? 'new-dashboard-dev' : 'new-dashboard'}`
    },
    mailer: {
        service: '',
        email: '',
        password: ''
    },
    roles: [
        { type: 'admin' },
        { type: 'oper' },
        { type: 'kladmen' }
    ],
    numberOfBotsForEachClient: 20,
    ...btcSettings()
};
