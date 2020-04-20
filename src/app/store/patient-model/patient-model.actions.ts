import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { PatientModel } from './patient-model.model';

export const loadPatientModels = createAction(
	'[PatientModel/API] Load PatientModels', 
	props<{ patientModels: PatientModel[] }>()
);

export const addPatientModel = createAction(
	'[PatientModel/API] Add PatientModel',
	props<{ patientModel: PatientModel }>()
);

export const upsertPatientModel = createAction(
	'[PatientModel/API] Upsert PatientModel',
	props<{ patientModel: PatientModel }>()
);

export const addPatientModels = createAction(
	'[PatientModel/API] Add PatientModels',
	props<{ patientModels: PatientModel[] }>()
);

export const upsertPatientModels = createAction(
	'[PatientModel/API] Upsert PatientModels',
	props<{ patientModels: PatientModel[] }>()
);

export const updatePatientModel = createAction(
	'[PatientModel/API] Update PatientModel',
	props<{ patientModel: Update<PatientModel> }>()
);

export const updatePatientModels = createAction(
	'[PatientModel/API] Update PatientModels',
	props<{ patientModels: Update<PatientModel>[] }>()
);

export const deletePatientModel = createAction(
	'[PatientModel/API] Delete PatientModel',
	props<{ id: string }>()
);

export const deletePatientModels = createAction(
	'[PatientModel/API] Delete PatientModels',
	props<{ ids: string[] }>()
);

export const clearPatientModels = createAction(
	'[PatientModel/API] Clear PatientModels'
);
