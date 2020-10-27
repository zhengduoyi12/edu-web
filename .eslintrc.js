module.exports = {
    "root": true,
    "env": {
        "browser": true,
        'es6': true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "modules": true
        },
        "ecmaVersion": 2017,
        "sourceType": "module",
    },
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": [2, "always"],
        "no-multi-spaces": 2,
        "react/prop-types": 0,
        "no-unused-vars": 0,
        'indent' : ["warn", 2],
        "react/display-name": "off"
    },
    "globals": {},
    "settings": {
        "react": {
          "version": "16.13.1",
        }
      },
};
