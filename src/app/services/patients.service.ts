import {Injectable} from '@angular/core';
import { Patient } from '../store/patients/patient.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PatientsService {

	constructor(
		private http: HttpClient
	) {}

	loadPatients(): Observable<Patient[]> {
		return this.http.get<Patient[]>('https://');
	}

}
