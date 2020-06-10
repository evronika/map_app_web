export function changeLocation(data: any) {
    return {
        type: 'CHANGE_LOCATION',
        data: data
    }
}

export function changeDescription(data: any) {
    return {
        type: 'CHANGE_DESCRIPTION',
        data: data
    }
}

export function changeService(data: any) {
    return {
        type: 'CHANGE_SERVICE',
        data: data
    }
}
export function cleanAddFormData() {
    return {
        type: 'CLEAN_FORM_DATA'
    }
}

export function setValidated() {
    return {
        type: 'FORM_VALIDATION'
    }
}