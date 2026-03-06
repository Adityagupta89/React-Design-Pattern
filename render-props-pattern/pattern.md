 
# React Render Props Pattern – Interview Guide

## 1. What is Render Props?
Render Props is a React pattern where a component shares logic by passing a function as a prop.  
This function decides what UI should be rendered.

It allows multiple components to **reuse the same logic** while controlling **how the UI appears**.

### Short Interview Definition
> Render props is a pattern where a component shares reusable logic through a function prop that returns UI.

---

## 2. Purpose of Render Props

- Reuse logic between multiple components
- Separate business logic from UI rendering
- Provide flexibility in how UI is displayed

---

## 3. Good Practical Example – Mouse Tracker

### Logic Component

```javascript
function MouseTracker({ render }) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  return (
    <div onMouseMove={handleMouseMove} style={{ height: "200px" }}>
      {render(position)}
    </div>
  );
}
```

### Usage

```javascript
function App() {
  return (
    <MouseTracker
      render={(pos) => (
        <h2>Mouse Position: {pos.x}, {pos.y}</h2>
      )}
    />
  );
}
```

This component handles **mouse tracking logic**, while the parent decides **how to display the position**.

---

## 4. Another Real Use Case – Data Fetching

### Component

```javascript
function DataFetcher({ url, render }) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url]);

  return render(data);
}
```

### Usage

```jsx
<DataFetcher
  url="https://api.example.com/user"
  render={(data) =>
    data ? <h2>{data.name}</h2> : <p>Loading...</p>
  }
/>
```

---

## 5. Advantages

- Reusable logic
- Flexible UI rendering
- Encourages separation of concerns

---

## 6. Limitations

- Can lead to **nested JSX (wrapper hell)**
- Harder to read with many render props
- Less common today due to **React Hooks**

---

## 7. Modern Alternative – Custom Hooks

### Custom Hook

```javascript
function useMousePosition() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
}
```

### Usage

```javascript
const pos = useMousePosition();

return <h2>{pos.x}, {pos.y}</h2>;
```

Hooks provide **cleaner and simpler logic reuse**.

---

## 8. Common Interview Follow-Up Questions

1. What problem does the Render Props pattern solve?
2. How is Render Props different from Higher Order Components (HOC)?
3. Why are React Hooks preferred over Render Props today?
4. Can Render Props cause performance issues?
5. What is “wrapper hell” in React?
6. Give a real-world use case of Render Props.
7. How would you convert a Render Props component into a custom hook?
8. When would you still consider using Render Props today?

---

## 9. Best Short Interview Answer

> Render props is a pattern used to share reusable logic between components by passing a function as a prop that decides what UI to render.
