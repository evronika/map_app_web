import { Reducer } from 'redux';

type IServicesState = {
    services: {}[]
}

type ServiceActions = {
    type: string
    data?: []|{}
}

const initialState: IServicesState = {
    services: []
}

const neverReached = (never: never) => {};

export default (state: any = initialState, action: any): Reducer<IServicesState, ServiceActions> => {

    switch (action.type) {
        case 'GETTING_SERVICES':
            return {
                ...state
            };
        case 'GOT_SERVICES':
            return {
                ...state,
                services: action.data
            };

        case 'ADDING_SERVICE':
            return {
                ...state
            };
        case 'ADDED_SERVICE':
            return {
                ...state,
                services : [...state.services, action.data]
            };
        case 'UPDATE_SERVICE':
            state.services.map((item: any) =>
                item._id === action._id ? {...action.data} : item
            )
            return state;

        case 'DELETE_SERVICE':
            state.services = state.services.filter((value: any) =>  {
                return value._id !== action.data._id
            });
            return state;
        default:
            neverReached(action as never);
    }

    return state;
};