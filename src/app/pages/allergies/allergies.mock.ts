import { AllergyType, Allergy } from 'src/app/store/allergy/allergy.model';

export class AllergiesMock {
    public static readonly allergies: Allergy[] = [
		{
			id: 12,
			source: 'Pel',
			type: AllergyType.ENVIROMENT,
			diagnosed_at: new Date()
		}
	];
}
