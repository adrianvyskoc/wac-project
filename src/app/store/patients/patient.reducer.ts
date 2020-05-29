import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as PatientActions from './patient.actions';
import { Patient } from './patient.model';

export const patientsFeatureKey = 'patient';

export interface State extends EntityState<Patient> {
	patients: Patient[];
}

export const adapter: EntityAdapter<Patient> = createEntityAdapter<Patient>();

export const initialState: State = adapter.getInitialState({
	patients: []
});

const patientReducer = createReducer(
	initialState,

	on(PatientActions.loadPatientsSuccess,
		(state, action) => adapter.setAll(action.patients, state)
	)
);

export function reducer(state: State | undefined, action: Action) {
  	return patientReducer(state, action);
}

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = adapter.getSelectors();
