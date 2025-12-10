/** @type {import('stylelint').Config} */
const stylelintConfig = {
	extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
	rules: {
		'no-empty-source': null,
		'selector-class-pattern': null,
	},
}

export default stylelintConfig
