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
    if (action.type === 'GET_TASKS') {

    }

    if (action.type === 'CREATE_TASK') {
        state = Object.assign({}, state, {
            tasks: [
                ...state.tasks,
                {
                    description: action.data.description
                }
            ]
        })
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