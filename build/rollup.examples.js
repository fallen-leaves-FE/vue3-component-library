
import path from 'path'
import postcss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy'
import replace from 'rollup-plugin-replace'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

export default function (commonRollupPlugins, isProduct) {
	return {
		input: path.resolve(__dirname, '../examples/main.ts'),
		output: {
			name: 'examplesBundle',
			file: 'dist/static/bundle.js',
			format: 'iife',
			extend: true
		},
		plugins: [
			...commonRollupPlugins,
			postcss({
				extract: 'bundle.min.css',
				minimize: isProduct
			}),
			replace({
				'process.env.NODE_ENV': JSON.stringify('development'),
				'process.env.VUE_ENV': JSON.stringify('browser')
			}),
			copy({
				targets: [{
					src: path.resolve(__dirname, '../examples/index.html'),
					dest: path.resolve(__dirname, '../dist')
				},
				{
					src: path.resolve(__dirname, '../packages/style/fonts'),
					dest: path.resolve(__dirname, '../dist')
				}]
			}),
			...(!isProduct ? [
				livereload({
					watch: path.resolve(__dirname, '../dist')
				}),
				serve({
					open: true,
					openPage: 'dist/index.html',
					contentBase: path.resolve(__dirname, '../dist'),
					port: 8888
				})
			] : [])
		]
	}
}
