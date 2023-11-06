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
		summary: 'The first day of the conference is focused on AI.',
		timeslots: [
			{
				name: 'Ravi Sharma',
				description: 'AI in Healthcare',
				start: '9:00AM',
				end: '10:00AM'
			},
			{
				name: 'Priya Gupta',
				description: 'AI in Finance',
				start: '10:00AM',
				end: '11:00AM'
			},
			{
				name: 'Vijay Kumar',
				description: 'AI in Transportation',
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
				name: 'Anita Singh',
				description: 'AI in Manufacturing',
				start: '1:00PM',
				end: '2:00PM'
			},
			{
				name: 'Amit Patel',
				description: 'AI in Retail',
				start: '2:00PM',
				end: '3:00PM'
			},
			{
				name: 'Suresh Reddy',
				description: 'AI in Agriculture',
				start: '3:00PM',
				end: '4:00PM'
			}
		]
	},
	{
		date: 'Dec 1',
		dateTime: '2022-04-04',
		track: 'Track 2',
		summary:
			'The first day of the conference is focused on Product Building, Running Company & Startup.',
		timeslots: [
			{
				name: 'Ramesh Kumar',
				description: 'Product Building from Scratch',
				start: '9:00AM',
				end: '10:00AM'
			},
			{
				name: 'Sunita Sharma',
				description: 'Running a Successful Company',
				start: '10:00AM',
				end: '11:00AM'
			},
			{
				name: 'Rajiv Gupta',
				description: 'Startup - From Idea to Implementation',
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
				name: 'Anjali Singh',
				description: 'Product Management in the Modern World',
				start: '1:00PM',
				end: '2:00PM'
			},
			{
				name: 'Rajesh Patel',
				description: 'Startup Funding and Investment',
				start: '2:00PM',
				end: '3:00PM'
			},
			{
				name: 'Suresh Reddy',
				description: 'Company Culture and Employee Retention',
				start: '3:00PM',
				end: '4:00PM'
			}
		]
	},
	{
		date: 'Dec 2',
		dateTime: '2022-04-04',
		track: 'Track 1',
		summary: 'The second day of the conference is focused on Mobile/Web development workshop.',
		timeslots: [
			{
				name: 'Rahul Sharma',
				description: 'Responsive Web Design',
				start: '9:00AM',
				end: '10:00AM'
			},
			{
				name: 'Priya Gupta',
				description: 'Mobile First Design',
				start: '10:00AM',
				end: '11:00AM'
			},
			{
				name: 'Lunch',
				description: null,
				start: '12:00PM',
				end: '1:00PM'
			},
			{
				name: 'Anand Patel',
				description: 'Progressive Web Apps',
				start: '1:00PM',
				end: '2:00PM'
			},
			{
				name: 'Geeta Singh',
				description: 'Cross Platform Mobile Development',
				start: '2:00PM',
				end: '3:00PM'
			},
			{
				name: 'Vijay Kumar',
				description: 'Web Performance Optimization',
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

export const community_partners: Sponsors[] = [
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

export const corporate_partners: Sponsors[] = [
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
