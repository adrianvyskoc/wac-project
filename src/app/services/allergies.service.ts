import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import * as lodash from 'lodash';
import { AllergiesMock } from '../pages/allergies/allergies.mock';
import { Allergy } from '../store/allergy/allergy.model';


@Injectable({
  providedIn: 'root'
})
export class AllergiesService {

  patients: Allergy[] = Object.assign([], AllergiesMock.allergies);

  constructor() {
  }

  deleteEntry(allergyId: string) {

  }

}
