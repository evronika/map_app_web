import {Action, ActionCreator, Dispatch} from "redux";
import { ThunkAction } from "redux-thunk";

export interface IAddingTaskAction extends Action<"ADDING_TASK"> {
    type: "ADDING_TASK"
}

export interface IAddedTaskAction extends Action<"ADDED_TASK"| "NOT_ADDED_TASK"> {
    data?: [],
    type: "ADDED_TASK" | "NOT_ADDED_TASK"
}

export interface IGettingTasksAction extends Action<"GETTING_TASKS"> {
    type: "GETTING_TASKS"
}

export interface IGotTasksAction extends Action<"GOT_TASKS"> {
    data: [],
    type: "GOT_TASKS"
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

export function updateTask(data: {}) {
    return {
        type: 'UPDATE_TASK',
        data: data
    }
}

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