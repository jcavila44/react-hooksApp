import { useEffect } from "react"

export const Message = () => {


    useEffect(() => {
        console.log("MEssage mounted");


        return () => {
            console.log("MEssage unmounted");

        }
    }, [])


    return (
        <>
            <h3>Usuario ya existe</h3>



        </>
    )
}
