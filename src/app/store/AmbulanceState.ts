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
import * as fromPatients from './patients/patient.reducer';
import {  routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface AmbulanceState {
	router: RouterReducerState;
	allergy: fromAllergy.State;
}

export const reducers: ActionReducerMap<AmbulanceState> = {
	router: routerReducer,
	allergy: fromAllergy.reducer,
	vaccine: fromVaccine.reducer,
	patient: fromPatients.reducer
};

export const metaReducers: MetaReducer<AmbulanceState>[] = !environment.production ? [] : [];

export interface AmbulanceState {
	allergy: fromAllergy.State;
	vaccine: fromVaccine.State;
	patient: fromPatients.State;
}

export const selectPatients = createFeatureSelector<AmbulanceState, fromPatients.State>(fromPatients.patientsFeatureKey);
export const selectAllergies = createFeatureSelector<AmbulanceState, fromAllergy.State>(fromAllergy.allergiesFeatureKey);
export const selectVaccines = createFeatureSelector<AmbulanceState, fromVaccine.State>(fromVaccine.vaccinesFeatureKey);

export const selectPatientsList = createSelector(
	selectPatients,
	fromPatients.selectAll
);

export const selectAllergiesList = createSelector(
	selectAllergies,
	fromAllergy.selectAll
);

export const selectVaccinesList = createSelector(
	selectVaccines,
	fromVaccine.selectAll
);