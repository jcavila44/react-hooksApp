import { useReducer } from "react"
import { TodoAdd, todoReducer } from ".";
import { ITodo } from "./interface/todo.interface";
import { TodoList } from "./TodoList";



const initialState: ITodo[] = [
    {
        id: new Date().getTime(),
        description: 'Sacar la basura',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Sacar al perro hpta',
        done: false,
    },
];


export const TodoApp = () => {


    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const onNewTodo = (newTodo: ITodo) => {
        console.log("lo mandaron xd", newTodo);

    }

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
