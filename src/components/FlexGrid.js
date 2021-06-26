import React, { useEffect, useState } from 'react';
import Cell from './Cell/Cell';
import { gridWrapper } from './FlexGrid.module.css';

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
        <div className={gridWrapper}>
            {grid}
        </div>
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