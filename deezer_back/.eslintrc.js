module.exports = {
    "extends": [
        "standard",
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    "rules": {
        "indent": ["error", 4],
        "semi": ["error", "always"]
    },
    "plugins": ['import']
};