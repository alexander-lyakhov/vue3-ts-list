interface Page {
	title: string,
	value: string,
	description: string,
};

export const pages = [
	{
		title: 'Home',
		value: 'home',
		description: 'Vue feature list'
	},
	{
		title: 'Ex.1',
		value: 'ex1',
		description: 'Scoped slots / functional components'
	},
	{
		title: 'Ex.2',
		value: 'ex2',
		description: 'Dynamic components / Scoped slots / functional components'
	},
	{
		title: 'Ex.3',
		value: 'ex3',
		description: 'Renderless components / Dynamic components / Scoped slots / functional components'
	},
] as Pages[];

export const listTypes = [
	{
		title: 'Simple view',
		value: 'simple',
	},
	{
		title: 'Detailed view',
		value: 'detailed',
	},
	/*
	{
		title: 'Card view',
		value: 'card',
	},
	*/
];

export const	theme = [
	{title: 'FC6', value: 'fc6'},
	{title: 'Dark', value: 'dark'},
	{title: 'SD', value: 'sd'},
]
