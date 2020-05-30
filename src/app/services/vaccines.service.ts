import {Injectable} from '@angular/core';
import { Vaccine } from '../store/vaccine/vaccine.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VaccinesService {

	constructor(
		private http: HttpClient
	) {}

	loadVaccines(patientId: string): Observable<Vaccine[]> {
		return this.http.get<Vaccine[]>('https://');
	}

}
