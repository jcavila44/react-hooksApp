import { useState } from "react";
import { Small } from ".";
import { useCounter } from "../hooks"


export const Memorize = () => {

    const { counter, increment } = useCounter(1);
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Counter: <Small value={counter} /> </h1>

            <button onClick={() => increment(1)} type="button" className="btn btn-primary">+1</button>
            <button onClick={() => setShow(!show)} type="button" className="btn btn-primary">Hidde/Show: {JSON.stringify(show)}</button>
        </>
    )
}
