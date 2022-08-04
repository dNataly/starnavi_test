import React from 'react';

const SquareList = (props) => {
    const {isHover, setIsHover, squareQuantity, mode} = props;

    const squareArea = Array.from(Array(Math.pow(squareQuantity, 2)).keys());
    let newArr = [];

    const handleMouseEnter = (e) => {
        const currentSquareId = e.target.id;

        newArr = [...isHover, currentSquareId];
        isHover && isHover.includes(currentSquareId) ?
            setIsHover(newArr.filter(item => item !== currentSquareId))
            : setIsHover(newArr)

    };

    return (
            <ul className={`max-w-fit grid grid-cols-${squareQuantity} square-list border-[1px]`}>
                {squareArea.map((index) =>
                    <li key={index} id={index} className={`border-[1px] mode-${mode} cursor-grab transition-all ease-in
                     ${isHover.includes(index.toString()) ? "bg-hoverColor" : "bg-initialColor"}`} onMouseOver={handleMouseEnter}></li>
                )}
            </ul>
    );
};

export default SquareList;
