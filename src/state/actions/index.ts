import {ActionType} from '../action-types/index';

export interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[]
}
// interface Action {
//     type: string;
//     payload?: any;
// }

interface SearchRepositories {
    type: ActionType.SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccess {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[]
}


interface SearchRepositoriesError {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string
}

export type Action =  
SearchRepositories |
SearchRepositoriesSuccess |
SearchRepositoriesError;