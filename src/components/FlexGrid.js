import React from 'react';

const FlexGrid = () => {

    console.log(generateRange(100));

    return (
    <>

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