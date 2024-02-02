import { useEffect, useReducer } from "react"
import { TodoAdd, todoReducer } from ".";
import { ITodo } from "./interface/todo.interface";
import { TodoList } from "./TodoList";



const initialState: ITodo[] = [];




export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);


    const onNewTodo = (newTodo: ITodo) => {
        const action = { type: '[TODO] add todo', payload: newTodo };
        dispatch(action);
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    return (
        <>
            <h1>TodoApp: 10 - <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7"> <TodoList todos={todos} /> </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={onNewTodo} />

                </div>


            </div>

        </>
    )
}
