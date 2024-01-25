import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {


    const { onChangeInput, onResetForm, userEmail, userName, userPassword } = useForm({
        userName: 'argemiro01',
        userEmail: 'argemiro@gmail.com',
        userPassword: '',
    });


    return (
        <>
            <h1>Form with custom hook</h1>
            <hr />
            <input name="userName" value={userName} onChange={onChangeInput} type="text" className="form-control" placeholder="Username" />
            <input name="userEmail" value={userEmail} onChange={onChangeInput} type="email" className="form-control mt-2" placeholder="test@test.com" />
            <input name="userPassword" value={userPassword} onChange={onChangeInput} type="password" className="form-control mt-2" placeholder="contraseña" />

            <button onClick={onResetForm} className="btn btn-danger mt-2" type="button">Borrar</button>

        </>
    )
}
