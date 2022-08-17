# 插件

插件通常用来为 Vue 添加全局功能

```js
const install = (Vue,option={}) => {
  console.log('install',option)
  //注册全局组件
  Vue.component(XXX)
}

export default {
  install
}
```
使用方法：
```js
Vue.use(plugin,{version:'1.0.0'})
```

看一下`Vue.use()`的实现：
```js
import type { GlobalAPI } from 'types/global-api'
import { toArray, isFunction } from '../util/index'

export function initUse(Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | any) {
    //如果已经安装，则不再安装
    const installedPlugins =
      this._installedPlugins || (this._installedPlugins = [])
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // 额外的参数
    const args = toArray(arguments, 1)
    args.unshift(this)
    
    // apply调用install方法
    if (isFunction(plugin.install)) {
      plugin.install.apply(plugin, args)
    } else if (isFunction(plugin)) {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}
```