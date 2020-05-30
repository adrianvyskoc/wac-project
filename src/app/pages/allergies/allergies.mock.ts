import { AllergyType, Allergy } from 'src/app/store/allergy/allergy.model';

export class AllergiesMock {
    public static readonly allergies: Allergy[] = [
		{
			id: '25c33ba5-2adc-4229-99c3-11057ebfebb5',
			source: 'Pel',
			type: AllergyType.ENVIROMENT,
			diagnosed_at: new Date(),
			patient_id: 'c2bf4fca-119b-4172-bf6a-b005b78b0b58'
		}
	];
}
