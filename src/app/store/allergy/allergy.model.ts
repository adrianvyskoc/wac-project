export enum AllergyType {
	FOOD = 'food',
	MEDICINE = 'medicine',
	ENVIROMENT = 'enviroment',
	ANIMALS = 'animals'
}

export interface Allergy {
	id: string;
	patient_id: string;	
	source: string;
	type: AllergyType;
	diagnosed_at: Date;
}
