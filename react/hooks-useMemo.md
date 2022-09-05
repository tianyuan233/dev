# useMemo

## 用法

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