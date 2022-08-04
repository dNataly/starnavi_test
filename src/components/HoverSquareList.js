import React from 'react';

const HoverSquareList = (props) => {
    const {isHover, squareQuantity} = props

    const getRow = (index) => {
        return (Math.floor( index/squareQuantity) +1 );
    }

    const getCol = (index) => {
        return (index % squareQuantity) + 1
    }

    return (
        <div className="basis-3/4 flex-shrink overflow-y-hidden">
            <h2 className="font-bold text-2xl text-left">Hover squares</h2>
            <ul className="h-fit flex flex-wrap shrink-0 grow-0">
            {
                isHover.length > 0 ?
                isHover.map(id => (
                    <li key={id} className="bg-hoveredSquareBg list-none m-1 rounded p-2 border-2 border-hoveredSquareBorder transition-all ease-in">row {getRow(id)} col {getCol(id)}</li>
                ))
                    :
                    <h3> Hover over square!</h3>
            }
            </ul>
        </div>
    );
};

export default HoverSquareList;
