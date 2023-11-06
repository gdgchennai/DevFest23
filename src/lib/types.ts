export interface Memory {
	title: string;
	description: string;
	image: string;
}

export interface Day {
	date: string;
	dateTime: string;
	summary: string;
	track: string;
	timeslots: Array<{
		name: string;
		description: string | null;
		start: string;
		end: string;
	}>;
}

export interface Benefits {
	title: string;
	description: string;
	image: string;
}

export interface Sponsors {
	logo: string;
	company: string;
	website: string;
}
