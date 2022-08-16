# 代理模式

代理模式（Proxy Pattern）是用来动态的修改目标对象的行为和结构的模式。

Proxy的详细用法可以看[Proxy用法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

```js
const person = {
  name: "zty",
  age: 16,
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(`没有这个属性`);
    } else {
      console.log(`${prop} 的值是 ${obj[prop]}`);
    }
  },
  //代理可用于添加验证。
  //用户不应该能够将person's age 更改为字符串值，或者给他们一个空名称。
  //或者如果用户试图访问对象上不存在的属性，我们应该让用户知道。
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      console.log(`age 只支持数字`);
    } else if (prop === "name" && value.length < 2) {
      console.log(`校验不通过`);
    } else {
      console.log(`${prop} 的值从 ${obj[prop]} 改为 ${value}.`);
      obj[prop] = value;
    }
  }
});

```