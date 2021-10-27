import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import vuePlugin from 'rollup-plugin-vue'
import polyfill from 'rollup-plugin-polyfill-node'
import image from '@rollup/plugin-image'
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import progress from 'rollup-plugin-progress'
import filesize from 'rollup-plugin-filesize'

import bundleConfig from './rollup.bundle'
import componentsConfig from './rollup.components'
import examplesConfig from './rollup.dev'

const isProduct = process.env.NODE_ENV === 'production'
const customResolver = nodeResolve({
	extensions: ['.ts', '.tsx',  '.js', '.jsx', '.json', '.vue']
})
const commonRollupPlugins = [
	alias({
		entries: [{
			find: '@',
			replacement: path.resolve(__dirname, 'packages')
		}],
		customResolver
	}),
	commonjs({
		include: [
			'node_modules/**',
			'node_modules/**/*',
			'lib/**/*'
		]
	}),
	json(),
	polyfill(),
	nodeResolve({
		jsnext: true,
		main: true,
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.vue']
	}),
	image(),
	vuePlugin({
		include: /\.vue$/,
		target: 'browser'
	}),
	esbuild({
		include: /\.[jt]sx?$/, // default, inferred from `loaders` option
		exclude: /node_modules/, // default
		minify: isProduct,
		target: 'esnext',
		tsconfig: 'tsconfig.json',
		loaders: {
			'.js': 'jsx'
		}
	}),
	progress(),
	filesize()
]
export default function () {
	// 本地开发环境

	if (process.env.IS_SERVE) {
		return [
			bundleConfig(commonRollupPlugins, isProduct),
			examplesConfig(commonRollupPlugins, isProduct)
		]
	}
	// 打包生产

	if (process.env.BUILD === 'components') { // 分组件打包
		return componentsConfig(commonRollupPlugins, isProduct)
	} else if (process.env.BUILD === 'bundle') { // bundle包
		return bundleConfig(commonRollupPlugins, isProduct)
	}
	return [ // 全量打包
		bundleConfig(commonRollupPlugins, isProduct),
		componentsConfig(commonRollupPlugins, isProduct)
	]
}
