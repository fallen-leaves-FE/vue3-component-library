# Rollup + Typescript + Vue3.0组件库模板

## 功能介绍
-	rollup模块化打包
-	typescript
-	esbuild打包编译
-	jest + @vue/test-utils 组件测试
-	eslint代码规范检查
-	sass，postcss预处理

## 使用Stylus/Less
默认支持Sass预处理，如需使用Stylus/Less，安装对应的解析器
-	Stylus: `yarn add -D stylus`
- Less: `yarn add -D less`
## 开发指南
请使用wecoder-cli初始化使用
```
# 安装cli

npm install -g wecoder-cli

# 初始化项目

wecoder init <project-name>

# 1.项目基本配置
# 2.选择基于rollup的vue3.0组件库模板
# 3.等待初始化完成
cd <project-name>
```

安装依赖
```
npm install
# or
yarn
```

本地开发
```
npm run dev
# or
yarn dev
```

单元测试
```
npm run test
# or
yarn test
```

生产打包
```
npm run build
# or
yarn build
```

## 目录结构
```
...
packages -------------- 组件库源码
 - Button ------------- 样例组件目录
  - index.ts ---------- 样例组件注册入口
  - index.vue --------- 样例组件源码
 - index.ts ----------- 组件库打包入口文件
examples -------------- 开发预览页面源码
 - main.ts ------------ 预览页入口文件
 - App.vue ------------ 预览页入口组件
 - index.html --------- 预览页htlm模板
tests ----------------- 单元测试目录
 - **/*.spec.ts ------- 单元测试文件
types ----------------- ts注解文件目录
.editorconfig --------- 编辑器配置文件
.eslintignore --------- eslint检查忽略目录
.eslintrc ------------- eslint检查配置文件
jest.config.js -------- jest测试配置文件
rollup.config.js ------ rollup配置文件
tsconfig.json --------- ts编译配置文件
...
```

