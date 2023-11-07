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
		dateTime: '2023-01-12',
		track: 'Track 1',
		summary: 'Auditorium',
		timeslots: [
			{
				name: 'Registration',
				description: null,
				start: '8:00AM',
				end: '10:00AM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {}
					}
				]
			},
			{
				name: 'Welcome Note',
				description: '',
				start: '10:00AM',
				end: '10:15AM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {}
					}
				]
			},
			{
				name: 'Keynote',
				description: 'Sairee Chahal',
				start: '10:00AM',
				end: '11:00AM',
				speaker: [
					{
						name: 'Sairee Chahal',
						image: '',
						company: 'Mahila Money',
						position: 'Founder & Chairperson',
						description:
							'Sairee Chahal is a serial entrepreneur, mom, angel investor, evangelist for #womensinternet and a board member. She currently runs SHEROES – an online ecosystem for women, offering support, entrepreneurial and employment opportunities, content and community. She serves on the board of Milaan Foundation, Paytm Payments Bank and US-based Women in Cloud.',
						tags: ['Keynote'],
						socials: {
							twitter: 'https://twitter.com/Sairee',
							linkedin: 'https://www.linkedin.com/in/sairee',
							website: 'https://www.saireechahal.com/'
						}
					},
					{
						name: 'Adit Lal',
						image:
							'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699367888/devfest23/speakers/aekv1vnlaokclf52emwy.webp',
						company: 'Freshworkds',
						position: 'Developer Relations',
						description:
							'Sanju is a Developer Relations Engineer at Freshworks. He is a Google Developer Expert in Web Technologies and a Microsoft MVP in Developer Technologies. He is a full stack developer and a passionate technical blogger. He has been writing blogs for more than 10 years and has written 1000+ blog articles. He is an active contributor to StackOverflow and other developer communities. He is a speaker at various developer conferences and has conducted many technical workshops.',
						tags: ['Live coding'],
						socials: {
							twitter: 'https://twitter.com/Sairee',
							linkedin: 'https://www.linkedin.com/in/sairee',
							website: 'https://www.saireechahal.com/'
						}
					}
				]
			},
			{
				name: 'TBD',
				description: null,
				start: '10:15AM',
				end: '11:00PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Break',
				description: null,
				start: '11:00PM',
				end: '11:15PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'About WTM Chennai',
				description: null,
				start: '11:15AM',
				end: '11:35AM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'The Unbearable Lightness of Writing CSS',
				description: 'Shuvam Manna',
				start: '11:40AM',
				end: '12:15PM',
				speaker: [
					{
						name: 'Shuvam Manna',
						image: '',
						company: 'SigNoz',
						position: 'Product Designer',
						description: '',
						tags: [''],
						socials: {
							twitter: 'https://twitter.com/shuvam360',
							linkedin: 'https://www.linkedin.com/in/shuvam-manna',
							website: 'https://shuvam.xyz'
						}
					}
				]
			},
			{
				name: 'Lunch',
				description: null,
				start: '12:30PM',
				end: '2:00PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Creating SDKs for Multiple Platforms with KMP',
				description: 'Rivu Chakraborty',
				start: '2:00PM',
				end: '2:35PM',
				speaker: [
					{
						name: 'Rivu Chakraborty',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Google Cybersecurity Certifications',
				description: 'Manikandan Krishnamurthy',
				start: '2:00PM',
				end: '2:35PM',
				speaker: [
					{
						name: 'Manikandan Krishnamurthy',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Micro Sass - Convert your Side projects to Micro Sass MVP',
				description: 'Anand NG',
				start: '2:55PM',
				end: '3:10PM',
				speaker: [
					{
						name: 'Anand NG',
						image: '',
						company: 'Freshworks',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Cloudlens - Cloud Console in your terminal',
				description: 'Chinmay Naik',
				start: '3:15PM',
				end: '3:30PM',
				speaker: [
					{
						name: 'Chinmay Naik',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'TBD',
				description: null,
				start: '3:30PM',
				end: '3:45PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'TBD',
				description: null,
				start: '3:45PM',
				end: '4:20PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Day 1 closing note',
				description: null,
				start: '4:25PM',
				end: '4:45PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Networking',
				description: null,
				start: '5:00PM',
				end: '6:00PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			}
		]
	},
	{
		date: 'Dec 1',
		dateTime: '2023-01-12',
		track: 'Track 2',
		summary: 'Special side track',
		timeslots: [
			{
				name: '-',
				description: null,
				start: '8:00AM',
				end: '11:15PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'TBD',
				description: null,
				start: '11:15AM',
				end: '12:15PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Lunch',
				description: '',
				start: '12:30PM',
				end: '2:00PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'No downtime migration of stateful servers',
				description: 'Anush Arvind',
				start: '2:00PM',
				end: '2:35PM',
				speaker: [
					{
						name: 'Anush Arvind',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Secure Cloud Native Workflows',
				description: 'Ram Iyengar',
				start: '2:35PM',
				end: '3:10PM',
				speaker: [
					{
						name: 'Ram Iyengar',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Transaction isolation using anomaly detection',
				description: 'Hariharan Chandrasekar',
				start: '3:15PM',
				end: '3:50PM',
				speaker: [
					{
						name: 'Hariharan Chandrasekar',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'TBD',
				description: null,
				start: '3:50PM',
				end: '4:25PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: '-',
				description: null,
				start: '4:25PM',
				end: '5:30PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			}
		]
	},
	{
		date: 'Dec 1',
		dateTime: '2023-01-12',
		track: 'Track 3',
		summary: 'Special side track',
		timeslots: [
			{
				name: '-',
				description: null,
				start: '8:00AM',
				end: '11:40PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'A guide on making Android apps safe and secured',
				description: 'Adit Lal',
				start: '11:40AM',
				end: '12:15PM',
				speaker: [
					{
						name: 'Adit Lal',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Lunch',
				description: null,
				start: '12:30PM',
				end: '2:00PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'TBD',
				description: null,
				start: '2:00PM',
				end: '2:35PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Architecting Events On Cloud',
				description: 'Sasi Teja K',
				start: '2:35PM',
				end: '3:10PM',
				speaker: [
					{
						name: 'Sasi Teja K',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Writing a Custom Kubernetes Controller with Golang',
				description: 'Animesh Rastogi',
				start: '3:15PM',
				end: '3:50PM',
				speaker: [
					{
						name: 'Animesh Rastogi',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Unveiling the Future of Cybersecurity: Harnessing AI and Machine Learning for Cyberthreat Modeling',
				description: 'Kannammal',
				start: '3:50PM',
				end: '4:05PM',
				speaker: [
					{
						name: 'Kannammal',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: '-',
				description: null,
				start: '4:05PM',
				end: '5:30PM',
				speaker: [
					{
						name: 'Kannammal',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			}
		]
	},
	{
		date: 'Dec 2',
		dateTime: '2023-02-12',
		track: 'Track 1',
		summary: 'Auditorium',
		timeslots: [
			{
				name: 'Opening Note',
				description: null,
				start: '9:30AM',
				end: '9:45AM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Keynote',
				description: 'Abirami Sukumaran',
				start: '9:45AM',
				end: '10:15AM',
				speaker: [
					{
						name: 'Abirami Sukumaran',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Break',
				description: null,
				start: '10:15PM',
				end: '10:45PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'TBD',
				description: null,
				start: '10:45AM',
				end: '11:20AM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'TBD',
				description: null,
				start: '11:25PM',
				end: '12:00PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'TBD',
				description: null,
				start: '12:00PM',
				end: '12:35PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Lunch',
				description: null,
				start: '12:30PM',
				end: '2:00PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: "Using Jetpack's Credential Manager API for safer and simpler sign-in",
				description: 'Priya Sindkar',
				start: '2:00PM',
				end: '2:35PM',
				speaker: [
					{
						name: 'Priya Sindkar',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Taking Flutter places',
				description: 'Ayush Shekhar',
				start: '2:40PM',
				end: '3:15PM',
				speaker: [
					{
						name: 'Ayush Shekhar',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'About GDG Cloud Chennai',
				description: null,
				start: '3:15PM',
				end: '3:35PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'About TFUG Chennai',
				description: null,
				start: '3:35PM',
				end: '3:55PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'About Google for Startups',
				description: null,
				start: '3:55PM',
				end: '4:15PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Closing Note',
				description: null,
				start: '4:30PM',
				end: '5:30PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Networking',
				description: null,
				start: '5:30PM',
				end: '6:00PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			}
		]
	},
	{
		date: 'Dec 2',
		dateTime: '2023-02-12',
		track: 'Track 2',
		summary: 'Special side track',
		timeslots: [
			{
				name: '-',
				description: null,
				start: '9:30AM',
				end: '10:45AM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Beyond Loading Bars: Bridging Cloud Storage Buckets and CDNs for Optimized Asset Delivery',
				description: 'Vivek Dhayalan',
				start: '10:45AM',
				end: '11:20AM',
				speaker: [
					{
						name: 'Vivek Dhayalan',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Improve Developer Experience(DX) with Preview Environments on Kubernetes',
				description: 'Jaideep Khandelwal',
				start: '11:25PM',
				end: '12:40PM',
				speaker: [
					{
						name: 'Jaideep Khandelwal',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Lunch',
				description: null,
				start: '12:30PM',
				end: '2:00PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: "A newbie's adventure in UX/UI Design",
				description: 'Muthulakshmi Mahesh',
				start: '2:00PM',
				end: '2:35PM',
				speaker: [
					{
						name: 'Muthulakshmi Mahesh',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Vertex AI',
				description: 'Bhaarat Krishnan J',
				start: '2:40PM',
				end: '4:20PM',
				speaker: [
					{
						name: 'Bhaarat Krishnan J',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: '-',
				description: null,
				start: '4:20PM',
				end: '6:00PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			}
		]
	},
	{
		date: 'Dec 2',
		dateTime: '2023-02-12',
		track: 'Track 3',
		summary: 'Special side track',
		timeslots: [
			{
				name: '-',
				description: null,
				start: '9:30AM',
				end: '10:45AM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'pAIr programming - Facts & Myths in the era of AI',
				description: 'Kalarani Lakshmanan',
				start: '10:45AM',
				end: '11:20AM',
				speaker: [
					{
						name: 'Kalarani Lakshmanan',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: "From Idea to Performance Impact: The Rise of Accelerated Generative AI with Intel's OpenVINO™ Toolkit",
				description: 'Anisha Udayakumar',
				start: '11:25PM',
				end: '12:40PM',
				speaker: [
					{
						name: 'Anisha Udayakumar',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'Lunch',
				description: null,
				start: '12:30PM',
				end: '2:00PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: "Building Intelligent Chatbots using Google's MakerSuite & PaLM API Integration with Neo4j Database",
				description: 'Bhavesh Bhatt',
				start: '2:00PM',
				end: '2:35PM',
				speaker: [
					{
						name: 'Bhavesh Bhatt',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: 'The unfair advantage of PaLM LLM versatility for Developers and Businesses',
				description: 'S. K. Roshan',
				start: '2:40PM',
				end: '4:20PM',
				speaker: [
					{
						name: 'S. K. Roshan',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			},
			{
				name: '-',
				description: null,
				start: '4:20PM',
				end: '6:00PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: '',
							website: ''
						}
					}
				]
			}
		]
	}
];

// logo size 148 x 58
export const sponsors: Sponsors[] = [
	{
		logo: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699294086/devfest23/logos/wvvaqjxsyeo57i972e3q.webp',
		company: 'Google for Developer',
		website: 'https://developers.google.com'
	}
];

// logo size 148 x 58
export const community_partners: Sponsors[] = [
	{
		logo: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699293611/devfest23/logos/t6gdyhhajis5bgnrpklf.webp',
		company: 'GDG Cloud Chennai',
		website: 'https://gdg.community.dev/gdg-cloud-chennai'
	},
	{
		logo: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699293600/devfest23/logos/ezdrdfomige29qcm3ldu.webp',
		company: 'WTM Chennai',
		website: 'https://gdg.community.dev/gdg-chennai'
	},
	{
		logo: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699293601/devfest23/logos/l9y7ax7p7joinoq9oui2.webp',
		company: 'TFUG Chennai',
		website: 'https://www.meetup.com/TensorFlow-User-Group-Chennai/'
	}
];

// logo size 148 x 58
export const corporate_partners: Sponsors[] = [
	{
		logo: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699291964/devfest23/logos/cnku4jieszvr9nazvfev.webp',
		company: 'Konfhub',
		website: 'https://konfhub.com/'
	},
	{
		logo: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699292249/devfest23/logos/tlxjery5yfkowizsxiwu.webp',
		company: 'Jetbrains',
		website: 'https://jetbrains.com/'
	}
];
