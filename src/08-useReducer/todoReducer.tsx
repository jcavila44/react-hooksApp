export const todoReducer = (initialState = [], action) => {


    switch (action.type) {
        case 'ABD':

            throw new Error("ABD No está terminado mi papá");


        default:
            return initialState;
    }

}