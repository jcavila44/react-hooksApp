import { TodoItem } from "./TodoItem";
import { ITodo } from "./interface/todo.interface"
import PropTypes from 'prop-types';

export const TodoList = ({ todos = [], onDeleteTodo }) => {


    return (
        <>
            <ul className="list-group">
                {
                    todos.map(({ id, description, done }: ITodo, key) => (
                        <TodoItem key={key} id={id} description={description} done={done} onDeleteTodo={onDeleteTodo} />
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