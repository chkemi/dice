import React from 'react';

const Die = (props) => {
    const getTextOfNum = () => {
        switch (props.number) {
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            default:
                return 'three';
        }
    }

    return ( 
        <i className={`fas fa-dice-${getTextOfNum()} ${props.rolling ? 'rolling' : ''}`}></i>
     );
}
 
export default Die;