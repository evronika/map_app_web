const initialState = {
    isOpenModal: true
}

export default (state: any = initialState, action: any) => {
    if (action.type === 'TOGGLE_MODAL') {
        state = {...state, isOpenModal: !state.isOpenModal};
    }

    return state;
};