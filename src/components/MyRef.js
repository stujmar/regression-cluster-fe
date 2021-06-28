import React, { useEffect, useState, useRef } from 'react';

const MyRef = () => {
    const [name, setName] = useState('Stu');
    const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
        // setRenderCount(renderCount + 1);
    })
    return (
        <>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <div>My name is {name}</div>
            count:{renderCount}
        </>)
}

export default MyRef