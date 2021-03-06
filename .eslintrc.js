module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    rules: {
        'no-unused-vars': 'warn',
        'import/no-named-as-default': 'off',
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
            },
        ],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/jsx-uses-vars': 'error',
        'react/jsx-uses-react': 'error',
        'no-restricted-globals': 'off',
        'no-underscore-dangle': 'off',
        'no-prototype-builtins': 'off',
        'no-nested-ternary': 'off',
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'off',
        'import/no-cycle': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-param-reassign': 0,
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['off'],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^I[A-Z]',
                    match: true,
                },
            },
            {
                selector: 'typeAlias',
                format: ['PascalCase'],
                custom: {
                    regex: '^T[A-Z]',
                    match: true,
                },
            },
            {
                selector: 'enum',
                format: ['PascalCase'],
                custom: {
                    regex: '^E[A-Z]',
                    match: true,
                },
            },
        ],
        'react/no-array-index-key': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
    },
};
