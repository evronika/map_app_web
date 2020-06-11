const initialState = {
    tasks: [],
    trash: []
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

    if (action.type === 'GETTING_TRASH') {
        return {
            ...state
        };
    }
    if (action.type === 'GOT_TRASH') {
        return {
            ...state,
            trash: action.data
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
    }

    if (action.type === 'NOT_ADDED_TASK') {
        return {
            ...state
        };
    }

    if (action.type === 'UPDATE_TASK') {
        state.tasks.map((item: any) =>
            item._id === action._id ? {...action.data} : item
        )
    }

    if (action.type === 'DELETED_TASK') {
        state = {
            tasks: state.tasks.filter((value: any) =>  {
                return value._id !== action._id
            })
        }
    }

    return state;
};