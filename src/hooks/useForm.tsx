/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from "react";

interface IFormValues {
    [key: string]: string;
}

export const useForm = <IinitialForm extends IFormValues>(initialForm: IinitialForm) => {

    const [formState, setFormState] = useState(initialForm);

    const onChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
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
