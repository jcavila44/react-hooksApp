import { ITodo } from "./interface/todo.interface";

export const todoReducer = (initialState: ITodo[] = [], { type, payload }: IReducerAction): ITodo[] => {


    switch (type) {
        case '[TODO] add todo':
            return [...initialState, payload];

        case '[TODO] remove todo':
            return initialState.filter(({ id }) => id !== payload);

        case '[TODO] crossout todo':

            return initialState.map((todo) => {

                if (todo.id === payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });

        default:
            return initialState;
    }

}