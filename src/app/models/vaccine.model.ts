export interface Vaccine {
	id: number;
	completed: boolean;
	duration: number;
	vaccined_at: Date;
	against: string;
}