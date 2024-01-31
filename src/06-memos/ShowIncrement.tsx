import React from "react";


interface IShowIncrement {
    increment: () => void
}

export const ShowIncrement = React.memo(({ increment }: IShowIncrement) => {

    console.log("ME volvi a generar socio");


    return (
        <button onClick={() => increment()} type="button" className="btn btn-info">Incrementar</button>
    )
})
