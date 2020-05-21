import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as AllergyActions from './allergy.actions';
import { Allergy } from './allergy.model';

export const allergiesFeatureKey = 'allergy';

export interface State extends EntityState<Allergy> {
	allergies: Allergy[];
}

export const adapter: EntityAdapter<Allergy> = createEntityAdapter<Allergy>();

export const initialState: State = adapter.getInitialState({
	allergies: []
});

const allergyReducer = createReducer(
	initialState,

	on(AllergyActions.loadAllergiesSuccess,
		(state, action) => adapter.setAll(action.allergies, state)
	),

	on(AllergyActions.deleteAllergy,
		(state, action) => adapter.removeOne(action.id, state)
	),

	on(AllergyActions.upsertAllergy,
		(state, action) => adapter.upsertOne(action.allergy, state)
	),

	/*on(AllergyActions.updateAllergy,
		(state, action) => adapter.updateOne(action.allergy, state)
	)
	
	
	on(AllergyActions.addAllergy,
		(state, action) => adapter.addOne(action.allergy, state)
	),
	
	on(AllergyActions.upsertAllergies,
		(state, action) => adapter.upsertMany(action.allergies, state)
	),
	on(AllergyActions.updateAllergy,
		(state, action) => adapter.updateOne(action.allergy, state)
	),*/
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
