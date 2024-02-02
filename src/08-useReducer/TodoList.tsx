import { TodoItem } from "./TodoItem";
import { ITodo } from "./interface/todo.interface"
import PropTypes from 'prop-types';

export const TodoList = ({ todos = [] }) => {

    console.log('Generado TodoList');
    
    return (
        <>
            <ul className="list-group">
                {
                    todos.map(({ id, description, done }: ITodo, key) => (
                        <TodoItem key={key} id={id} description={description} done={done} />
                    ))
                }
            </ul>
        </>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

TodoList.defaultProps = {
    todos: 'Faltan la propiedad "todos" '
};