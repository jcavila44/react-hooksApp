import { ITodo } from "./interface/todo.interface";

export const todoReducer = (initialState: ITodo[] = [], { type, payload }: IReducerAction) => {


    switch (type) {
        case '[TODO] add todo':

            return [...initialState, payload];

        case '[TODO] remove todo':

            return initialState.filter(({ id }) => id !== payload);


        default:
            return initialState;
    }

}