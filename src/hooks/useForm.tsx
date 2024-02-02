/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

interface IFormValues {
    [key: string]: string;
}

export const useForm = <IinitialForm extends IFormValues>(initialForm: IinitialForm) => {

    const [formState, setFormState] = useState(initialForm);

    const onChangeInput = (event: { target: { name: any; value: any; }; }) => {

        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    const onResetForm = () => setFormState(initialForm);


    return {
        ...formState,
        formState,
        onChangeInput,
        onResetForm
    }
}
