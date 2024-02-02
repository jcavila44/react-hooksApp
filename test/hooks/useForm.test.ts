import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks"

describe('Pruebas de useForm', () => {

    const initialForm = {
        usuName: 'Argemiro',
        usuEmail: 'arge@gmail.com'
    };

    test('Debe de regresar la información por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            usuName: initialForm.usuName,
            usuEmail: initialForm.usuEmail,
            formState: initialForm,
            onChangeInput: expect.any(Function),
            onResetForm: expect.any(Function),
        }); //Aqui evaluamos todo el json desde el result.current


    })

    test('Debe de cambiar el nombre del formulario', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const { onChangeInput } = result.current;
        const newName = `Argemiro Perea`;

        act(() => {

            onChangeInput({ target: { name: 'usuName', value: newName } });

        });

        expect(result.current.usuName).toBe(newName);
        expect(result.current.formState.usuName).toBe(newName);

    });


    test('Debe de resetear el formulario', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const { onChangeInput, onResetForm } = result.current;
        const newName = `Argemiro Perea`;

        act(() => {

            onChangeInput({ target: { name: 'usuName', value: newName } });
            onResetForm();

        });

        expect(result.current.formState).toEqual(initialForm);

    });



})