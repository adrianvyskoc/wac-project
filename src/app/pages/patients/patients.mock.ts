import { Patient } from 'src/app/store/patients/patient.model';

export class PatientsMock {
    public static readonly patients: Patient[] = [
		{
			id: 'c2bf4fca-119b-4172-bf6a-b005b78b0b58',
			name: 'Justin Bieber'
		},
		{
			id: '20443b1c-4882-4c53-bab9-3d9a65046ce0',
			name: 'Ferenc Knedla'
		},
		{
			id: '1fe96781-f3f0-48d3-9afd-8d364e992651',
			name: 'Marek Fašiang'
		},
		{
			id: '74e9741f-9b07-439e-9615-1246f278f759',
			name: 'Esnesto Švikruha'
		},
		{
			id: '8af69b4a-452c-4dc3-969e-13c501c44c78',
			name: 'Servác Onegin'
		}
	];
}
