import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  console.log("in my comp...");

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
