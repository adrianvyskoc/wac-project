import { Vaccine } from 'src/app/store/vaccine/vaccine.model';

export class VaccinesMock {
    public static readonly vaccines: Vaccine[] = [
		{
			id: 1,
			completed: false,
			duration: 2,
			vaccined_at: new Date(),
			against: 'coronavirus'
		},
		{
			id: 2,
			completed: true,
			duration: 2,
			vaccined_at: new Date(),
			against: 'chripka'
		}
	];
}
