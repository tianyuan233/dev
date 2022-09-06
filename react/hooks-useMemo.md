# useMemo

## 用法

### Heavy computations

这里有点像 vue 中的 computed API  

```jsx
function Counter() {
  const [count, setCount] = React.useState(1);

  const doubleCount = React.useMemo(() => {
    return count * 2
  }, [count])

  return (
    <main>
      <BigCountNumber count={count} />
      <BigCountNumber count={doubleCount} />
    </main>
  );
}
```

### Preserved references (保留引用)

```jsx
import React from 'react';

import Boxes from './Boxes';

function App() {
  const [name, setName] = React.useState('');
  const [boxWidth, setBoxWidth] = React.useState(1);
  
  const id = React.useId();

  const boxes = React.useMemo(() => {
    return [
        { flex: boxWidth, background: 'hsl(345deg 100% 50%)' },
        { flex: 3, background: 'hsl(260deg 100% 40%)' },
        { flex: 1, background: 'hsl(50deg 100% 60%)' },
      ];
  }, [boxWidth]);
  
  return (
    <>
      <Boxes boxes={boxes} />
      
      <section>
        <label htmlFor={`${id}-name`}>
          Name:
        </label>
        <input
          id={`${id}-name`}
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor={`${id}-box-width`}>
          First box width:
        </label>
        <input
          id={`${id}-box-width`}
          type="range"
          min={1}
          max={5}
          step={0.01}
          value={boxWidth}
          onChange={(event) => {
            setBoxWidth(Number(event.target.value));
          }}
        />
      </section>
    </>
  );
}

export default App;

```

```jsx
import React from 'react';

function Boxes({ boxes }) {
  return (
    <div className="boxes-wrapper">
      {boxes.map((boxStyles, index) => (
        <div
          key={index}
          className="box"
          style={boxStyles}
        />
      ))}
    </div>
  );
}

export default React.memo(Boxes);
```