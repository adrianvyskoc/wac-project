import {Action, createAction, props} from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Vaccine } from './vaccine.model';


export const loadVaccines = createAction(
  '[Vaccine/API] Load Vaccines',
  props<{ vaccines: Vaccine[] }>()
);

export const addVaccine = createAction(
  '[Vaccine/API] Add Vaccine',
  props<{ vaccine: Vaccine }>()
);

export const upsertVaccine = createAction(
  '[Vaccine/API] Upsert Vaccine',
  props<{ vaccine: Vaccine }>()
);

export const upsertVaccines = createAction(
  '[Vaccine/API] Upsert Vaccines',
  props<{ vaccines: Vaccine[] }>()
);

export const updateVaccine = createAction(
  '[Vaccine/API] Update Vaccine',
  props<{ vaccine: Update<Vaccine> }>()
);

export const deleteVaccine = createAction(
  '[Vaccine/API] Delete Vaccine',
  props<{ id: string }>()
);

export const deleteVaccines = createAction(
  '[Vaccine/API] Delete Vaccines',
  props<{ ids: string[] }>()
);

export const uploadVaccine = createAction(
  '[Vaccine/API] Upload Vaccine',
  props<{ payload: {vaccine: Vaccine }}>()
);

