import {Injectable} from '@angular/core';
import { Vaccine } from '../store/vaccine/vaccine.model';
import { VaccinesMock } from '../pages/vaccines/vaccines.mock';


@Injectable({
  providedIn: 'root'
})
export class VaccinesService {

  vaccines: Vaccine[] = Object.assign([], VaccinesMock.vaccines);

  constructor() {
  }

}
