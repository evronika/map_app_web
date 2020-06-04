export function toggleMic() {
	return {
		type: 'TOGGLE_MIC'
	};
}

export function toggleVideo() {
	return {
		type: 'TOGGLE_VIDEO'
	};
}

export function toggleCameraDirection() {
	return {
		type: 'TOGGLE_CAMERA_DIRECTION'
	};
}

export function toggleModal() {
	return {
		type: 'TOGGLE_MODAL'
	};
}

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

export function getServices() {
	return {
		type: 'GET_SERVICES'
	}
}

export function getService(id: string) {
	return {
		type: 'GET_SERVICE',
		_id: id
	}
}

export function createTask(data: {}) {
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
