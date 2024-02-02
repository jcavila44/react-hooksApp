import { useRef } from "react";
import { useForm } from "../hooks";
import PropTypes from 'prop-types';

export const TodoAdd = ({ onNewTodo }) => {

    console.log('Generado TodoAdd');

    const { description, formState, onChangeInput, onResetForm } = useForm({
        description: ''
    });
    // const RefInputTodo = useRef('');
    // const RefFormTodo = useRef('');

    const onSubmitForm = (event) => {

        event.preventDefault();
        const newTodo = description.trim();
        if (newTodo.length < 1) return;
        onNewTodo({ id: new Date().getTime(), description: newTodo, done: false, });

        onResetForm();
    }


    return (
        <>
            <form onSubmit={onSubmitForm} aria-label="form" >
                <input value={description} name="description" onChange={onChangeInput} key={12} className="form-control" type="text" placeholder="¿Qué hay que hacer?" />
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </>
    )
}

TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired
};

TodoAdd.defaultProps = {
    onNewTodo: 'Faltan la propiedad "onNewTodo" '
};