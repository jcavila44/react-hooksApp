import React from "react";

interface ISmall {
    value: number
}

export const Small = React.memo(({ value }: ISmall) => {

    console.log("ME generé");


    return (
        <small>{value}</small>
    )
})
