import { Vaccine } from 'src/app/store/vaccine/vaccine.model';

export class VaccinesMock {
    public static readonly vaccines: Vaccine[] = [
		{
			id: '42d108a6-6fbf-441a-a6d3-a410645e1f11',
			completed: false,
			duration: 2,
			vaccined_at: new Date(),
			against: 'coronavirus',
			patient_id: 'c2bf4fca-119b-4172-bf6a-b005b78b0b58'
		},
		{
			id: "6c22fe82-9b8b-43f6-b103-24262c1a7079",
			completed: true,
			duration: 2,
			vaccined_at: new Date(),
			against: 'chripka',
			patient_id: 'c2bf4fca-119b-4172-bf6a-b005b78b0b58'
		}
	];
}
