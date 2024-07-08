import type { Day, Memory, Sponsors } from '$lib/types';

export const memories: Memory[] = [
	{
		title: 'DevFest 2023 was so much fun.',
		image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1720409888/devfest23/memories/RCS00023_p6bs08.webp'
	},
	{
		title: 'DevFest 2023 was so much fun.',
		image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1720409888/devfest23/memories/DSC06035_t2qnfe.webp'
	},
	{
		title: 'DevFest 2023 was so much fun.',
		image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1720409888/devfest23/memories/DSC06198_itslqf.webp'
	},
	{
		title: 'DevFest 2023 was so much fun.',
		image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1720409889/devfest23/memories/DSC06166_gflz8b.webp'
	},
	{
		title: 'DevFest 2023 was so much fun.',
		image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1720409888/devfest23/memories/IMG_0883.CR2_wbo0xc.webp'
	},
	{
		title: 'DevFest 2023 was so much fun.',
		image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1720409888/devfest23/memories/DSC06609_fu6bup.webp'
	},
	{
		title: 'DevFest 2023 was so much fun.',
		image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1720409887/devfest23/memories/RCS00050_rpvjxw.webp'
	},
	{
		title: 'DevFest 2023 was so much fun.',
		image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1720409888/devfest23/memories/DSC06730_z4j9ra.webp'
	},
	{
		title: 'DevFest 2023 was so much fun.',
		image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1720409886/devfest23/memories/IMG_1200.CR2_efufj1.webp'
	},
	{
		title: 'DevFest 2023 was so much fun.',
		image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1720409887/devfest23/memories/IMG_0922.CR2_bhrqiu.webp'
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
				name: 'Registration & networking',
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
				description: '-',
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
				start: '10:15AM',
				end: '10:45AM',
				speaker: [
					{
					name: 'Sairee Chahal',
					image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699365810/devfest23/speakers/i5xnrrxwrkhc21kfkv44.webp',
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
				}
				]
			},
			{
				name: 'Google for Developers',
				description: '-',
				start: '10:45AM',
				end: '11:00AM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: ['Sponsor'],
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
				description: '-',
				start: '11:00AM',
				end: '11:15AM',
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
				name: 'Sponsor announcement',
				description: 'Rezoomex',
				start: '11:15AM',
				end: '11:25AM',
				speaker: [
					{
						name: 'Rezoomex',
						image: '',
						company: '',
						position: '',
						description: 'Rezoomex NFT Marketplace is an innovative platform that allows software professionals to monetize their capabilities and skills by turning their resumes into unique digital assets. These assets, or NFTs, are stored on a blockchain, which enables users to prove ownership and authenticity of their resumes. In this marketplace, smart contracts govern the way individuals and companies safely transact and build reputation. Rezoomex NFT Marketplace is run by a DAO,- Decentralized Autonomous Organization providing unbiased way to search, discover and engage.',
						tags: ['Sponsor'],
						socials: {
							twitter: 'https://twitter.com/Rezoomex',
							linkedin: 'https://www.linkedin.com/company/rezoomex/',
							website: 'https://rezoomex.com/'
						}
					}
				]
			},
			{
				name: 'CNCF: Fostering the growth and evolution of the cloud native ecosystem',
				description: 'Senthil Raja',
				start: '11:30AM',
				end: '11:45AM',
				speaker: [
					{
						name: 'Senthil Raja Chermapandian',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1700907698/devfest23/speakers/1588536421735_rsrohx.jpg',
						company: 'Ericsson',
						position: 'Principal Software Engineer',
						description: 'Ever since its inception in 2015, The Cloud Native Computing Foundation has been making cloud native computing ubiquitous. In this talk, you\'ll learn about CNCF\'s charter and how CNCF successfully fosters the growth and evolution of the cloud native ecosystem.',
						tags: ['Sponsor'],
						socials: {
							twitter: '',
							linkedin: 'https://www.linkedin.com/in/senthilrch/',
							website: 'https://cncf.io'
						}
					}
				]
			},
			{
				name: 'From Protocols to Product: Radical New Take on The Future of Digital Economy',
				description: 'Ansha Dixit',
				start: '11:55AM',
				end: '12:30PM',
				speaker: [
					{
						name: 'Ansha Dixit',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1701073612/devfest23/speakers/IMG_0744_Copy_ug9dox.jpg',
						company: 'FIDE (previously Beckn Foundation)',
						position: 'Community Head & Steward – Beckn Open Collective',
						description: '',
						tags: [''],
						socials: {
							twitter: 'https://twitter.com/anshadixit',
							linkedin: 'https://www.linkedin.com/in/anshadixit',
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
						socials: {}
					}
				]
			},
			{
				name: 'The Unbearable Lightness of Writing CSS',
				description: 'Shuvam Manna',
				start: '2:00PM',
				end: '2:35PM',
				speaker: [
					{
						name: 'Shuvam Manna',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699365625/devfest23/speakers/heqrlzbd6nnafo3kkq9t.webp',
						company: 'SigNoz',
						position: 'Product Designer',
						description:
							'Pushing around things on screen to feel something!',
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
				name: 'Creating SDKs for Multiple Platforms with KMP',
				description: 'Rivu Chakraborty',
				start: '2:35PM',
				end: '3:10PM',
				speaker: [
					{
					name: 'Rivu Chakraborty',
					image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699366251/devfest23/speakers/msanqjxngbbmldczym1m.webp',
					company: 'JioCinema',
					position: 'Mobile Architect',
					description:
						'Rivu Chakraborty is India\'s first Kotlin GDE, an Android developer, a community person, & one of the early adopters of Kotlin. With overall ~10 years of experience, he works at Viacom18 - JioCinema (India\'s biggest OTT platform) as Android Architect / Senior Manager. He previously used to work at Meesho (a promising unicorn E-Commerce Startup from India), Gojek (one of South-East Asia\'s biggest startups), Paytm (India\'s biggest Fintech startup), and Byju\'s (one of India\'s biggest Edtech startup).\
						He has contributed to multiple Kotlin and Android Development books including authoring Reactive Programming in Kotlin, co-authoring Functional Kotlin the first-ever book to help Kotlin developers learn Functional Programming and use Arrow-kt in their projects, and co-authoring Hands-On Data Structures and Algorithms with Kotlin.\
						He has been using Kotlin since December 2015. Rivu formed KotlinKolkata User Group, the first active Kotlin User Group in India. Before he had to move out of Kolkata, he was organizing meetups and events for both KotlinKolkata and GDG Kolkata. Along with organizing community & events, he also speaks at events/conferences and local meetups',
					tags: ['GDE'],
					socials: {
						twitter: 'https://twitter.com/rivuchakraborty',
						linkedin: 'https://www.linkedin.com/in/rivuchk',
						website: ''
					}
				}
				]
			},
			{
				name: 'Panel - Code to Commerce: Empowering Developers with Business Acumen',
				description: 'Ranjith & Swathi',
				start: '3:15PM',
				end: '4:25PM',
				speaker: [
					{
						name: 'Ranjith Melarkode',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1701260656/devfest23/speakers/RM_-_Photo_u6xelt.png',
						company: 'PVR INOX',
						position: 'Head of Data and Analytics',
						description: 'A Versatile Data and Digital Leader, Ranjith is responsible in deriving Value from Data at PVR INOX Ltd; India\'s largest Cinema Exhibitor.Prior to this Ranjith held Digital leadership positions in Entertainment, Energy and Software industries.He has rich experience in creating and running - Digital businesses, Data and Digital driven experiences for consumers at scale.With a passion to create value from Data and Digital, Ranjith is now creating Data/ AI products and services to help Enterprises be Data driven.',
						tags: ['Guest'],
						socials: {
							'linkedin': 'https://in.linkedin.com/in/ranjithmelarkode'
						}
					},
					{
						name: 'Swathi Dhamodaran',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1701260680/devfest23/speakers/SD_-_Photo_mvjow7.jpg',
						company: 'Trifecta Growth Equity',
						position: 'Investment Associate',
						description: 'Swathi is an engineer at heart having graduated with a degree in CS from NIT-Trichy, after which she worked at Goldman Sachs as a Java Developer. Following that, she pivoted into venture capital investing for software deeptech and SaaS companies at Blume Ventures where she also built an extensive thesis on Developer tools. She currently works for a Growth stage fund, Trifecta capital in Bombay. ',
						tags: ['Host'],
						socials: {}
					}
				]
			},
			{
				name: 'Day 1 closing note',
				description: null,
				start: '4:30PM',
				end: '4:50PM',
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
						socials: {}
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
				name: 'Registration & networking',
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
				name: '-',
				description: '-',
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
				name: '-',
				description: '-',
				start: '10:15AM',
				end: '10:45AM',
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
				name: '-',
				description: null,
				start: '10:45AM',
				end: '11:00AM',
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
				name: '-',
				description: null,
				start: '11:00AM',
				end: '11:15AM',
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
				name: '-',
				description: '-',
				start: '11:15AM',
				end: '11:25AM',
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
				name: '-',
				description: '-',
				start: '11:30AM',
				end: '11:45AM',
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
				name: 'Micro Sass - Convert your Side projects to Micro Sass MVP',
				description: 'Anand NG',
				start: '12:00PM',
				end: '12:15PM',
				speaker: [
					{
						name: 'Anand NG',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699366873/devfest23/speakers/stctvt9x8ycbhxa5xfte.webp',
						company: 'Freshworks',
						position: 'Lead Software Engineer - Frontend',
						description:
							'',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: 'www.linkedin.com/in/reachoutanandgopinath',
							website: ''
						}
					}
				]
			},
			{
				name: 'Cloudlens - Cloud Console in your terminal',
				description: 'Chinmay Naik',
				start: '12:15PM',
				end: '12:30PM',
				speaker: [
					{
						name: 'Chinmay Naik',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699367132/devfest23/speakers/rpsuytep4bmmc1udzaew.webp',
						company: 'One2N',
						position: 'Founder',
						description:
							'Chinmay Naik is one of the co-founders of One2N where he helps companies solve their backend and reliability engineering problems. He writes pragmatic engineering stories on Twitter. Talk to him any day about psychology, playing percussion, and the Age of empires (apart from the usual backend and reliability engineering) and he won\'t disappoint you.',
						tags: [''],
						socials: {
							twitter: 'https://twitter.com/chinmay185',
							linkedin: 'https://www.linkedin.com/in/chinmay185',
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
						socials: {}
					}
				]
			},
			{
				name: 'No downtime migration of stateful servers',
				description: 'Anush & Arumugaraja',
				start: '2:00PM',
				end: '2:35PM',
				speaker: [
					{
						name: 'Anush Arvind',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699367337/devfest23/speakers/zbhnwdilxyfd2cd2ohio.webp',
						company: 'Freshworks',
						position: 'Senior Staff Engineer - Site Reliability',
						description:
							'',
						tags: [''],
						socials: {
							twitter: 'https://twitter.com/anushshiva',
							linkedin: 'https://www.linkedin.com/in/anush-arvind-0b5844a5',
							website: ''
						}
					},
					{
						name: 'Arumugaraja Thirumani',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1700556726/devfest23/speakers/gwlpnwbhaidw3xxh9xry.jpg',
						company: 'Freshworks',
						position: 'Staff Engineer - Site Reliability',
						description:
							'',
						tags: [''],
						socials: {
							twitter: 'https://twitter.com/anushshiva',
							linkedin: 'https://www.linkedin.com/in/anush-arvind-0b5844a5',
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
					image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699367482/devfest23/speakers/raz3rz814omzqzp8ltkf.webp',
					company: 'Cloud Foundry Foundation',
					position: 'Chief Evangelist',
					description:
						'Ram Iyengar is an engineer by practice and an educator at heart. He was (cf) pushed into technology evangelism along his journey as a developer and hasn’t looked back since! He enjoys helping engineering teams around the world discover new and creative ways to work. He is a proponent of product development and engineering teams that put the community first.',
					tags: [''],
					socials: {
						twitter: '',
						linkedin: 'https://www.linkedin.com/in/ram-iyengar',
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
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699367650/devfest23/speakers/fpbnf6prxnmul0owxr0j.webp',
						company: 'Freshworks',
						position: 'Software Engineer - Site Reliability',
						description:
							'',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: 'https://www.linkedin.com/in/hariharan-chandrasekar-497b27187',
							website: ''
						}
					},
					{
						name: 'Amit Kumar',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1700556939/devfest23/speakers/vtjtfe5q6re9aqthuxmm.webp',
						company: 'Freshworks',
						position: 'Lead Software Engineer - Machine Learning',
						description:
							'',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: 'https://www.linkedin.com/in/amit-kumar-47007a113',
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
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699371001/devfest23/speakers/hl1tnpc2dx0ybrqp24rs.webp',
						company: 'Kyndryl Private Solutions',
						position: 'Cybersecurity Leader',
						description: 'Kannammal is a passionate cybersecurity leader with over 14+ years of experience in the industry. She is skilled in cyber security, security audits, risk and compliance, governance, data privacy, cloud computing, and cloud security. She is self-driven by a desire to help organizations protect their data and systems from cyber threats.',
						tags: [''],
						socials: {
							twitter: 'https://twitter.com/KannammalN',
							linkedin: 'https://www.linkedin.com/in/kannamgcyber',
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
						socials: {}
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
				name: 'Registration & networking',
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
				name: '-',
				description: '-',
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
				name: '-',
				description: '-',
				start: '10:15AM',
				end: '10:45AM',
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
				name: '-',
				description: '-',
				start: '10:45AM',
				end: '11:00AM',
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
				name: '-',
				description: '-',
				start: '11:00AM',
				end: '11:15AM',
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
				name: '-',
				description: '-',
				start: '11:15AM',
				end: '11:25AM',
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
				name: '-',
				description: '-',
				start: '11:30AM',
				end: '11:45AM',
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
				name: '-',
				description: '-',
				start: '11:45AM',
				end: '12:00PM',
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
				name: '-',
				description: '-',
				start: '12:00PM',
				end: '12:30PM',
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
						socials: {}
					}
				]
			},
			{
				name: 'A guide on making Android apps safe and secured',
				description: 'Adit Lal',
				start: '2:00PM',
				end: '2:35PM',
				speaker: [
					{
						name: 'Adit Lal',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699367888/devfest23/speakers/aekv1vnlaokclf52emwy.webp',
						company: 'Viacom18',
						position: 'Software Engineer',
						description:
							'Adit is a Senior Android Manager/ Architect, currently working for Viacom18. He has been working in the industry for close to about 10+ years primarily helping build android mobile products and scaling them up. Some of his hobbies are Stargazing, Travel, and Landscape Photography.',
						tags: ['GDE'],
						socials: {}
					}
				]
			},
			{
				name: 'Writing a Custom Kubernetes Controller with Golang',
				description: 'Animesh Rastogi',
				start: '2:35PM',
				end: '3:10PM',
				speaker: [
					{
						name: 'Animesh Rastogi',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699370771/devfest23/speakers/vmndppmkkbqocfaydfsp.webp',
						company: 'Searce Inc',
						position: 'Technical Account Manager',
						description: 'Animesh is a multi cloud certified DevOps Engineer and Cloud Architect. He works with Enterprise clients building highly complex systems that scale to millions of users.\
						Animesh is a frequent speaker at meetups and conferences and writes blogs on the latest technologies.',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: 'https://www.linkedin.com/in/animeshrastogi54',
							website: ''
						}
					}
				]
			},
			{
				name: 'Cloud Study Jams',
				description: 'Jenisten & Manikandan',
				start: '3:15PM',
				end: '4:15PM',
				speaker: [
					{
						name: 'Jenister Xavier',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1701239674/devfest23/speakers/IMG_7177_i2zcye.jpg',
						company: 'FULL Creative',
						position: 'Senior IT Analyst',
						description: 'Jenisten is a passionate DevOps professional and is always eager to explore new technologies. He thrives in collaborative environments to tackle complex challenges together. Dedicated to lifelong learning, he continuously looks for ways to improve himself and is a generous mentor for his colleagues.',
						tags: ['GDG Cloud Chennai', 'TFUG Chennai'],
						socials: {}
					},
					{
						name: 'Manikandan Krishnamurthy',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699366417/devfest23/speakers/objuxh4j7rgv9wgom3mj.webp',
						company: 'Tata Consultancy Services',
						position: 'GCP Architect',
						description: 'Manikandan is GCP Architect at TCS with approximately 14 years of experience in the IT industry, including around 5 years of professional experience with Google Cloud. He is proficient in designing, implementing, and troubleshooting Google Cloud Platform (GCP) solutions. He is Passionate about the cloud community and committed to helping others learn about and use Google Cloud Platform (GCP).',
						tags: ['GDG Cloud Chennai'],
						socials: {}
					}
				]
			},
			{
				name: '-',
				description: null,
				start: '4:15PM',
				end: '5:00PM',
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
						socials: {}
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
				name: 'Networking',
				description: null,
				start: '8:00AM',
				end: '9:30AM',
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
						socials: {}
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
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699371361/devfest23/speakers/u40w0bbuycn3hrgsom4u.webp',
						company: 'Google',
						position: 'Developer Advocate',
						description: 'Abirami Sukumaran brings 17 years of industry experience, a tech visionary renowned for leading high-performing, scalable, cost-effective solutions in Data Management Applications. She excels in Data Management (Databases, Application Development, Data Governance), Data Science (Machine Learning, Natural Language Processing), and Cloud Computing (Data, Databases, AI/ML, Serverless). As a Developer Advocate Leader at Google, she codes, researches, writes, and speaks, connecting with developers, customers, and startups to drive innovation, learning, and excellence.',
						tags: ['Keynote'],
						socials: {
							twitter: 'https://twitter.com/AbiramiSukumara',
							linkedin: 'https://linkedin.com/in/abiramisukumaran',
							website: 'https://abirami.dev/'
						}
					}
				]
			},
			{
				name: 'Accelerating Digital Transformation using Cloud & AI',
				description: 'Suresh Viswanathan',
				start: '10:15AM',
				end: '10:30AM',
				speaker: [
					{
						name: 'Suresh Viswanathan',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1700913151/devfest23/speakers/Suresh_V_Headshot_vp3njq.jpg',
						company: 'Sagent',
						position: 'Vice President - Architecture',
						description: 'Technologist with extensive experience in Digital transformation initiatives ranging from Retail-Ecommerce to Mortgage.  He works as an Architect at Sagent M&C India Private Limited architecting industry first cloud native core leveraging Microservices and Event driven architecture.',
						tags: ['Sponsor'],
						socials: {
							linkedin: 'https://www.linkedin.com/in/suresh-viswanathan80/',
							website: 'https://sagent.com'
						}
					}
				]
			},
			{
				name: 'Break',
				description: null,
				start: '10:30AM',
				end: '10:45AM',
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
				name: 'Secret Web Performance Metric No One Would Tell You',
				description: 'Suman Ghosh',
				start: '10:45AM',
				end: '11:20AM',
				speaker: [
					{
						name: 'Suman Ghosh',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699371630/devfest23/speakers/dmg9xzbleq4ojo4kgjf0.webp',
						company: 'CRED',
						position: 'Frontend Mafia',
						description: 'Suman is a Frontend Mafia at CRED. Previously worked as a Software Engineer at Navi and an MTS intern at GeeksforGeeks. Contributed as a Mentor at Google Code In 2019 in Tensorflow org. Have mentored across 1000+ students over various platforms.',
						tags: [''],
						socials: {
							twitter: 'https://twitter.com/sumanghosts',
							linkedin: 'https://linkedin.com/in/ghoshsuman0129',
							github: 'https://github.com/ghoshsuman845'
						}
					}
				]
			},
			{
				name: 'The unfair advantage of PaLM LLM versatility for Developers and Businesses',
				description: 'S. K. Roshan',
				start: '11:25AM',
				end: '12:00PM',
				speaker: [
					{
						name: 'S. K. Roshan',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699420800/devfest23/speakers/l7s9dfwr6oc4lnl8bjj7.webp',
						company: 'Veloit AI',
						position: 'Founder',
						description: 'Roshan is a serial entrepreneur who builds innovative solutions and has been the founder and technical lead at multiple startups and leading them to success.',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: 'https://linkedin.com/in/skroshan',
							website: ''
						}
					}
				]
			},
			{
				name: "Using Jetpack's Credential Manager API for safer and simpler sign-in",
				description: 'Priya Sindkar',
				start: '12:00PM',
				end: '12:35PM',
				speaker: [
					{
						name: 'Priya Sindkar',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699371784/devfest23/speakers/nkxgag6jxtqg7yqk6wyb.webp',
						company: 'Novumlogic Technologies',
						position: 'Senior Android Developer',
						description: 'Priya is a Sr. Android Developer with 8+ years of experience in mobile app development. She is in love with Kotlin and is passionate about building android apps. She believes in neat code and a clean architecture. She is a technical blogger, a public speaker, and holds a passion for the Android community.',
						tags: [''],
						socials: {
							twitter: 'https://twitter.com/SindkarP',
							linkedin: 'https://www.linkedin.com/in/sindkarp'
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
						socials: {}
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
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699420330/devfest23/speakers/qo9rr2qjzdebyps8nhfs.webp',
						company: 'Lollypop Design Studio',
						position: 'UX Designer',
						description: 'Muthulakshmi works as an UX designer at Lollypop design studio. She is the author of the book "UX Redefined" and she hosts a podcast called, "Pagecraft". She also mentors aspiring UX and UI designers.',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: 'https://linkedin.com/in/mmuthulakshmi',
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
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699371942/devfest23/speakers/rabloutqxpdpsydzczjg.webp',
						company: 'FlutterFlow',
						position: 'Enterprise Flutter Developer',
						description: 'Ayush is an early adopter of Flutter, a community contributor, and a writer. He is currently helping Enterprises adopt Flutter and achieve customer delight. He can go on and on about startups, products, and the amazing impact that stories and good storytellers have on people.',
						tags: ['GDE'],
						socials: {
							twitter: 'https://twitter.com/ayushshekhar17',
							linkedin: 'https://www.linkedin.com/in/ayushshekhar',
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
						socials: {}
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
						socials: {}
					}
				]
			},
			{
				name: "Closing remarks",
				description: 'Prof. Ashok Jhunjhunwala',
				start: '3:55PM',
				end: '4:30PM',
				speaker: [
					{
						name: 'Prof. Ashok Jhunjhunwala',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1700913796/devfest23/speakers/ashok_pkpo6z.jpg',
						company: 'IITM Research Park & IITM Incubation Cell',
						position: 'President',
						description: '',
						tags: ['Ecosystem Partner'],
						socials: {}
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
						socials: {}
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
						socials: {}
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
				name: 'Networking',
				description: null,
				start: '8:00AM',
				end: '9:30AM',
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
				name: '-',
				description: '-',
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
						socials: {}
					}
				]
			},
			{
				name: '-',
				description: '-',
				start: '9:45AM',
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
				name: '-',
				description: '-',
				start: '10:15AM',
				end: '10:30AM',
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
				name: 'Break',
				description: null,
				start: '10:30AM',
				end: '10:45AM',
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
				name: 'Beyond Loading Bars: Bridging Cloud Storage Buckets and CDNs for Optimized Asset Delivery',
				description: 'Vivek Dhayalan',
				start: '10:45AM',
				end: '11:20AM',
				speaker: [
					{
						name: 'Vivek Dhayalan',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699372073/devfest23/speakers/w0ihgneiwam5cjre8ifw.webp',
						company: 'TechConative',
						position: 'Founder',
						description: 'Vivek is hands-on techno-manager cum founder of TechConative with 16 years of experience.',
						tags: [''],
						socials: {
							twitter: 'https://twitter.com/dvvivek',
							linkedin: 'https://www.linkedin.com/in/vivek-dhayalan-1084211b',
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
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699373867/devfest23/speakers/byebiwehmunjzt2e9369.webp',
						company: 'One2N',
						position: 'Founder',
						description: 'Jaideep is one of the co-founders of One2N, a boutique software consulting company. Worked for 10+ years in startups and SMEs with focus of converting business requirements to technology. Part of Infrastructure and SRE team enabling product teams to ship faster and often across cloud and private data-centres. Overall, I would summarize have evolved from buzzword driven development to Impact driven development (in terms of cost, time and culture).',
						tags: [''],
						socials: {
							twitter: 'https://twitter.com/jdk2588',
							linkedin: 'https://www.linkedin.com/in/jdk2588',
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
						socials: {}
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
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699374800/devfest23/speakers/vdfcfmd2nrw5qlffivxv.webp',
						company: 'Colgate-Palmolive',
						position: 'Senior Data Scientist',
						description: 'Google Developer Expert in ML, GitHub Star, Neo4j Ninja, Gartner Data & Analytics Ambassador, 40 Under 40 Data Scientist',
						tags: ['GDE'],
						socials: {
							twitter: 'https://twitter.com/_bhaveshbhatt',
							linkedin: 'https://www.linkedin.com/in/bhattbhavesh91',
							website: ''
						}
					}
				]
			},
			{
				name: 'Google Cloud Vertex AI and Svelte Kit: Vertex Summarizer',
				description: 'Bhaarat Krishnan J',
				start: '2:40PM',
				end: '4:10PM',
				speaker: [
					{
						name: 'Bhaarat Krishnan J',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699374351/devfest23/speakers/ycsva1iu5trpng94qyhd.webp',
						company: 'Easwari Engineering College',
						position: 'Student',
						description: 'Bhaarat is a Full Stack Developer, GFG EEC Student Chapter Leader, and Mobile App Facilitator at GDSC EEC. He is also a core team member of Code Vipassana and an Azure Cloud Practitioner. Additionally, he serves as the VP at EEC TECH FORUM and Treasurer at CSI EEC. His passion is advancing technology and fostering community growth.',
						tags: ['Community Partner', 'Code Vipassana'],
						socials: {
							twitter: '',
							linkedin: 'https://www.linkedin.com/in/bhaarat-krishnan',
							website: ''
						}
					}
				]
			},
			{
				name: '-',
				description: null,
				start: '4:10PM',
				end: '5:30PM',
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
						socials: {}
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
				name: 'Networking',
				description: null,
				start: '8:00AM',
				end: '9:30AM',
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
				name: '-',
				description: '-',
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
						socials: {}
					}
				]
			},
			{
				name: '-',
				description: '-',
				start: '9:45AM',
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
				name: '-',
				description: '-',
				start: '10:15AM',
				end: '10:30AM',
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
				name: 'Break',
				description: null,
				start: '10:30AM',
				end: '10:45AM',
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
				name: 'pAIr programming - Facts & Myths in the era of AI',
				description: 'Kalarani Lakshmanan',
				start: '10:45AM',
				end: '11:20AM',
				speaker: [
					{
						name: 'Kalarani Lakshmanan',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699374510/devfest23/speakers/opzsjqmuzw4f2eghncd9.webp',
						company: 'Thoughtworks',
						position: 'Lead Application Developer',
						description: 'Kalarani plays the role of the Lead Consultant at Thoughtworks Chennai, where she brings her extensive 15-year experience to the forefront. Throughout her career, she has played various roles, including Developer, Tech Lead, Office Tech Principal and Engineering Director, across diverse domains such as Retail, Health Care, and Event Management. As a technologist, she is always on the lookout for tech solutions around her. Beyond her technical expertise, Kalarani\'s passion for Tamil drives her relentless efforts to merge Technology and Tamil. Her contributions to the field have earned her recognition as a Working Women Achiever.',
						tags: [''],
						socials: {
							twitter: 'https://twitter.com/lkalarani',
							linkedin: 'https://www.linkedin.com/in/kalarani-lakshmanan',
							website: ''
						}
					}
				]
			},
			{
				name: "Pixels to Perfection: Building the Future of Visual Applications by Supercharging Generative AI featuring FILM,  Latent Consistency Models (LCMs), and Beyond using OpenVINO™",
				description: 'Anisha Udayakumar',
				start: '11:25PM',
				end: '12:40PM',
				speaker: [
					{
						name: 'Anisha Udayakumar',
						image: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699374676/devfest23/speakers/yystse3jteccsx63dbah.webp',
						company: 'Intel',
						position: 'AI Software Evangelist',
						description: 'Anisha is an AI Software Evangelist at Intel, with a focus on the OpenVINO™ toolkit. In her prior role as an Innovation Consultant at a notable Indian IT service and consulting firm, she guided numerous business leaders on leveraging emerging technologies for future business ventures. She has a rich history of exploring next-gen technologies like AI, Extended Reality, and 5G, to devise innovative solutions addressing business challenges. Particularly drawn to the visual, Anisha has a knack for crafting computer vision-based solutions and proof of concepts. Her recent projects include delivering vision-based algorithmic solutions that significantly contributed to a global retail client’s sustainability objective. Now at Intel, Anisha’s mission is to enrich the developer community by showcasing the potential of OpenVINO in enhancing their AI journey. She thrives on engaging with developers, fostering a deeper understanding and utilization of OpenVINO toolkit to ignite novel AI solutions. Anisha is a lifelong learner and an innovator, always eager to explore and share the transformative power of technology with the developer community.',
						tags: [''],
						socials: {
							twitter: '',
							linkedin: 'https://www.linkedin.com/in/anisha-uday',
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
						socials: {}
					}
				]
			},
			{
				name: '-',
				description: '-',
				start: '2:00PM',
				end: '2:35PM',
				speaker: [
					{
						name: '',
						image: '',
						company: '',
						position: '',
						description: '',
						tags: [],
						socials: {}
					}
				]
			},
			{
				name: 'WTM Pitchathon',
				description: null,
				start: '2:40PM',
				end: '4:20PM',
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
				name: '-',
				description: null,
				start: '4:20PM',
				end: '5:30PM',
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
						socials: {}
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
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700844794/devfest/rezoomex_v2iv8t.webp',
		company: 'Rezoomex',
		website: 'https://rezoomex.com/'
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700844794/devfest/cloud_native_ipehy5.webp',
		company: 'Cloud Native Computing Foundation',
		website: 'https://www.cncf.io/'
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700844794/devfest/Sagent_pmouwy.webp',
		company: 'Sagent',
		website: 'https://sagent.com/'
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1701374478/devfest/Cyces_3_kner8z.png',
		company: 'Cyces',
		website: 'https://cyces.co/'
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700846057/devfest/TechConative_1_ylpkhl.webp',
		company: 'TechConative',
		website: 'https://techconative.com/	'
	}
];

// logo size 148 x 58
export const partners: Sponsors[] = [
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1701083528/devfest/Google_For_Startups_1_cfzjiw.png',
		company: 'Google For Startups',
		website: 'https://startup.google.com/'
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1701083527/devfest/IITMR_etjpbc.png',
		company: 'IITM Research Park',
		website: 'https://respark.iitm.ac.in/'
	},
	{
		logo: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699291964/devfest23/logos/cnku4jieszvr9nazvfev.webp',
		company: 'Konfhub',
		website: 'https://konfhub.com/'
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1701083532/devfest/SHEROES_y8ilpw.png',
		company: 'SHEROES',
		website: 'https://sheroes.com/'
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1701083530/devfest/Mahila_Money_r2bumk.png',
		company: 'Mahila Money',
		website: 'https://mahila.money/'
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1701080204/devfest/Github_g2yt7p.webp',
		company: 'Github',
		website: 'https://www.github.com/'
	},
	{
		logo: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699292249/devfest23/logos/tlxjery5yfkowizsxiwu.webp',
		company: 'Jetbrains',
		website: 'https://jetbrains.com/'
	},
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
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700032279/Frame_10_wbpv56.png',
		company: 'GDSC Dr.MRG University',
		website: 'https://gdsc.community.dev/dr-mgr-educational-and-research-institute-chennai/'
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700033289/Frame_11_hzfqug.png',
		company: 'GDSC-SIST',
		website: 'https://gdsc.community.dev/sathyabama-institute-of-science-and-technology-chennai/'
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700036523/Frame_10_1_co5znu.png',
		company: 'GDSC-SRMRMP',
		website: 'https://gdsc.community.dev/srm-institute-of-science-and-technology-ramapuram-chennai/'
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700037394/Frame_13_4_y1ck35.png',
		company: 'GDSC-SEC',
		website: 'https://gdsc.community.dev/sri-sairam-engineering-college-chennai/'
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700566653/Frame_11_4_spgh6m.png',
		company: 'GDSC-Amirta',
		website: 'https://gdsc.community.dev/amrita-vishwa-vidyapeetham-chennai-campus-chennai/'
	},
	{
		logo: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1701243881/devfest23/logos/cv_zvrffx.png',
		company: 'Code-Vipasana',
		website: 'https://www.linkedin.com/company/code-vipassana/?originalSubdomain=in'
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700034957/Frame_12_jvxi4u.png',
		company: 'Flutter Conf India',
		website: 'https://flutterconf.in/'
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700036304/Frame_13_3_zjbr90.png',
		company: 'SingularityU Chennai',
		website: 'https://www.linkedin.com/company/singularity-university-chennai-chapter/'
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700037655/Frame_13_5_pzuavl.png',
		company: 'Web3Chennai',
		website: 'https://twitter.com/web3chennai?lang=en'
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700037873/Frame_13_6_iahiz3.png',
		company: 'Social Winter of Code',
		website: 'https://www.linkedin.com/company/socialwinterofcode/'
	},
	{
		logo: 'https://res.cloudinary.com/ddnnw8qn5/image/upload/v1701249232/devfest23/logos/cnc_rc8me6.png',
		company: 'Cloud Native Chennai',
		website: 'https://community.cncf.io/chennai/'
	},
	{
		logo: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1701084062/devfest/AZ_Conf_kroxfk.png',
		company: 'Azure Conf',
		website: 'https://azconf.dev/'
	}
];
