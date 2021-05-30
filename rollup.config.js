import { nodeResolve } from '@rollup/plugin-node-resolve'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import postcssImport from 'postcss-import'
import postcssMinify from 'postcss-minify'
import postcssPressEnv from 'postcss-preset-env'
import commonjs from 'rollup-plugin-commonjs'
import copy from 'rollup-plugin-copy'
import esbuild from 'rollup-plugin-esbuild'
import livereload from 'rollup-plugin-livereload'
import replace from 'rollup-plugin-replace'
import scssPlugin from 'rollup-plugin-scss'
import serve from 'rollup-plugin-serve'
import vuePlugin from 'rollup-plugin-vue'
import { name } from './package.json'


const file = (type = 'min') => `lib/js/${name}.${type}.js`
const commonPlugins = [
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
    sourceMap: false, // default
    minify: process.env.NODE_ENV === 'production',
    target: 'esnext',
    tsconfig: 'tsconfig.json',
    loaders: {
      '.js': 'jsx'
    }
  }),
  commonjs({
    include: [
        "node_modules/**",
        "node_modules/**/*",
        "lib/**/*"
    ]
  })
]
const config = [
  {
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
      ...commonPlugins,
      scssPlugin({
        output: `lib/style/css/${name}.min.css`,
        watch: 'packages',
        external: false,
        processor: css => postcss([
          autoprefixer(),
          postcssMinify(),
          postcssImport(),
          postcssPressEnv()
        ]).process(css).then(result => result.css)
      }),
      copy({
        targets: [
          { src: 'packages/style/scss/*.scss', dest: 'lib/style/scss' },
          { src: 'packages/style/fonts/*', dest: 'lib/style/fonts' }
        ]
      })
    ],
    external: ['vue']
  },
  {
    input: 'examples/main.ts',
    output: {
      name,
      file: 'dist/js/bundle.js',
      format: 'iife',
      extend: true
    },
    plugins: [
      ...commonPlugins,
      scssPlugin({
        output: `dist/css/bundle.min.css`,
        watch: 'examples',
        external: false,
        processor: css => postcss([
          autoprefixer(),
          postcssMinify(),
          postcssImport(),
          postcssPressEnv()
        ]).process(css).then(result => result.css)
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
        'process.env.VUE_ENV': JSON.stringify('browser')
      }),
      copy({
        targets: [
          { src: 'examples/index.html', dest: 'dist' },
          { src: 'packages/style/fonts', dest: 'dist' }
        ]
      }),
      ...(process.env.NODE_ENV === 'development' ? [
          livereload({
          watch: 'dist'
        }),
        serve({
          open: true,
          openPage: 'dist/index.html',
          contentBase: 'dist',
          port: 8888
        })
      ] : [])
    ],
  }
]

export default config