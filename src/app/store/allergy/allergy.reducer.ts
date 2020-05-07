import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as AllergyActions from './allergy.actions';
import { Allergy } from './allergy.model';

export const allergiesFeatureKey = 'allergies';

export interface State extends EntityState<Allergy> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Allergy> = createEntityAdapter<Allergy>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

const allergyReducer = createReducer(
  initialState,
  on(AllergyActions.addAllergy,
    (state, action) => adapter.addOne(action.allergy, state)
  ),
  on(AllergyActions.upsertAllergy,
    (state, action) => {
    return adapter.upsertOne(action.allergy, state);
    }
  ),
  on(AllergyActions.addAllergies,
    (state, action) => adapter.addMany(action.allergies, state)
  ),
  on(AllergyActions.upsertAllergies,
    (state, action) => adapter.upsertMany(action.allergies, state)
  ),
  on(AllergyActions.updateAllergy,
    (state, action) => adapter.updateOne(action.allergy, state)
  ),
  on(AllergyActions.updateAllergies,
    (state, action) => adapter.updateMany(action.allergies, state)
  ),
  on(AllergyActions.deleteAllergy,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(AllergyActions.deleteAllergies,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(AllergyActions.loadAllergies,
    (state, action) => adapter.setAll(action.allergies, state)
  ),
  on(AllergyActions.clearAllergies,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return allergyReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
