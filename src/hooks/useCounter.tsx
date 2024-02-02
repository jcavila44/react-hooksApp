import { useState } from "react";
import PropTypes from 'prop-types';



type IuseCounter = {
    counter: number,
    increment: (value: number) => void
    decrement: (value: number) => void,
    reset: () => void
}


export const useCounter = (initialValue: number = 10): IuseCounter => {


    const [counter, setcounter] = useState(initialValue);

    const increment = (value: number = 1): void => setcounter((current) => current + value);
    const decrement = (value: number = 1): void => setcounter((current) => current - value);
    const reset = (): void => setcounter(initialValue);


    return {
        counter,
        increment,
        decrement,
        reset
    }
}



useCounter.propTypes = {
    initialValue: PropTypes.number.isRequired,
};

useCounter.defaultProps = {
    initialValue: 'Fata la propiedad initialValue',
};