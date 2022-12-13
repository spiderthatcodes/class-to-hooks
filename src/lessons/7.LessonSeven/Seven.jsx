import React, { useState } from 'react';

const Seven = () => {
    const [count, setCount] = useState(0)

    const exampleFunction = () => {

    }

    return (<div>
        <button onClick={exampleFunction}>Add</button>
        <p>{count}</p>
    </div>)
};

export default Seven;
