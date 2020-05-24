import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType, ROOT_EFFECTS_INIT} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import { VaccinesService } from '../services/vaccines.service';
import { loadVaccines, loadVaccinesSuccess } from '../store/vaccine/vaccine.actions';
import { VaccinesMock } from '../pages/vaccines/vaccines.mock';

@Injectable()
export class VaccinesEffects {
	constructor(
		private actions$: Actions,
		private vaccinesService: VaccinesService
	) {}	

	loadVaccines$ = createEffect(
		() => this.actions$.pipe(
			ofType(loadVaccines),
			map(_ => {
				const {vaccines} = VaccinesMock;
				return loadVaccinesSuccess({vaccines});
			})
		)
	);	
}
