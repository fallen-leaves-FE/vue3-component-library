import vuePlugin from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'
import scssPlugin from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import postcssMinify from 'postcss-minify'
import { name } from './package.json'
import postcssImport from 'postcss-import'
import postcssPressEnv from 'postcss-preset-env'

const file = (type = 'min') => `lib/js/${name}.${type}.js`

export { name, file }

export default {
    input: 'packages/index.ts',
    output: [
      {
        name,
        file: file('esm'),
        format: 'es',
        exports: 'auto'
      },
      {
        name,
        file: file('umd'),
        format: 'umd',
        globals: {
          'vue': 'Vue',
        },
        exports: 'named'
      }
    ],
    plugins: [
        nodeResolve(),
        typescript(),
        terser(),
        vuePlugin({
          include: /\.vue$/,
          target: 'browser',
          css: true,
          compileTemplate: true
        }),
        scssPlugin({
          output: `lib/style/css/${name}.min.css`,
          watch: 'packages',
          prefix: '@import "../style/scss/variable";',
          external: false,
          processor: css => postcss([
            autoprefixer(),
            postcssMinify(),
            postcssImport(),
            postcssPressEnv()
          ]).process(css).then(result => result.css)
        }),
        postcss([
          autoprefixer(),
          postcssMinify(),
          postcssImport(),
          postcssPressEnv()
        ]),
        copy({
          targets: [
            { src: 'packages/style/scss/*.scss', dest: 'lib/style/scss' },
            { src: 'packages/style/fonts/*', dest: 'lib/style/fonts' }
          ]
        }),
        commonjs({
          include: [
              "node_modules/**",
              "node_modules/**/*"
          ]
        })
    ],
    external: ['vue']
}