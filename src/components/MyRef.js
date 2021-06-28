import React, { useEffect, useState, useRef } from 'react';

const MyRef = () => {
    const [name, setName] = useState('Stu');
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    return (
            <div>
                <input value={name} onChange={e => setName(e.target.value)}/>
                <div>My name is {name}</div>
                count:{renderCount.current}
            </div>
        )
}

export default MyRef
