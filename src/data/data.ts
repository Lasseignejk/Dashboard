interface DataProps {
    metrics?: MetricsProps[],
    users?: UsersProps[],
    tasks?: TasksProps[]
}

interface MetricsProps {
	icon: string;
	rounded: boolean;
	smallText: string;
	largeText: string;
	textMainColor: boolean;
}

interface UsersProps {
    id: number,
    name: string,
    title: string,
    country: string,
    imgSrc: string,
    rounded: boolean
}

interface TasksProps {
    id: number,
    task: string,
    state: string,
    description: string,
    assignee: number
}

const data: DataProps[] = [
	{
		metrics: [
			{
				icon: "FaEye",
				rounded: false,
				smallText: "Daily Views",
				largeText: "1,504",
				textMainColor: true,
			},
			{
				icon: "FaShoppingCart",
				rounded: false,
				smallText: "Sales",
				largeText: "80",
				textMainColor: true,
			},
			{
				icon: "FaComments",
				rounded: false,
				smallText: "Comments",
				largeText: "284",
				textMainColor: true,
			},
			{
				icon: "FaMoneyBill",
				rounded: false,
				smallText: "Earning",
				largeText: "$7,842",
				textMainColor: true,
			},
		],
	},
	{
		users: [
			{
				id: 1,
				name: "John Doe",
				title: "Software Engineer",
				country: "Japan",
				imgSrc: "https://images.unsplash.com/photo-1590419690008-905895e8fe0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
				rounded: true,
			},
			{
				id: 2,
				name: "Jane Smith",
				title: "UX Designer",
				country: "America",
				imgSrc: "https://images.unsplash.com/photo-1629246999700-1e7ad7a1ba03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=712&q=80",
				rounded: true,
			},
			{
				id: 3,
				name: "Michael Johnson",
				title: "Quality Assurance Analyst",
				country: "Spain",
				imgSrc: "https://images.unsplash.com/photo-1563889362352-b0492c224f62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
				rounded: true,
			},
			{
				id: 4,
				name: "Sarah Williams",
				title: "Technical Writer",
				country: "England",
				imgSrc: "https://images.unsplash.com/photo-1561297108-a47d55d96a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
				rounded: true,
			},
		],
	},
	{
		tasks: [
			{
				id: 1,
				task: "Code review for new feature",
				state: "In Progress",
				description:
					"Perform a comprehensive code review for a new feature implementation in the Google application.",
				assignee: 1,
			},
			{
				id: 2,
				task: "Bug triaging",
				state: "Pending",
				description:
					"Review and prioritize reported bugs in the Google search engine for further investigation and resolution.",
				assignee: 3,
			},
			{
				id: 3,
				task: "Documentation update",
				state: "Completed",
				description:
					"Update the developer documentation for Google Cloud Platform's new API functionalities and provide accurate information for developers.",
				assignee: 4,
			},
			{
				id: 4,
				task: "UI design review",
				state: "In Progress",
				description:
					"Collaborate with the design team to review and provide feedback on the user interface design of an upcoming Google product.",
				assignee: 2,
			},
			{
				id: 5,
				task: "Data analysis for ad campaign",
				state: "Pending",
				description:
					"Analyze user engagement data and metrics to measure the effectiveness of a Google Ads campaign and make data-driven recommendations for optimization.",
				assignee: 1,
			},
			{
				id: 6,
				task: "Security audit",
				state: "Completed",
				description:
					"Conduct a comprehensive security audit of Google's internal systems to identify vulnerabilities and propose necessary security measures.",
				assignee: 3,
			},
			{
				id: 7,
				task: "Performance optimization",
				state: "In Progress",
				description:
					"Identify and optimize performance bottlenecks in the Google Chrome browser to improve overall speed and user experience.",
				assignee: 1,
			},
			{
				id: 8,
				task: "Feature brainstorming session",
				state: "Scheduled",
				description:
					"Participate in a brainstorming session to generate innovative ideas for new features and enhancements in Google Workspace applications.",
				assignee: 2,
			},
			{
				id: 9,
				task: "Customer support escalation",
				state: "In Progress",
				description:
					"Investigate and resolve escalated customer support issues related to Google Cloud Platform services, ensuring customer satisfaction.",
				assignee: 4,
			},
			{
				id: 10,
				task: "API integration testing",
				state: "Pending",
				description:
					"Perform integration testing for a newly developed API to ensure seamless integration with external systems and platforms.",
				assignee: 1,
			},
			{
				id: 11,
				task: "Training session preparation",
				state: "In Progress",
				description:
					"Prepare training materials and presentations for an upcoming internal training session on Google Ads best practices.",
				assignee: 4,
			},
			{
				id: 12,
				task: "Competitive analysis",
				state: "Completed",
				description:
					"Conduct a competitive analysis of rival products and services in the market, gathering insights for Google's strategic planning and product differentiation.",
				assignee: 3,
			},
		],
	},
];

export default data