import { useState } from 'react';

const Five = () => {
    const [state, setState] = useState('initialState')

    // setTimeout(() => {
    //     setState('newStateValue')
    // }, 2000)

    return (
        <>
            <h1>{state}</h1>
        </>
    );
};

export default Five;
