import { useEffect, useReducer } from "react";
import { ITodo } from "./interface/todo.interface";
import { todoReducer } from ".";

export const useTodo = (initialState = []) => {


  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);


  const onNewTodo = (newTodo: ITodo) => {
    const action = { type: '[TODO] add todo', payload: newTodo };
    dispatch(action);
  }


  const onDeleteTodo = (idTodo: number) => {
    const action = { type: '[TODO] remove todo', payload: idTodo };
    dispatch(action);
  }

  const onCrossoutTodo = (idTodo: number) => {
    const action = { type: '[TODO] crossout todo', payload: idTodo };
    dispatch(action);
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return {
    todos,
    onNewTodo,
    onDeleteTodo,
    onCrossoutTodo,

  }
}
