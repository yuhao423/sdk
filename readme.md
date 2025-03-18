

### 这个项目遇到的坑和亮点

1. rollup打包配置，
    **@rollup/plugin-node-resolve**: Rollup 能够正确地解析和打包 Node.js 模块和第三方包（通常是通过 npm 或 pnpm 安装的依赖）。
    **@rollup/plugin-json** :想从 JSON 文件中导入数据，可以使用 @rollup/plugin-json
    **@rollup/plugin-babel** :用于转换 ES6+ 代码
    **@rollup/plugin-commonjs** :在 Rollup 中转换 CommonJS 模块，使它们可以被 ESM 代码正确导入和使用。