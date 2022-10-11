# Vue3

## props 和默认值

```html
<script setup lang="ts">
interface Props {
  msg:string
}

const props = withDefaults(
  defineProps<Props>(), { msg: 'hello world' }
)
```