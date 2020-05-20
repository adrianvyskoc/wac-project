import {
  ActionReducerMap,
  MetaReducer,
  createSelector,
  select,
  createFeatureSelector
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAllergy from './allergy/allergy.reducer';
import * as fromVaccine from './vaccine/vaccine.reducer';
import {  routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface AmbulanceState {
	router: RouterReducerState;
	allergy: fromAllergy.State;
}

export const reducers: ActionReducerMap<AmbulanceState> = {
	router: routerReducer,
	allergy: fromAllergy.reducer,
	vaccine: fromVaccine.reducer
};

export const metaReducers: MetaReducer<AmbulanceState>[] = !environment.production ? [] : [];

export interface AmbulanceState {
	allergy: fromAllergy.State;
	vaccine: fromVaccine.State;
}

export const selectAllergies = createFeatureSelector<AmbulanceState, fromAllergy.State>(fromAllergy.allergiesFeatureKey);

export const selectAllergiesList = createSelector(
	selectAllergies,
	fromAllergy.selectAll
);