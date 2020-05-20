import {Action, createAction, props} from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Allergy } from './allergy.model';


export const loadAllergies = createAction(
  '[Allergy/API] Load Allergies',
  props<{ allergies: Allergy[] }>()
);

export const addAllergy = createAction(
  '[Allergy/API] Add Allergy',
  props<{ allergy: Allergy }>()
);

export const upsertAllergy = createAction(
  '[Allergy/API] Upsert Allergy',
  props<{ allergy: Allergy }>()
);

export const addAllergies = createAction(
  '[Allergy/API] Add Allergies',
  props<{ allergies: Allergy[] }>()
);

export const upsertAllergies = createAction(
  '[Allergy/API] Upsert Allergies',
  props<{ allergies: Allergy[] }>()
);

export const updateAllergy = createAction(
  '[Allergy/API] Update Allergy',
  props<{ allergy: Update<Allergy> }>()
);

export const updateAllergies = createAction(
  '[Allergy/API] Update Allergies',
  props<{ allergies: Update<Allergy>[] }>()
);

export const deleteAllergy = createAction(
  '[Allergy/API] Delete Allergy',
  props<{ id: number }>()
);

export const deleteAllergies = createAction(
  '[Allergy/API] Delete Allergies',
  props<{ ids: string[] }>()
);

export const clearAllergies = createAction(
  '[Allergy/API] Clear Allergies'
);

export const uploadAllergy = createAction(
  '[Allergy/API] Upload Allergy',
  props<{ payload: {allergy: Allergy }}>()
);

