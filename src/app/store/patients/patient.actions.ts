import {createAction, props} from '@ngrx/store';
import { Patient } from './patient.model';


export const loadPatients = createAction(
  '[Patient/API] Load Patients'
);

export const loadPatientsSuccess = createAction(
	'[Patient/API] Load Allergies Success',
	props<{ patients: Patient[] }>()
);