import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAllergy from './allergy/allergy.reducer';
import {  routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface AmbulanceState {
  router: RouterReducerState;
  allergy: fromAllergy.State;
}

export const reducers: ActionReducerMap<AmbulanceState> = {
  router: routerReducer,
  allergy: fromAllergy.reducer,
};

export const metaReducers: MetaReducer<AmbulanceState>[] = !environment.production ? [] : [];

export interface AmbulanceState {
  allergy: fromAllergy.State;
}

export const selectAllergiesList = (state: AmbulanceState) => state.allergy;

