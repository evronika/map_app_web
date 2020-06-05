const initialState = {
    tasks: []
}

export default (state: any = initialState, action: any) => {
    if (action.type === 'GET_TASKS') {

    }

    if (action.type === 'ADD_TASK') {
        state.tasks = [...state.tasks, action.data];
    }

    if (action.type === 'UPDATE_TASK') {
        state.tasks.map((item: any) =>
            item._id === action._id ? {...action.data} : item
        )
    }

    if (action.type === 'DELETE_TASK') {
        state.tasks = state.tasks.filter((value: any) =>  {
            return value._id !== action.data._id
        });
    }

    console.log('callTasks state', state)

    return state;
};