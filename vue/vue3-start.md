# Vue3

## 挂载全局变量
以echarts为例
```js
import * as echarts from 'echarts' 
...
const app = createApp(App); 
// vue3 给原型上挂载属性
app.config.globalProperties.$echarts = echarts;
```
组件中使用挂载的全局变量
```js
import { getCurrentInstance } from "vue"
const { proxy } = getCurrentInstance()
proxy.$echarts.init(xxx...)
```
## props 和默认值
TypeScript
```ts
export interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
```
JavaScript
```js
const props = defineProps({
  msg:{
    type:String,
    default: 'Hello World'
  }
})
```
