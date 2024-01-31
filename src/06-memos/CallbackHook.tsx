import { useCallback, useState } from "react";
import { ShowIncrement } from ".";


export const CallbackHook = () => {

    const [counter, setCounter] = useState(100);


    const incrementFather = useCallback(
        (value: number) => {
            setCounter((c) => c + value)
        },
        [],
    ); //Este es un complemento del memo para que cuando se pase una funcion no se renderice nuevamente sin necesidad. Importante no usarlo con el useEffect porque sería un ciclo infinito



    return (
        <>
            <h1>useCallback Hook: {counter} </h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>
    )
}
