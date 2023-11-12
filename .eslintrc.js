module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
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
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next"
    ],
    "rules": {
        "react/jsx-indent": ["error", 2],
        "react/jsx-indent-props": ["error", 2],
        "@typescript-eslint/promise-function-async": ["warn"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "semi": "off",
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/naming-convention": "off",
        "react/react-in-jsx-scope": "off",
        "import/order": ["error", {
            "groups": [
                "internal",
                "external",
                "builtin",
            ],
            "newlines-between": "always"
        }],
        "i18next/no-literal-string": "error"
    }
}
