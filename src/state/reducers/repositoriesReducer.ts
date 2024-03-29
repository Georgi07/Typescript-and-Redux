import {Action, RepositoriesState} from '../actions/index';
import {ActionType} from '../action-types/index';

const initialState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (state: RepositoriesState = initialState, 
    action: Action
    ): RepositoriesState => {
   switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return {loading: true, error: null, data: []};
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return {loading: false, error: null, data: action.payload}
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return {loading: false, error: action.payload, data: []};
       default: return state;
   }
}

export default reducer;