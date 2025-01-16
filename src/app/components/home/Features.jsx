import React from "react";
import {
	FaCalendarAlt,
	FaFileMedical,
	FaUsers,
	FaCashRegister,
	FaClipboardList,
	FaChartPie,
} from "react-icons/fa";

const featuresData = [
	{
		icon: (
			<FaCalendarAlt className="text-indigo-600 w-8 h-8 mb-4" />
		),
		title: "Appointment Scheduling",
		description:
			"Effortlessly manage appointments with an intuitive scheduling system for doctors and patients.",
		gradient: "from-indigo-50 via-purple-50 to-pink-50",
	},
	{
		icon: (
			<FaFileMedical className="text-green-600 w-8 h-8 mb-4" />
		),
		title: "Electronic Medical Records",
		description:
			"Securely store and access patient records, prescriptions, and treatment histories.",
		gradient: "from-green-50 via-teal-50 to-cyan-50",
	},
	{
		icon: (
			<FaUsers className="text-yellow-600 w-8 h-8 mb-4" />
		),
		title: "Patient Management",
		description:
			"Streamline patient onboarding, follow-ups, and communication all in one place.",
		gradient: "from-yellow-50 via-orange-50 to-red-50",
	},
	{
		icon: (
			<FaCashRegister className="text-blue-600 w-8 h-8 mb-4" />
		),
		title: "Billing & Payments",
		description:
			"Automate invoicing, track payments, and manage financial records effortlessly.",
		gradient: "from-blue-50 via-teal-50 to-cyan-50",
	},
	{
		icon: (
			<FaClipboardList className="text-teal-600 w-8 h-8 mb-4" />
		),
		title: "Task Automation",
		description:
			"Reduce manual workloads by automating repetitive tasks like reminders and follow-ups.",
		gradient: "from-teal-50 via-cyan-50 to-blue-50",
	},
	{
		icon: (
			<FaChartPie className="text-purple-600 w-8 h-8 mb-4" />
		),
		title: "Analytics & Insights",
		description:
			"Gain valuable insights with advanced reports on appointments, revenue, and operational efficiency.",
		gradient: "from-purple-50 via-pink-50 to-red-50",
	},
];

const Features = () => {
	return (
		<div id="features" className="py-20">
			<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
				<div className="md:w-2/3 lg:w-1/2 text-center mx-auto">
					<h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-4xl">
						Empower Your Clinic with Smart
						Management Tools
					</h2>
					<p className="mt-4 text-gray-700 dark:text-gray-300">
						Sigmaheal offers a comprehensive
						suite of features tailored to
						streamline clinic operations,
						enhance patient satisfaction, and
						boost productivity. Explore our key
						capabilities designed to make
						healthcare management effortless.
					</p>
				</div>
				<div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{featuresData.map((feature, index) => (
						<div
							key={index}
							className={`relative p-8 border border-gray-100 dark:border-gray-700 rounded-3xl bg-gradient-to-br ${feature.gradient} dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-300 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:border-gray-200 dark:hover:border-gray-600`}
							style={{ minHeight: "250px" }} // Reserve space to avoid layout shift
						>
							<div className="w-8 h-8">
								{feature.icon}
							</div>
							<h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">
								{feature.title}
							</h3>
							<p className="mt-4 text-sm">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Features;
