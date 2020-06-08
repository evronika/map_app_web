import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

export function createService(data: {}) {
    return {
        type: 'CREATE_SERVICE',
        data: data
    }
}

export function updateService(data: {}) {
    return {
        type: 'UPDATE_SERVICE',
        data: data
    }
}

export function deleteService(id: string) {
    return {
        type: 'DELETE_SERVICE',
        _id: id
    }
}

export function getService(id: string) {
    return {
        type: 'GET_SERVICE',
        _id: id
    }
}

export interface IGotServicesAction extends Action<"GOT_SERVICES"> {
    data: [],
    type: "GOT_SERVICES"
}

export interface IGettingServicesAction extends Action<"GETTING_SERVICES"> {
    type: "GETTING_SERVICES"
}

export interface IGotServicesAction extends Action<"GOT_SERVICES"> {
    data: [],
    type: "GOT_SERVICES"
}

export const getServices: ActionCreator<ThunkAction<
    // The type of the last action to be dispatched - will always be promise<T> for async actions
    Promise<IGotServicesAction>,
    // The type for the data within the last action
    [],
    // The type of the parameter for the nested function
    null,
    // The type of the last action to be dispatched
    IGotServicesAction
    >> = () => {
    return async (dispatch: Dispatch) => {
        const gettingServicesAction: IGettingServicesAction = {
            type: "GETTING_SERVICES"
        };
        dispatch(gettingServicesAction);
        const data: [] = await getServicesFromApi();
        const gotServicesAction: IGotServicesAction = {
            data,
            type: "GOT_SERVICES"
        };
        return dispatch(gotServicesAction);
    };
};

async function getServicesFromApi() {
    let res = await fetch('http://localhost:3001/api/services', {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    });

    return (await res.json() as any).data;
}