import path from 'path'
import postcss from 'rollup-plugin-postcss'
import components from '../components.json'

export default function (commonRollupPlugins, isProduct) {
	return {
		input: components,
		output: {
			name: 'componentsBundle',
			dir: path.resolve(__dirname, '../lib/components'),
			format: 'es',
			exports: 'auto'
		},
		plugins: [
			...commonRollupPlugins,
			postcss({
				extract: false,
				minimize: isProduct
			})
		],
		external: ['vue']
	}
}
