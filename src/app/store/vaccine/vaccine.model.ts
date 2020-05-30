export interface Vaccine {
	id: string;
	patient_id: string;
	completed: boolean;
	duration: number;
	vaccined_at: Date;
	against: string;
}