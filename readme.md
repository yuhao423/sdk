

### 这个项目遇到的坑和亮点



1. rollup打包 
   
    - **@rollup/plugin-node-resolve**: Rollup 能够正确地解析和打包 Node.js 模块和第三方包（通常是通过 npm 或 pnpm 安装的依赖）。
    - **@rollup/plugin-json** :想从 JSON 文件中导入数据，可以使用 @rollup/plugin-json
    - **@rollup/plugin-babel** :用于转换 ES6+ 代码
    - **@rollup/plugin-commonjs** :在 Rollup 中转换 CommonJS 模块，使它们可以被 ESM 代码正确导入和使用。
    
2. sdk参数的设置
    
    - **dsn** 上传地址 默认`‘’`
    - **disabled** 全局禁用 默认`false`
    - **maxStorageNumber** 面包屑中**stack**栈最大数量，最小10，最大80 默认`10`
    - **beforePushBreadCrumbFunction** 每次push之前执行的钩子函数 默认 `function`
    
    - **wxAppOnError** 是否要监控appOnError 默认`true`
    - **wxOnUnhandledRejection** 是否要监听onUnhandledRejection 默认`true`
    - **wxOnPageNotFound** 是否要监听onPageNotFound 默认`true`
    - **wxRoute**  是否监视微信小程序调转路由 默认`true`
    更多
    ...
