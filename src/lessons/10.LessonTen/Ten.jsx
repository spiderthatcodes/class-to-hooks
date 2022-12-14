import { useState, useEffect } from 'react'

const Ten = () => {
    const [count, setCount] = useState(0);


  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
}

export default Ten
