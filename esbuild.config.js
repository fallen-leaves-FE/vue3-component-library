import { build } from 'esbuild'
import vue from 'esbuild-plugin-vue'
import { sassPlugin } from 'esbuild-sass-plugin'
import progress from 'esbuild-plugin-progress'
import { esbuildPluginFileSize } from 'esbuild-plugin-filesize'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'
import postcssImport from 'postcss-import'
import browserSync from 'browser-sync'
import components from './components.js'

// 判断当前环境
const isServe = process.argv.includes('serve')
// 包名
const libraryName = 'fa-ui.js'

// 封装esbuild本地服务插件
function servePlugin (serveOptions = {}) {
  // 创建服务实例
  const bs = browserSync.create('dev-server')

  return {
    name: 'devServer',
    setup (build) {
      build.onEnd(() => {
        // 避免重复启动服务
        if (!bs.active) {
          // 初始化服务
          bs.init({
            port: 3000,
            watch: true,
            open: true,
            ...serveOptions
          })
        }
      })
    }
  }
}

// 打包组件库
async function buildLibrary () {
  await build({
    entryPoints: ['packages/index.ts'],
    outfile: `lib/${libraryName}`,
    bundle: true,
    format: 'esm',
    tsconfig: 'tsconfig.json',
    treeShaking: true,
    minify: true,
    external: ['vue'],
    loader: {
      '.eot': 'file',
      '.svg': 'file',
      '.ttf': 'file',
      '.woff': 'file'
    },
    plugins: [
      sassPlugin({
        async transform (source) {
          const { css } = await postcss([
            autoprefixer,
            postcssPresetEnv(),
            postcssImport()
          ]).process(source, { from: undefined })
          return css
        }
      }),
      vue(),
      progress(),
      esbuildPluginFileSize()
    ]
  })

  await build({
    entryPoints: Object.values(components),
    outdir: 'lib/components',
    bundle: true,
    format: 'esm',
    tsconfig: 'tsconfig.json',
    treeShaking: true,
    minify: true,
    external: ['vue'],
    loader: {
      '.eot': 'dataurl',
      '.svg': 'dataurl',
      '.ttf': 'dataurl',
      '.woff': 'dataurl'
    },
    plugins: [
      sassPlugin({
        async transform (source) {
          const { css } = await postcss([
            autoprefixer,
            postcssPresetEnv(),
            postcssImport()
          ]).process(source, { from: undefined })
          return css
        }
      }),
      vue(),
      progress()
    ]
  })

}

// 打包预览页面
function buildExamples () {
  build({
    entryPoints: ['examples/main.ts'],
    outdir: 'examples/static',
    bundle: true,
    tsconfig: 'tsconfig.json',
    format: 'iife',
    watch: true,
    sourcemap: true,
    loader: {
      '.ts': 'ts',
      '.eot': 'file',
      '.svg': 'file',
      '.ttf': 'file',
      '.woff': 'file'
    },
    plugins: [
      sassPlugin({
        async transform (source) {
          const { css } = await postcss([
            autoprefixer,
            postcssPresetEnv(),
            postcssImport()
          ]).process(source, { from: undefined })
          return css
        }
      }),
      vue(),
      progress(),
      servePlugin({
        server: 'examples'
      })
    ]
  })
}

// 启动函数
async function start () {
  if (isServe) {
    buildExamples()
  } else {
    buildLibrary()
  }
}

start()
