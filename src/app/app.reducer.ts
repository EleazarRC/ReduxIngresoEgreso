import { ActionReducerMap } from '@ngrx/store';
import * as ui from './shared/ui.reducer';
import * as auth from './services/auth.reducer'


export interface AppState {
   ui:  ui.State,
   auth: auth.State
}



export const appReducers: ActionReducerMap<AppState> = {
   ui: ui._uiReducer,
   auth: auth._authReducer
}
