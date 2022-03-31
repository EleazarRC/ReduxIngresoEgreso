import { createReducer, on } from '@ngrx/store';
import { User } from '../models/usuario.model';
import { setUser, unSetUser } from './auth.actions';

export interface State {
    user: User;
}

export const initialState: State = {
   user: new User,
}

export const _authReducer = createReducer(initialState,

    on(setUser, (state, { user } )=> ({ ...state, user: { ...user }})),
    on(unSetUser, (state )=> ({ ...state, user: new User})),

);

/* export function authReducer(state, action) {
    return _authReducer(state, action);
} */
