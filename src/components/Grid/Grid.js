import React, { useState, useEffect, useMemo } from 'react';
import Cell from '../Cell/Cell';
import {title} from './Grid.module.css'

const Grid = () => {
    const [ gridData, setGridData ] = useState([])
    const [ gridRow, setGridRow ] = useState([])

    const rangeX = useMemo(() => {
        return ["1x","2x","3x","4x"];
    },[])

    const rangeY = useMemo(() => {
        return ["1y","2y","3y","4y"];
    },[])
    
    useEffect(() => {
        setGridData(rangeX.map((cell) => {
            return <Cell key={cell} />
        }))
    },[rangeX])

    return(<div className={`${title}`}>This is the Grid.{gridData}</div>)
}

export default Grid;