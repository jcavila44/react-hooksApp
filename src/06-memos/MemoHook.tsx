import { useMemo, useState } from "react";
import { Small } from ".";
import { useCounter } from "../hooks"


const heavyStuff = (iterationNumber: number = 100) => {
    for (let index = 0; index < iterationNumber; index++) {
        console.log('Ahí vamos');
    }

    return `${iterationNumber}: iteraciones mi papá!`;
}


export const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]); //Este nos permite ejeutar una funcion específica siempre y cuando un valor en especifico cambie

    return (
        <>
            <h1>Counter: <Small value={counter} /> </h1>
            <h6> {memorizedValue}</h6>

            <button onClick={() => increment(1)} type="button" className="btn btn-primary">+1</button>
            <button onClick={() => setShow(!show)} type="button" className="btn btn-primary">Hidde/Show: {JSON.stringify(show)}</button>
        </>
    )
}
