import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { PatientModel } from './patient-model.model';
import * as PatientModelActions from './patient-model.actions';

export const patientModelsFeatureKey = 'patientModels';

export interface State extends EntityState<PatientModel> {
	// additional entities state properties
}

export const adapter: EntityAdapter<PatientModel> = createEntityAdapter<PatientModel>();

export const initialState: State = adapter.getInitialState({
	// additional entity state properties
});


export const reducer = createReducer(
	initialState,
	on(PatientModelActions.addPatientModel,
		(state, action) => adapter.addOne(action.patientModel, state)
	),
	on(PatientModelActions.upsertPatientModel,
		(state, action) => adapter.upsertOne(action.patientModel, state)
	),
	on(PatientModelActions.addPatientModels,
		(state, action) => adapter.addMany(action.patientModels, state)
	),
	on(PatientModelActions.upsertPatientModels,
		(state, action) => adapter.upsertMany(action.patientModels, state)
	),
	on(PatientModelActions.updatePatientModel,
		(state, action) => adapter.updateOne(action.patientModel, state)
	),
	on(PatientModelActions.updatePatientModels,
		(state, action) => adapter.updateMany(action.patientModels, state)
	),
	on(PatientModelActions.deletePatientModel,
		(state, action) => adapter.removeOne(action.id, state)
	),
	on(PatientModelActions.deletePatientModels,
		(state, action) => adapter.removeMany(action.ids, state)
	),
	on(PatientModelActions.loadPatientModels,
		(state, action) => adapter.setAll(action.patientModels, state)
	),
	on(PatientModelActions.clearPatientModels,
		state => adapter.removeAll(state)
	),
);


export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = adapter.getSelectors();
