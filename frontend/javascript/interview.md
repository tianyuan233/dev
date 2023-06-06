## 防抖和节流

### 防抖

如果在定时器的时间范围内再次触发，则重新计时。

```js
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const test = (num) => {
  console.log(num);
};
debounceTest = debounce(test, 1000);

debounceTest(1);
debounceTest(2);
debounceTest(3);
// 输出3
```

### 节流

如果在定时器的时间范围内再次触发，则不予理睬，等当前定时器完成，才能启动下一个定时器。

```js
const throttle = (fn, delay) => {
  let flag = true;
  return (...args) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
};

const test = (num) => {
  console.log(num);
};
throttleTest = throttle(test, 1000);

throttleTest(1);
throttleTest(2);

setTimeout(() => {
  throttleTest(4);
}, 2000);
// 输出 1 和 4
```

## new 实现

```js
const _new = (fn, ...args) => {
  const obj = Object.create(null);
  obj.__proto__ = fn.prototype;
  const ret = fn.apply(obj, args);
  return typeof ret === "object" ? ret : obj;
};

function Person(name) {
  this.name = name;
}

const p = _new(Person, "tom");

console.log(p.name);
```

## call 实现

