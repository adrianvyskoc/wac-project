export enum AllergyType {
	FOOD = 'food',
	MEDICINE = 'medicine',
	ENVIROMENT = 'enviroment',
	ANIMALS = 'animals'
}

export interface Allergy {
	id: number;	
	source: string;
	type: AllergyType;
}
