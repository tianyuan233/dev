# 基础
### 类型检测
在JavaScript中，有几种常见的方式用于进行类型检测：

1. typeof 操作符：typeof是一元操作符，用于检测一个值的数据类型。它返回一个表示数据类型的字符串。

   示例：
   ```javascript
   typeof 42; // "number"
   typeof "Hello"; // "string"
   typeof true; // "boolean"
   typeof undefined; // "undefined"
   typeof null; // "object" (这是一个历史遗留问题，实际上null是一个特殊的对象类型)
   typeof []; // "object"
   typeof {}; // "object"
   typeof function() {}; // "function"
   ```

2. instanceof 操作符：instanceof用于检测一个对象是否是某个构造函数创建的实例。

   示例：
   ```javascript
   const arr = [];
   arr instanceof Array; // true

   const obj = {};
   obj instanceof Object; // true

   function Person() {}
   const person = new Person();
   person instanceof Person; // true
   ```

3. constructor 属性：每个对象都有一个constructor属性，指向创建该对象的构造函数。可以通过该属性来进行类型检测。

   示例：
   ```javascript
   const num = 42;
   num.constructor === Number; // true

   const str = "Hello";
   str.constructor === String; // true

   const bool = true;
   bool.constructor === Boolean; // true

   const arr = [];
   arr.constructor === Array; // true

   const obj = {};
   obj.constructor === Object; // true

   function Person() {}
   const person = new Person();
   person.constructor === Person; // true
   ```

4. Object.prototype.toString() 方法：该方法返回一个表示对象类型的字符串。可以使用该方法对各种数据类型进行类型检测。

   示例：
   ```javascript
   Object.prototype.toString.call(42); // "[object Number]"
   Object.prototype.toString.call("Hello"); // "[object String]"
   Object.prototype.toString.call(true); // "[object Boolean]"
   Object.prototype.toString.call(undefined); // "[object Undefined]"
   Object.prototype.toString.call(null); // "[object Null]"
   Object.prototype.toString.call([]); // "[object Array]"
   Object.prototype.toString.call({}); // "[object Object]"
   Object.prototype.toString.call(function() {}); // "[object Function]"
   ```

这些是常见的用于进行类型检测的方法。在实际应用中，可以根据具体的需求和上下文选择合适的方式来进行类型检测。

### 作用域

> JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域。

函数的作用域基于函数创建的位置

### 原型和原型链

参考链接
[JavaScript 深入之从原型到原型链](https://github.com/mqyqingfeng/Blog/issues/2)
