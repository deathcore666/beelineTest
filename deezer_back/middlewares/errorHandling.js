const sendErrorToClient = (error, res) => res.status(error.code ? error.code : 500).send(error.message ? error.message : 'Deezer screwed up, boi');

const errors = {
    request: {
        fail: (forData) => {400, `request for ${forData} is failed`;}
    },
    authorization: {
        badToken: { code: 401, message: 'Bad token provided.' },
        noToken: { code: 401, message: 'No token provided.' },
        passwordMismatch: { code: 401, message: 'incorrect password provided.' },
        requiredDataNotProvided: { code: 401, message: 'required data not provided.' }
    },
    permissions: {
        notPermittedOp: { code: 403, message: 'No permissions for do that' }
    }
};

module.exports = {
    sendErrorToClient,
    ...errors,
};
