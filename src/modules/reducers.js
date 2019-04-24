import C from "../constants"

export const task = ( state = {}, action) => {
    switch (action.type) {
        case C.ADD_TASK:
            return {
                _id: action.id,
                description: action.description,
                location: action.location,
                service_id: action.service_id,
                service_option_id: action.service_option_id,
                created: Date.now()
            }
        case C.UPDATE_TASK:
            return {
                description: action.description,
                location: action.location,
                service_id: action.service_id,
                service_option_id: action.service_option_id,
                created: Date.now()
            }
        default:
            return state;
    }
}

export const tasks = ( state = {}, action) => {
    switch (action.type) {
        case C.ADD_TASK:
            return [
                ...state,
                task({}, action)
            ]
        case C.UPDATE_TASK:
            return state.map(
                    c => task(c, action)
                )
        case C.DELETE_TASK:
            return state.filter(
                c => c.id!== action.id
            )
        default:
            return state;
    }
}