# 观察者模式
## 创建对象
```js
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  unsubscribe(func) {
    this.observers = this.observers.filter(observer => observer !== func);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}
```

## 使用
```js
const observable = new Observable()

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
  toast(data);
}

observable.subscribe(logger);
observable.subscribe(toastify);


observable.notify("User toggled switch!");
```

## 优缺点

### 优点
使用观察者模式是强制分离关注点的好方法和单一责任原则。观察者对象与可观察对象没有紧密耦合，并且可以随时（解）耦合。可观察对象负责监控事件，而观察者只是处理接收到的数据。
### 缺点
如果观察者变得过于复杂，则在通知所有订阅者时可能会导致性能问题。
