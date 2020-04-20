import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
	MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPatientModel from './patient-model/patient-model.reducer';


export interface State {

  	[fromPatientModel.patientModelsFeatureKey]: fromPatientModel.State;
}

export const reducers: ActionReducerMap<State> = {

  	[fromPatientModel.patientModelsFeatureKey]: fromPatientModel.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
