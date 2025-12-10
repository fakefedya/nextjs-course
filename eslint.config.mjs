import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import importPlugin from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'

const config = defineConfig([
	...nextVitals,
	...nextTs,
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: {
			import: importPlugin,
			'unused-imports': unusedImports,
		},
		rules: {
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-debugger': 'error',
			'unused-imports/no-unused-imports': 'off',
			'import/order': [
				'error',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						'parent',
						'sibling',
						'index',
					],
					'newlines-between': 'always',
				},
			],
		},
	},

	{
		files: ['stylelint.config.mjs'],
		rules: {
			'import/no-anonymous-default-export': 'off',
		},
	},

	prettier,
	globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])

export default config
