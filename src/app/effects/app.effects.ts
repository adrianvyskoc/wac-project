import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType, ROOT_EFFECTS_INIT} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {AllergiesService} from '../services/allergies.service';
import { deleteAllergy, uploadAllergy, upsertAllergy, loadAllergies } from '../store/allergy/allergy.actions';
import { AllergiesMock } from '../pages/allergies/allergies.mock';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private allergiesService: AllergiesService) {}
  private idCounter = 100;

  computeId$ = createEffect(() => this.actions$.pipe(
    ofType(uploadAllergy),
    map( (action) => {
      let allergy = action.payload.allergy;
      if ( !allergy.id ) {
        allergy = Object.assign({}, allergy, {id: ++this.idCounter});
      }
      return upsertAllergy({ allergy });
    })));

  init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(_ => {
        const {allergies} = AllergiesMock;
        return loadAllergies({allergies});
      }));
  });

  /*delete$ = createEffect(() => this.actions$.pipe(
    ofType(deleteAllergy),
    mergeMap((action) =>
      this.allergiesService.deleteEntry(action.id))),
    { dispatch: false });*/
}
