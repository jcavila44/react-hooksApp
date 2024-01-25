import { ChangeEvent, useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        userName: 'Argemiro',
        userEmail: 'argemiro@gmail.com',
    });

    const { userEmail, userName } = formState;

    const onChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        console.log("Iniciamos");
    }, []);

    useEffect(() => {
        console.log("Cambió el formulario");
    }, [formState]);

    useEffect(() => {
        console.log("Cambió el userEmail");
    }, [userEmail]);

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            <input type="text" className="form-control" placeholder="Username" name="userName" value={userName} onChange={onChangeInput} />
            <input type="email" className="form-control mt-2" placeholder="test@test.com" name="userEmail" value={userEmail} onChange={onChangeInput} />
        </>
    )
}
