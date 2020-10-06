module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['google', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['prettier', '@typescript-eslint'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				tabWidth: 4,
				singleQuote: true,
				'object-curly-spacing': ['error', 'always'],
				'array-bracket-spacing': ['error', 'always'],
				'computed-property-spacing': ['error', 'always'],
			},
		],
	},
};
