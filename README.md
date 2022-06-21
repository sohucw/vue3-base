# vue3-base

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
### 配置说明
.editorconfig   .prettierrc
都安装一下

.eslintrc  也要配置一下

- css引入问题
<style lang="less" scoped>
@import url('../assets/style/todo');
</style>

### 问题定位
- // reactive 关联复杂数据结构
// https://juejin.cn/post/7038859745020608548#heading-2


### 需要安装的插件
Volar

### package.json里面的插件
postcss-px-to-viewport  可以将px单位自动转换成viewport单位（vw表示屏幕的1%）。
- 参考配置：https://gist.github.com/zzjtnb/d4172cdd0b958dbb940332753e735284
- 参考配置：https://segmentfault.com/a/1190000041809605

