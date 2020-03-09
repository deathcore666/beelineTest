const winston = require('winston');

const alignedWithColorsAndTime = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf((info) => {
        const {
            timestamp, level, message, ...args
        } = info;

        const ts = timestamp.slice(0, 19).replace('T', ' ');
        return `${ts} [${level}]: ${getMessage(message)} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
    }),
);

const getMessage = (message) => {
    if(typeof message === 'string') {
        return message;
    }
    return JSON.stringify(message);
};

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
});

if (process.env.ND_ENV === 'production') {
    logger.add([
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]);
}

if (process.env.ND_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: alignedWithColorsAndTime,
        prettyPrint: true
    }));
}

module.exports = logger;