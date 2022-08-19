# 基础使用

## emit 参数

#### 1.子组件只传一个参数时：
```javascript
//父组件
<Item @handle="handle($event,parentParam)"/>
//子组件
this.$emit("handle",childParam);
```

其中`parentParam`是用户在父组件自定义的参数,`childParam`是在子组件传给父组件的参数

#### 2.子组件传多个参数时：
```javascript
//父组件
<Item @handle="handle(arguments,parentParam)"/>
//子组件
this.$emit("handle",childParam1,childParam2,childParam3);
```
使用`arguments`接收来自子组件的参数