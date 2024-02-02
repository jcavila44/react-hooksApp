import { ITodo } from "./interface/todo.interface"
import PropTypes from 'prop-types';

export const TodoItem = ({ id, description, onDeleteTodo }) => {

    return (
        <>
            <li key={id} className="list-group-item d-flex justify-content-between ">
                <span className="align-self-center">{description}</span>
                <button onClick={() => onDeleteTodo(id)} type="button" className="btn btn-danger">Borrar</button>
            </li>
        </>
    )
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
};

TodoItem.defaultProps = {
    id: 'Falta la propiedad :"id" ',
    description: 'Falta la propiedad :"description" ',
    done: 'Falta la propiedad :"done" ',
};