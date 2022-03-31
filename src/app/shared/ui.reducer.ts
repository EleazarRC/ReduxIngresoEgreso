import { createReducer, on } from '@ngrx/store';
import { isLoading, stopLoading } from './ui.actions';

export interface State {
    isLoadding: boolean;
}

export const initialState: State = {
   isLoadding: false,
}

export const _uiReducer = createReducer(initialState,

    on(isLoading, state => ({ ...state, isLoadding: true})),
    on(stopLoading, state => ({ ...state, isLoadding: false})),

);

/* export function counterReducer(state, action) {
    return _counterReducer(state, action);
} */
