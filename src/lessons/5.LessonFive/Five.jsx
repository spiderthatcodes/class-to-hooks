import { useState } from 'react';

const Five = () => {
    const [state, setState] = useState('initialState')

    // setState('newStateValue')

    return (
        <>
            <h1>{state}</h1>
        </>
    );
};

export default Five;
