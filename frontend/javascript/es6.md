# es6

## 导入和导出
### 导出单个特性
```js
export const name1 = …;
export function FunctionName(){...}
export class ClassName {...}
```
### 导出列表
```js
export { name1, name2 };
```
### 重命名导出
```js
export { variable1 as name1, variable2 as name2, …, nameN };
```
### 解构导出并重命名
```js
export const { name1, name2: bar } = o;
```
### 默认导出
```js
export default ()=> {}
export default function (…) { … } 
export default function name1(…) { … }
export { name1 as default, … };
```
### 导出模块合集
```js
export * from …; 
export * as name1 from …; 
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
```
::: tip 链接
[cannot-export-const-arrow-function](https://stackoverflow.com/questions/34676984/cannot-export-const-arrow-function)
:::



## 解构

## 深拷贝和浅拷贝
### 浅拷贝
fliter也可以实现浅拷贝
```js
const arrA = [{name:'qwe'}]
const arrB = arrA.filter(x=>x)
```
