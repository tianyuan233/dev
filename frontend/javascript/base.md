# 基础

### 作用域

> JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域。

函数的作用域基于函数创建的位置

### 原型和原型链

参考链接
[JavaScript 深入之从原型到原型链](https://github.com/mqyqingfeng/Blog/issues/2)

### 闭包

> 闭包是指有权访问另一个函数作用域中的变量的函数
```JavaScript
function foo() {
    var a = 2;
    function bar() {
        console.log(a);
    }
    return bar;
}

var baz = foo();
baz(); // 2
```
























