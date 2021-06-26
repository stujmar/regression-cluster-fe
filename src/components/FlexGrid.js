import React, { useEffect, useState } from 'react';
import Cell from './Cell/Cell';

const FlexGrid = () => {

    const [ grid, setGrid] = useState([]);
    let cellCount = generateRange(100);

    useEffect(() => {
        setGrid(cellCount.map((index) => {
            return <Cell key={index}/>
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            {grid}
        </>
    )
}

export default FlexGrid

function generateRange(length){
    let newArray = [];
    for (let i = 1; i <= length; i++) {
        newArray.push(i);
    }
    return newArray;
}