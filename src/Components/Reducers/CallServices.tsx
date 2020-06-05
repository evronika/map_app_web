const initialState = {
    services: []
}

export default (state: any = initialState, action: any) => {

    if (action.type === 'GET_SERVICES') {

    }

    if (action.type === 'ADD_SERVICE') {
        state.services = [...state.services, action.data];
    }

    if (action.type === 'UPDATE_SERVICE') {
        state.services.map((item: any) =>
            item._id === action._id ? {...action.data} : item
        )
    }

    if (action.type === 'DELETE_SERVICE') {
        state.services = state.services.filter((value: any) =>  {
            return value._id !== action.data._id
        });
    }

    return state;
};