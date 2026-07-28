'use strict';

module.exports = [
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 5,
			sourceType: 'commonjs',
			globals: {
				console: 'readonly',
				process: 'readonly'
			}
		},
		rules: {
			strict: ['error', 'global']
		}
	},
	{
		files: ['test/**/*.js'],
		languageOptions: {
			globals: {
				describe: 'readonly',
				it: 'readonly'
			}
		}
	}
];
