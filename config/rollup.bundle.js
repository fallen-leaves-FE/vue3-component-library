import path from 'path'
import postcss from 'postcss'
import scss from 'rollup-plugin-scss'
import copy from 'rollup-plugin-copy'
import { name } from '../package.json'
import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'
import postcssMinify from 'postcss-minify'
import postcssImport from 'postcss-import'

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
			scss({
				output: `lib/css/${name}.min.css`,
				prefix: '@import "./variable";',
				processor: () => postcss([
					autoprefixer(),
					postcssPresetEnv(),
					postcssMinify(),
					postcssImport()
				]),
				sass: require('node-sass')
			}),
			...commonRollupPlugins,
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
