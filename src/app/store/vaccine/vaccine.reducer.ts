import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as VaccineActions from './vaccine.actions';
import { Vaccine } from './vaccine.model';

export const vaccinesFeatureKey = 'vaccines';

export interface State extends EntityState<Vaccine> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Vaccine> = createEntityAdapter<Vaccine>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

const vaccineReducer = createReducer(
  initialState,
  on(VaccineActions.addVaccine,
    (state, action) => adapter.addOne(action.vaccine, state)
  ),
  on(VaccineActions.upsertVaccine,
    (state, action) => {
    return adapter.upsertOne(action.vaccine, state);
    }
  ),
  on(VaccineActions.addVaccines,
    (state, action) => adapter.addMany(action.vaccines, state)
  ),
  on(VaccineActions.upsertVaccines,
    (state, action) => adapter.upsertMany(action.vaccines, state)
  ),
  on(VaccineActions.updateVaccine,
    (state, action) => adapter.updateOne(action.vaccine, state)
  ),
  on(VaccineActions.updateVaccines,
    (state, action) => adapter.updateMany(action.vaccines, state)
  ),
  on(VaccineActions.deleteVaccine,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(VaccineActions.deleteVaccines,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(VaccineActions.loadVaccines,
    (state, action) => adapter.setAll(action.vaccines, state)
  ),
  on(VaccineActions.clearVaccines,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return vaccineReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
