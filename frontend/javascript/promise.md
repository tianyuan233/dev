[Promise 实现](./promise-code.md)

## Promise 的三种状态

- pending: 初始状态，既不是成功，也不是失败状态。
- fulfilled: 意味着操作成功完成。
- rejected: 意味着操作失败。

## Promise.all()

Fulfills when all of the promises fulfill; rejects when any of the promises rejects.

```js
const promiseAll = (promiseArray) => {
  if (!Array.isArray(promiseArray)) {
    throw new Error("accept a array");
  }

  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0;
    promiseArray.forEach((item, index) => {
      if (item instanceof Promise) {
        item.then((res) => {
          result[index] = res;
          count++;
          if (count === promiseArray.length) {
            resolve(result);
          }
        });
      } else {
        result[index] = item;
        count++;
        if (count === promiseArray.length) {
          resolve(result);
        }
      }
    });
  });
};

const promiseTest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, Math.random() * 2000);
  });
};

promiseAll([promiseTest(), promiseTest(), promiseTest()]).then((res) => {
  console.log(res);
});
```

## Promise.race()

Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.

```js
const promiseRace = (promiseArray) => {
  if (!Array.isArray(promiseArray)) {
    throw new Error("accept a array");
  }

  return new Promise((resolve, reject) => {
    promiseArray.forEach((item) => {
      if (item instanceof Promise) {
        item
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        resolve(item);
      }
    });
  });
};

const promiseTest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, Math.random() * 2000);
  });
};
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promises = [promise1, promise2, promise3];

promiseRace(promises).then(console.log).catch(console.log);
//输出 0
```

## Promise.any

Fulfills when any of the promises fulfills; rejects when all of the promises reject.

```js
const promiseAny = (promises) => {
  return new Promise((resolve, reject) => {
    promises = Array.isArray(promises) ? promises : [];
    let len = promises.length;
    // 用于收集所有 reject
    let errs = [];
    // 如果传入的是一个空数组，那么就直接返回 AggregateError
    if (len === 0)
      return reject(new AggregateError("All promises were rejected"));
    promises.forEach((promise) => {
      promise.then(
        (value) => {
          resolve(value);
        },
        (err) => {
          len--;
          errs.push(err);
          if (len === 0) {
            reject(new AggregateError(errs));
          }
        }
      );
    });
  });
};

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promises = [promise1, promise2, promise3];
promiseAny(promises).then(console.log);
//输出 quick
```
