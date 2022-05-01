module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        'vue/setup-compiler-macros': true
    },
    extends: ['plugin:vue/vue3-strongly-recommended', 'standard'],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        indent: [2, 4],
        'padded-blocks': 0,
        'eol-last': 0
    }
}