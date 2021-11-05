import path from 'path'
import postcss from 'postcss'
import scss from 'rollup-plugin-scss'
import components from '../components.json'
import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'
import postcssMinify from 'postcss-minify'
import postcssImport from 'postcss-import'

export default function (commonRollupPlugins) {
	const { componentsMaps, webComponents } = components
	const configList = []
	for (const [fileName, input] of Object.entries(componentsMaps)) {
		const isWebComponent = webComponents.findIndex(name => name === fileName) > -1
		if (isWebComponent) {
			configList.push({
				input,
				output: {
					name: fileName,
					file: path.resolve(__dirname, `../lib/components/${fileName}.js`),
					format: 'iife',
					extend: true,
					exports: 'named'
				},
				plugins: [
					scss({
						output: false,
						processor: () => postcss([
							autoprefixer(),
							postcssPresetEnv(),
							postcssImport()
						]),
						sass: require('node-sass')
					}),
					...commonRollupPlugins
				]
			})
		} else {
			configList.push({
				input,
				output: {
					name: fileName,
					file: path.resolve(__dirname, `../lib/components/${fileName}.js`),
					format: 'es',
					exports: 'auto'
				},
				plugins: [
					scss({
						output: `lib/css/${fileName}.css`,
						prefix: '@import "./variable";',
						processor: () => postcss([
							autoprefixer(),
							postcssPresetEnv(),
							postcssMinify(),
							postcssImport()
						]),
						sass: require('node-sass')
					}),
					...commonRollupPlugins
				],
				external: ['vue']
			})
		}
	}

	return configList
}
