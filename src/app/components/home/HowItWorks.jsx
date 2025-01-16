import {
	FaUserPlus,
	FaTools,
	FaUsers,
	FaChartPie,
} from "react-icons/fa";

const stepsData = [
	{
		step: "01",
		icon: (
			<FaUserPlus className="text-indigo-600 w-8 h-8" />
		), // Reduce size of icon
		title: "Sign Up & Set Up",
		description:
			"Create an account, customize workflows, add team members, and integrate tools.",
	},
	{
		step: "02",
		icon: (
			<FaTools className="text-green-600 w-8 h-8" />
		), // Reduce size of icon
		title: "Streamline Your Workflow",
		description:
			"Manage appointments, patient records, and finances seamlessly with smart tools.",
	},
	{
		step: "03",
		icon: (
			<FaUsers className="text-yellow-600 w-8 h-8" />
		), // Reduce size of icon
		title: "Collaborate Effectively",
		description:
			"Enable real-time communication and sync progress updates across teams.",
	},
	{
		step: "04",
		icon: (
			<FaChartPie className="text-purple-600 w-8 h-8" />
		), // Reduce size of icon
		title: "Monitor & Optimize",
		description:
			"Use detailed reports and analytics to track performance and improve care.",
	},
];

const HowItWorks = () => {
	return (
		<div
			id="how-it-works"
			className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50"
		>
			<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
				<div className="mb-16 text-center">
					<h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
						Simple to Setup. Simple to Operate.
					</h2>
					<p className="mt-4 text-gray-600 dark:text-gray-400">
						Discover how Sigmaheal simplifies
						clinic management, step by step.
					</p>
				</div>
				<div className="relative">
					{/* Line connecting steps */}
					<div className="absolute inset-0 flex justify-center md:justify-start lg:ml-12">
						<div className="w-1 bg-indigo-300 dark:bg-indigo-700 h-full md:ml-16 transition-all duration-300 ease-in-out"></div>
					</div>
					<div className="space-y-12 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">
						{stepsData.map((step, index) => (
							<div
								key={index}
								className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
							>
								<div className="absolute -top-6 -left-6 flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900">
									{step.icon}{" "}
									{/* Center icon properly inside circle */}
								</div>
								<span className="absolute top-4 left-14 text-lg font-bold text-indigo-600 dark:text-indigo-400">
									{step.step}
								</span>
								<h3 className="mt-10 text-lg font-semibold text-gray-800 dark:text-white">
									{step.title}
								</h3>
								<p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
									{step.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
