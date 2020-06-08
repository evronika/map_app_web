export function createTask(data: {}) {
    console.log('action creator createTask')
    return {
        type: 'CREATE_TASK',
        data: data
    }
}

export function updateTask(data: {}) {
    return {
        type: 'UPDATE_TASK',
        data: data
    }
}

export function deleteTask(id: string) {
    return {
        type: 'DELETE_TASK',
        _id: id
    }
}

export function getTasks() {
    return {
        type: 'GET_TASKS'
    }
}

export function getTask(id: string) {
    return {
        type: 'GET_TASK',
        _id: id
    }
}