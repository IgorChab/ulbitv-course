module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:storybook/recommended",
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            },
        },
        {
            files: ['**/?(*.)+(spec|test|stories).[tj]s?(x)'],
            rules: {
                "i18next/no-literal-string": "off"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next",
        "react-hooks"
    ],
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/naming-convention": "off",
        "react/react-in-jsx-scope": "off",
        "react/display-name": "off",
        "react/prop-types": "off",
        "@typescript-eslint/indent": "off",
        "multiline-ternary": "off",
        "semi": "off",
        "n/no-callback-literal": "off",
        "@typescript-eslint/promise-function-async": ["warn"],
        "react-hooks/exhaustive-deps": "warn",
        "react/jsx-indent": ["error", 2],
        "react/jsx-indent-props": ["error", 2],
        "@typescript-eslint/semi": ["error", "always"],
        "import/order": ["error", {
            "groups": [
                "internal",
                "external",
                "builtin",
            ],
            "newlines-between": "always"
        }],
        "i18next/no-literal-string": "error",
        "max-len": ['error', {
            code: 100,
            ignoreComments: true,
            ignoreUrls: true,
        }],
        "react-hooks/rules-of-hooks": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
    }
}
