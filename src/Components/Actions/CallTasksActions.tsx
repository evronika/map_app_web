import {Action, ActionCreator, Dispatch} from "redux";
import { ThunkAction } from "redux-thunk";

export interface IAddingTaskAction extends Action<"ADDING_TASK"> {
    type: "ADDING_TASK"
}

export interface IAddedTaskAction extends Action<"ADDED_TASK"| "NOT_ADDED_TASK"> {
    data?: [],
    type: "ADDED_TASK" | "NOT_ADDED_TASK"
}

export interface IUpdatingTaskAction extends Action<"UPDATING_TASK"> {
    type: "UPDATING_TASK"
}

export interface IUpdatedTaskAction extends Action<"UPDATED_TASK"| "NOT_UPDATED_TASK"> {
    data?: [],
    type: "UPDATED_TASK" | "NOT_UPDATED_TASK"
}

export interface IGettingTasksAction extends Action<"GETTING_TASKS"> {
    type: "GETTING_TASKS"
}

export interface IGotTasksAction extends Action<"GOT_TASKS"> {
    data: [],
    type: "GOT_TASKS"
}

export interface IGettingTrashAction extends Action<"GETTING_TRASH"> {
    type: "GETTING_TRASH"
}

export interface IGotTrashAction extends Action<"GOT_TRASH"> {
    data: [],
    type: "GOT_TRASH"
}

export interface IDeletedTaskAction extends Action<"DELETED_TASK"> {
    _id: string,
    type: "DELETED_TASK"
}

export const createTask: ActionCreator<ThunkAction<
    // The type of the last action to be dispatched - will always be promise<T> for async actions
    Promise<IAddedTaskAction>,
    // The type for the data within the last action
    {},
    // The type of the parameter for the nested function
    {},
    // The type of the last action to be dispatched
    IAddedTaskAction
    >> = (object: {}) => {
    return async (dispatch: Dispatch) => {
        const gettingPeopleAction: IAddingTaskAction = {
            type: "ADDING_TASK"
        };
        dispatch(gettingPeopleAction);
        let res: any = await addTasksToApi(object);
        let addTaskAction: IAddedTaskAction;
        if (!res.success) {
            console.log("Error while creating a task: ", res.message);
            addTaskAction = {
                type: "NOT_ADDED_TASK"
            };
        } else {
            addTaskAction = {
                data: res.data,
                type: "ADDED_TASK"
            };
        }

        return dispatch(addTaskAction);
    };
};

export const updateTask: ActionCreator<ThunkAction<
    // The type of the last action to be dispatched - will always be promise<T> for async actions
    Promise<IUpdatedTaskAction>,
        // The type for the data within the last action
        {},
        // The type of the parameter for the nested function
        {},
        // The type of the last action to be dispatched
        IUpdatedTaskAction
        >> = (data: {}) => {
            return async (dispatch: Dispatch) => {
                const updatingPeopleAction: IUpdatingTaskAction = {
                    type: "UPDATING_TASK"
                };
                dispatch(updatingPeopleAction);
                let res: any = await updateTaskFromApi(data);
                let updateTaskAction: IUpdatedTaskAction;
                if (!res.success) {
                    console.log("Error while updating a task: ", res.message);
                    updateTaskAction = {
                        type: "NOT_UPDATED_TASK"
                    };
                } else {
                    updateTaskAction = {
                        data: res.data,
                        type: "UPDATED_TASK"
                    };
                }

                return dispatch(updateTaskAction);
            };
}

export const getTrash: ActionCreator<ThunkAction<
    // The type of the last action to be dispatched - will always be promise<T> for async actions
    Promise<IGotTrashAction>,
    // The type for the data within the last action
    [],
    // The type of the parameter for the nested function
    null,
    // The type of the last action to be dispatched
    IGotTrashAction
    >> = () => {
    return async (dispatch: Dispatch) => {
        const gettingTrashAction: IGettingTrashAction = {
            type: "GETTING_TRASH"
        };
        dispatch(gettingTrashAction);
        let res: any = await getTrashFromApi();
        if (!res.success) {
            console.log("Error while getting trash: ", res.message);
        }
        const data = res.data ? res.data : {};
        const gotTrashAction: IGotTrashAction = {
            data,
            type: "GOT_TRASH"
        };
        return dispatch(gotTrashAction);
    };
};

export const getTasks: ActionCreator<ThunkAction<
    // The type of the last action to be dispatched - will always be promise<T> for async actions
    Promise<IGotTasksAction>,
    // The type for the data within the last action
    [],
    // The type of the parameter for the nested function
    null,
    // The type of the last action to be dispatched
    IGotTasksAction
    >> = () => {
    return async (dispatch: Dispatch) => {
        const gettingTaksAction: IGettingTasksAction = {
            type: "GETTING_TASKS"
        };
        dispatch(gettingTaksAction);
        let res: any = await getTasksFromApi();
        if (!res.success) {
            console.log("Error while getting tasks: ", res.message);
        }
        const data = res.data ? res.data : {};
        const gotTasksAction: IGotTasksAction = {
            data,
            type: "GOT_TASKS"
        };
        return dispatch(gotTasksAction);
    };
};

export const deleteTask: ActionCreator<ThunkAction<
    // The type of the last action to be dispatched - will always be promise<T> for async actions
    Promise<IDeletedTaskAction>,
    // The type for the data within the last action
    {},
    // The type of the parameter for the nested function
    string,
    // The type of the last action to be dispatched
    IDeletedTaskAction
    >> = (id: string) => {
    return async (dispatch: Dispatch) => {
        let res: any = await deleteTaskFromApi(id);
        if (!res.success) {
            console.log("Error while deleting task: ", res.message);
        }
        const _id = res.id ? res.id : '';
        const deletedTaskAction: IDeletedTaskAction = {
            _id,
            type: "DELETED_TASK"
        };
        return dispatch(deletedTaskAction);
    };
};

export function getTask(id: string) {
    return {
        type: 'GET_TASK',
        _id: id
    }
}

async function addTasksToApi(data: {}) {
    let res: any = await fetch('http://localhost:3001/api/tasks', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return res.json();
}

async function getTasksFromApi() {
    let res = await fetch('http://localhost:3001/api/tasks', {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    });

    return res.json();
}

async function getTrashFromApi() {
    let res = await fetch('http://localhost:3001/api/tasks/trash', {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    });

    return res.json();
}

async function deleteTaskFromApi(id: string) {
    let res: any = await fetch(`http://localhost:3001/api/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    });

    return res.json();
}

async function updateTaskFromApi(data: any) {

    let res: any = await fetch(`http://localhost:3001/api/tasks/${data._id}`, {
        method: 'PUT',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return res.json();
}