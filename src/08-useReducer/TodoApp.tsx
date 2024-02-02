import { TodoAdd, useTodo } from ".";
import { TodoList } from "./TodoList";



export const TodoApp = () => {

    const { todos, onCrossoutTodo, onDeleteTodo, onNewTodo } = useTodo([]);

    return (
        <>
            <h1>TodoApp: 10 - <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={onDeleteTodo} onCrossoutTodo={onCrossoutTodo} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={onNewTodo} />

                </div>


            </div>

        </>
    )
}
