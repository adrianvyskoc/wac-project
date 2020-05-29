import {Injectable} from '@angular/core';
import { PatientsMock } from '../pages/patients/patients.mock';
import { Patient } from '../store/patients/patient.model';


@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  patients: Patient[] = Object.assign([], PatientsMock.patients);

  constructor() {
  }

  loadPatients() {

  }

}
