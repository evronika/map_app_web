const initialState = {
    location: '',
    serviceName: '',
    description: '',
}

export default (state: any = initialState, action: any) => {
    if (action.type === 'CHANGE_LOCATION') {
        state = { ...state, location: action.data}
    }

    if (action.type === 'CHANGE_SERVICE') {
        state = { ...state, serviceName: action.data}
    }

    if (action.type === 'CHANGE_DESCRIPTION') {
        state = { ...state, description: action.data}
    }

    if (action.type === 'CLEAN_FORM_DATA') {
        state = initialState;
    }

    return state;
};