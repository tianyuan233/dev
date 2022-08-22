# Vue3

## props 和默认值

```html
<script setup lang="ts">
interface Props {
  msg:string
}
const {
  msg = 'test'
} = defineProps<Props>()
</script>
```
但是需要在 vite 开启一个配置项
```js
export default defineConfig({
  plugins: [vue({
    reactivityTransform: true
  })]
})
```