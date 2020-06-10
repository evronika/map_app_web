const initialState = {
    location: '',
    serviceName: '',
    description: '',
    serviceId: '',
    validated: false
}

export default (state: any = initialState, action: any) => {
    if (action.type === 'CHANGE_LOCATION') {
        state = { ...state, location: action.data}
    }

    if (action.type === 'FORM_VALIDATION') {
        state = { ...state, validated: true}
    }

    if (action.type === 'CHANGE_SERVICE') {
        state = { ...state, serviceName: action.data.serviceName, serviceId: action.data.serviceId}
    }

    if (action.type === 'CHANGE_DESCRIPTION') {
        state = { ...state, description: action.data}
    }

    if (action.type === 'CLEAN_FORM_DATA') {
        state = initialState;
    }

    return state;
};