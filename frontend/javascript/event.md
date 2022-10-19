# 事件

## 事件监听

### 监听浏览器tab页面切换
```javascript
document.addEventListener('visibilitychange',function(){ //浏览器tab切换监听事件
    if(document.visibilityState=='visible') { //状态判断：显示（切换到当前页面）
        // 切换到页面执行事件
        var normal_title=document.title; //title标签的内容
        alert(normal_title);
    }else if(document.visibilityState=='hidden'){//状态判断：隐藏（离开当前页面）
         // 离开页面执行事件
        var normal_title=document.title; //title标签的内容
        alert(normal_title);
    }
});
```
