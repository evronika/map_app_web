export function changeLocation(data: any) {
    console.log('creator change loca', data)
    return {
        type: 'CHANGE_LOCATION',
        data: data
    }
}

export function changeDescription(data: any) {
    console.log('creator changeDescription', data)
    return {
        type: 'CHANGE_DESCRIPTION',
        data: data
    }
}

export function changeService(data: any) {
    console.log('creator change serv', data)
    return {
        type: 'CHANGE_SERVICE',
        data: data
    }
}
export function cleanAddFormData() {
    console.log('creator CLEAN_FORM_DATA')
    return {
        type: 'CLEAN_FORM_DATA'
    }
}