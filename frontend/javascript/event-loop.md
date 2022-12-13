# 事件循环

浏览器的事件循环分为同步任务和异步任务；所有同步任务都在主线程上执行，形成一个函数调用栈(执行栈)，而异步则先放到任务队列(task queue)里，任务队列又分为宏任务(macro-task)与微任务(micro-task)。

### 宏任务
- script 代码
- setTimeout
- setInterval
### 微任务
- Promise
- process.nextTick


#### 相关链接
[这一次，彻底弄懂 JavaScript 执行机制](https://juejin.cn/post/6844903512845860872)
