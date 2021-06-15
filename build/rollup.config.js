import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import vuePlugin from 'rollup-plugin-vue'

import bundleConfig from './rollup.bundle'
import componentsConfig from './rollup.components'
import examplesConfig from './rollup.examples'

const isProduct = process.env.NODE_ENV === 'production'

const commonRollupPlugins = [
	nodeResolve({
		jsnext: true,
		main: true
	}),
	vuePlugin({
		include: /\.vue$/,
		target: 'browser',
		css: true,
		compileTemplate: true
	}),
	esbuild({
		include: /\.[jt]sx?$/, // default, inferred from `loaders` option
		exclude: /node_modules/, // default
		sourceMap: !isProduct, // default
		minify: isProduct,
		target: 'esnext',
		tsconfig: 'tsconfig.json',
		loaders: {
			'.js': 'jsx'
		}
	}),
	commonjs({
		include: [
			'node_modules/**',
			'node_modules/**/*',
			'lib/**/*'
		]
	})
]

export default [
	bundleConfig(commonRollupPlugins, isProduct),
	componentsConfig(commonRollupPlugins, isProduct),
	examplesConfig(commonRollupPlugins, isProduct)
]
