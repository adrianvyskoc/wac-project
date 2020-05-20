import {Injectable} from '@angular/core';
import { AllergiesMock } from '../pages/allergies/allergies.mock';
import { Allergy } from '../store/allergy/allergy.model';


@Injectable({
  providedIn: 'root'
})
export class AllergiesService {

  allergies: Allergy[] = Object.assign([], AllergiesMock.allergies);

  constructor() {
  }

  deleteEntry(allergyId: string) {

  }

}
