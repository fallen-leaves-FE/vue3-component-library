import path from 'path'
import postcss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy'
import { name } from '../package.json'

const file = (type = 'min') => path.resolve(__dirname, `../lib/${name}.${type}.js`)

export default function (commonRollupPlugins, isProduct) {
	return {
		input: path.resolve(__dirname, '../packages/index.ts'),
		output: [
			{
				name,
				file: file('esm'),
				format: 'es',
				exports: 'auto',
				sourcemap: !isProduct
			},
			{
				name,
				file: file('umd'),
				format: 'umd',
				globals: {
					'vue': 'Vue'
				},
				sourcemap: !isProduct,
				exports: 'named'
			}
		],
		plugins: [
			...commonRollupPlugins,
			postcss({
				extract: `css/${name}.min.css`,
				minimize: isProduct
			}),
			copy({
				targets: [{
					src: path.resolve(__dirname, '../packages/assets/fonts/*'),
					dest: path.resolve(__dirname, '../lib/fonts')
				}]
			})
		],
		external: ['vue']
	}
}
