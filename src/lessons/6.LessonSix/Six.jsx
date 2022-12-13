import { useState } from 'react';

const Six = () => {
    const [visibility, setVisibility] = useState(false);

    // console.log(visibility)
    
    return (
        <div>
            <button>Click Me</button>
            <h1>Now you see me!</h1>
        </div>
    );
};

export default Six;
