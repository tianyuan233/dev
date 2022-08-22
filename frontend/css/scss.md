# scss
## scss for循环

```scss
@for $i from 1 through 24 {  
  .demo-#{$i} {  
    background: url("/static/demo/#{$i}.png");  
  }  
}
```

## 变量
```scss
@primary-color: #ff0000;
.demo {
  color: @primary-color;
}
```

## modules

```scss
// _base.scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
```scss
// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}
```
