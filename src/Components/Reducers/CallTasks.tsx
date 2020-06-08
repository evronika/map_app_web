const initialState = {
    tasks: [
        {description: 'test 1'},
        {description: 'test 2'},
        {description: 'test 3'},
        {description: 'test 4'},
        {description: 'test 5'},
        {description: 'test 6'}
    ]
}

export default (state: any = initialState, action: any) => {
    if (action.type === 'GETTING_TASKS') {
        return {
            ...state
        };
    }
    if (action.type === 'GOT_TASKS') {
        return {
            ...state,
            tasks: action.data
        };
    }

    if (action.type === 'ADDING_TASK') {
        return {
            ...state
        };
    }

    if (action.type === 'ADDED_TASK') {
        state = Object.assign({}, state, {
            tasks: [
                ...state.tasks,
                action.data
            ]
        })

        console.log('action', action)
        console.log('state',state)
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

    return state;
};