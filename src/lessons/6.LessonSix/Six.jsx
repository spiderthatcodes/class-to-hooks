import { useState } from 'react';

const Six = () => {
    const [visibility, setVisibility] = useState(false);

    const handleClick = () => {
        
    }

    console.log(visibility)

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <h1>Now you see me!</h1>
        </div>
    );
};

export default Six;
