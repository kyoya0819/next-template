module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "next/core-web-vitals"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "ordered-imports"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double",
            {
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "always"
        ],
        "object-curly-spacing": [
            "error",
            "always",
            {
                "objectsInObjects": false
            }
        ],
        "ordered-imports/ordered-imports": [
            "error"
        ],
        "import/order": [
            "error",
            {
                groups: [["builtin", "external", "type"], "parent"],
                pathGroups: [
                    {
                        pattern: "scripts/**",
                        group: "parent",
                        position: "before",
                    },
                    {
                        pattern: "components/**",
                        group: "parent",
                        position: "before",
                    },
                    {
                        pattern: "styles/**",
                        group: "parent",
                        position: "before",
                    },
                    {
                        pattern: "assets/**",
                        group: "parent",
                        position: "before",
                    },
                    {
                        pattern: "./scripts/**",
                        group: "parent",
                        position: "before",
                    },
                    {
                        pattern: "./components/**",
                        group: "parent",
                        position: "before",
                    },
                    {
                        pattern: "./styles/**",
                        group: "parent",
                        position: "before",
                    },
                    {
                        pattern: "./assets/**",
                        group: "parent",
                        position: "before",
                    }
                ],
                pathGroupsExcludedImportTypes: [],
                alphabetize: {
                    order: "asc",
                },
                "newlines-between": "always",
                warnOnUnassignedImports: true
            },
        ],
        "react/prop-types": "off",
        "@next/next/no-img-element": "off"
    }
};