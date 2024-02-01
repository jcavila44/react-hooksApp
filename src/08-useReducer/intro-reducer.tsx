console.log("GHola mundo");


const initialState = [{
    id: 1,
    todo: 'Matar a Thanos',
    done: false
}];


const todoReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case '[TODO] add todo':
            return [...state, action.payload];
            break;

        default:
            return state;
            break;
    }

}

let todos = todoReducer();


const addTodoAction = {
    type: '[TODO] add todo',
    payload: {
        id: 2,
        todo: 'Revivir a todos',
        done: false,
    }
}

todos = todoReducer(todos, addTodoAction);

console.log("Mirelo mi papá el reducer: ", { state: todos });
