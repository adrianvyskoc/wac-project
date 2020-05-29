import { Patient } from 'src/app/store/patients/patient.model';

export class PatientsMock {
    public static readonly patients: Patient[] = [
		{
			id: 12,
			name: 'Justin Bieber'
		},
		{
			id: 13,
			name: 'Ferenc Knedla'
		},
		{
			id: 14,
			name: 'Marek Fašiang'
		},
		{
			id: 15,
			name: 'Esnesto Švikruha'
		},
		{
			id: 16,
			name: 'Servác Onegin'
		}
	];
}
