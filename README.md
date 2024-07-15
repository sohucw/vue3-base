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


###
preload 和 prefetch 区别

preload 告诉浏览器立即加载资源;
prefetch 告诉浏览器在空闲时才开始加载资源；
preload、prefetch 仅仅是加载资源，并不会“执行”;
preload、prefetch 均能设置、命中缓存；
正确使用 preload、prefetch 不会导致重复请求；




