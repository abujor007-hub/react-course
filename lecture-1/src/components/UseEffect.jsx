import React, { useEffect, useState } from 'react';






const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect is running');
    document.title= count;
  }, [count]);

  return <div>
    {count}
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>;
};

export default UseEffect;