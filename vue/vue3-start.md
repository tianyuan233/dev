# Vue3

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