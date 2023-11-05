import type { Day, Memory, Sponsors } from '$lib/types';

export const memories: Memory[] = [
	{
		title: 'DevFest 2022 was so much fun.',
		description:
			'Last year, we had 1000+ attendees, 30+ speakers, 20+ sessions, 10+ sponsors, 5+ communities and 1 amazing event.',
		image: 'https://devfest.gdgchennai.in/memories/1.webp'
	},
	{
		title: 'DevFest 2022 was so much fun.',
		description:
			'Last year, we had 1000+ attendees, 30+ speakers, 20+ sessions, 10+ sponsors, 5+ communities and 1 amazing event.',
		image: 'https://devfest.gdgchennai.in/memories/2.webp'
	},
	{
		title: 'DevFest 2022 was so much fun.',
		description:
			'Last year, we had 1000+ attendees, 30+ speakers, 20+ sessions, 10+ sponsors, 5+ communities and 1 amazing event.',
		image: 'https://devfest.gdgchennai.in/memories/3.webp'
	},
	{
		title: 'DevFest 2022 was so much fun.',
		description:
			'Last year, we had 1000+ attendees, 30+ speakers, 20+ sessions, 10+ sponsors, 5+ communities and 1 amazing event.',
		image: 'https://devfest.gdgchennai.in/memories/4.jpeg'
	},
	{
		title: 'DevFest 2022 was so much fun.',
		description:
			'Last year, we had 1000+ attendees, 30+ speakers, 20+ sessions, 10+ sponsors, 5+ communities and 1 amazing event.',
		image: 'https://devfest.gdgchennai.in/memories/5.webp'
	},
	{
		title: 'DevFest 2022 was so much fun.',
		description:
			'Last year, we had 1000+ attendees, 30+ speakers, 20+ sessions, 10+ sponsors, 5+ communities and 1 amazing event.',
		image: 'https://devfest.gdgchennai.in/memories/6.webp'
	},
	{
		title: 'DevFest 2022 was so much fun.',
		description:
			'Last year, we had 1000+ attendees, 30+ speakers, 20+ sessions, 10+ sponsors, 5+ communities and 1 amazing event.',
		image: 'https://devfest.gdgchennai.in/memories/7.webp'
	},
	{
		title: 'DevFest 2022 was so much fun.',
		description:
			'Last year, we had 1000+ attendees, 30+ speakers, 20+ sessions, 10+ sponsors, 5+ communities and 1 amazing event.',
		image: 'https://devfest.gdgchennai.in/memories/8.webp'
	}
];

export const schedules: Day[] = [
	{
		date: 'Dec 1',
		dateTime: '2022-04-04',
		track: 'Track 1',
		summary: 'The first day of the conference is focused on dark patterns for ecommerce.',
		timeslots: [
			{
				name: 'Steven McHail',
				description: 'Not so one-time payments',
				start: '9:00AM',
				end: '10:00AM'
			},
			{
				name: 'Jaquelin Isch',
				description: 'The finer print',
				start: '10:00AM',
				end: '11:00AM'
			},
			{
				name: 'Dianne Guilianelli',
				description: 'Post-purchase blackmail',
				start: '11:00AM',
				end: '12:00PM'
			},
			{
				name: 'Lunch',
				description: null,
				start: '12:00PM',
				end: '1:00PM'
			},
			{
				name: 'Ronni Cantadore',
				description: 'Buy or die',
				start: '1:00PM',
				end: '2:00PM'
			},
			{
				name: 'Erhart Cockrin',
				description: 'In-person cancellation',
				start: '2:00PM',
				end: '3:00PM'
			},
			{
				name: 'Parker Johnson',
				description: 'The pay/cancel switcheroo',
				start: '3:00PM',
				end: '4:00PM'
			}
		]
	},
	{
		date: 'Dec 1',
		dateTime: '2022-04-05',
		track: 'Track 2',
		summary: 'Next we spend the day talking about deceiving people with technology.',
		timeslots: [
			{
				name: 'Damaris Kimura',
				description: 'The invisible card reader',
				start: '9:00AM',
				end: '10:00AM'
			},
			{
				name: 'Ibrahim Frasch',
				description: 'Stealing fingerprints',
				start: '10:00AM',
				end: '11:00AM'
			},
			{
				name: 'Cathlene Burrage',
				description: 'Voting machines',
				start: '11:00AM',
				end: '12:00PM'
			},
			{
				name: 'Lunch',
				description: null,
				start: '12:00PM',
				end: '1:00PM'
			},
			{
				name: 'Rinaldo Beynon',
				description: 'Blackhat SEO that works',
				start: '1:00PM',
				end: '2:00PM'
			},
			{
				name: 'Waylon Hyden',
				description: 'Turning your audience into a botnet',
				start: '2:00PM',
				end: '3:00PM'
			},
			{
				name: 'Giordano Sagucio',
				description: 'Fly phishing',
				start: '3:00PM',
				end: '4:00PM'
			}
		]
	},
	{
		date: 'Dec 2',
		dateTime: '2022-04-06',
		track: 'Track 1',
		summary: 'We close out the event previewing new techniques that are still in development.',
		timeslots: [
			{
				name: 'Andrew Greene',
				description: 'Neuralink dark patterns',
				start: '9:00AM',
				end: '10:00AM'
			},
			{
				name: 'Heather Terry',
				description: 'DALL-E for passports',
				start: '10:00AM',
				end: '11:00AM'
			},
			{
				name: 'Piers Wilkins',
				description: 'Quantum password cracking',
				start: '11:00AM',
				end: '12:00PM'
			},
			{
				name: 'Lunch',
				description: null,
				start: '12:00PM',
				end: '1:00PM'
			},
			{
				name: 'Gordon Sanderson',
				description: 'SkyNet is coming',
				start: '1:00PM',
				end: '2:00PM'
			},
			{
				name: 'Kimberly Parsons',
				description: 'Dark patterns for the metaverse',
				start: '2:00PM',
				end: '3:00PM'
			},
			{
				name: 'Richard Astley',
				description: 'Knowing the game and playing it',
				start: '3:00PM',
				end: '4:00PM'
			}
		]
	},
	{
		date: 'Dec 2',
		dateTime: '2022-04-06',
		track: 'Track 2',
		summary: 'We close out the event previewing new techniques that are still in development.',
		timeslots: [
			{
				name: 'Andrew Greene',
				description: 'Neuralink dark patterns',
				start: '9:00AM',
				end: '10:00AM'
			},
			{
				name: 'Heather Terry',
				description: 'DALL-E for passports',
				start: '10:00AM',
				end: '11:00AM'
			},
			{
				name: 'Piers Wilkins',
				description: 'Quantum password cracking',
				start: '11:00AM',
				end: '12:00PM'
			},
			{
				name: 'Lunch',
				description: null,
				start: '12:00PM',
				end: '1:00PM'
			},
			{
				name: 'Gordon Sanderson',
				description: 'SkyNet is coming',
				start: '1:00PM',
				end: '2:00PM'
			},
			{
				name: 'Kimberly Parsons',
				description: 'Dark patterns for the metaverse',
				start: '2:00PM',
				end: '3:00PM'
			},
			{
				name: 'Richard Astley',
				description: 'Knowing the game and playing it',
				start: '3:00PM',
				end: '4:00PM'
			}
		]
	}
];

export const sponsors: Sponsors[] = [
	{
		logo: 'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg',
		company: 'Transistor',
		website: 'https://www.transistor.com'
	},
	{
		logo: 'https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg',
		company: 'Reform',
		website: 'https://use-reform.com'
	},
	{
		logo: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg',
		company: 'Tuple',
		website: 'https://tuple.app'
	},
	{
		logo: 'https://tailwindui.com/img/logos/158x48/laravel-logo-gray-900.svg',
		company: 'Laravel',
		website: 'https://laravel.com'
	},
	{
		logo: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg',
		company: 'SavvyCal',
		website: 'https://savvycal.com'
	},
	{
		logo: 'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg',
		company: 'Statamic',
		website: 'https://statamic.com'
	}
];
