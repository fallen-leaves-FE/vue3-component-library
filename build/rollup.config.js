import vuePlugin from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import scssPlugin from 'rollup-plugin-scss'
import postcss from 'postcss'
import { name } from '../package.json'
import commonjs from 'rollup-plugin-commonjs'
import postcssImport from 'postcss-import'
import postcssPressEnv from 'postcss-preset-env'

const file = type => `lib/${name}.${type}.js`

export { name, file }

export default {
    input: 'packages/index.ts',
    output: {
        name,
        file: file('esm'),
        format: 'es'
    },
    plugins: [
        nodeResolve(),
        typescript(),
        vuePlugin({
          include: /\.vue$/,
          target: 'browser'
        }),
        scssPlugin({
          output: 'lib/bundle.css',
          processor: css => postcss([
            postcssImport(),
            postcssPressEnv({ stage: 1 })
          ]).process(css).then(result => result.css)
        }),
        postcss([
          postcssImport(),
          postcssPressEnv()
        ]),
        commonjs({
          include: [
              "node_modules/**",
              "node_modules/**/*"
          ]
        })
    ],
    external: ['vue']
}