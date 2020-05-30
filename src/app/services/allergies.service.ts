import {Injectable} from '@angular/core';
import { Allergy } from '../store/allergy/allergy.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AllergiesService {

	constructor(
		private http: HttpClient
	) {}

	loadAllergies(patientId: string): Observable<Allergy[]> {
		return this.http.get<Allergy[]>('https://');
	}

	deleteEntry(allergyId: string) {

	}

}
