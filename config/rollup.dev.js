
import path from 'path'
import copy from 'rollup-plugin-copy'
import replace from 'rollup-plugin-replace'
import html from 'rollup-plugin-html2'
import postcss from 'rollup-plugin-postcss'
import browserSync from 'rollup-plugin-browsersync'

export default function (commonRollupPlugins) {
	return {
		input: path.resolve(__dirname, '../examples/main.ts'),
		output: {
			name: 'examplesBundle',
			file: 'dist/bundle.js',
			format: 'iife',
			extend: true,
			sourcemap: true
		},
		plugins: [
			...commonRollupPlugins,
			replace({
				'process.env.NODE_ENV': JSON.stringify('development'),
				'process.env.VUE_ENV': JSON.stringify('browser')
			}),
			postcss(),
			copy({
				targets: [{
					src: path.resolve(__dirname, '../lib/fonts/*'),
					dest: path.resolve(__dirname, '../dist/fonts')
				}]
			}),
			html({
				template: 'examples/index.html',
				fileName: 'index.html'
			}),
			browserSync({
				server: {
					baseDir: path.resolve(__dirname, '../dist')
				},
				port: 8888
			})
		]
	}
}
