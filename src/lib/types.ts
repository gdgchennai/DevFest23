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
		speaker?: Speakers;
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

export interface Speakers {
	name: string;
	image: string;
	company: string;
	position: string;
	description: string;
	tags: string[];
	socials?: {
		twitter?: string;
		linkedin?: string;
		github?: string;
		website?: string;
	};
}
