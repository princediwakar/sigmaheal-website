import {
	FaRegClock,
	FaUserFriends,
	FaRegCheckCircle,
	FaLaptopMedical,
	FaFileMedicalAlt,
	FaShieldAlt,
} from "react-icons/fa";

const benefitsData = [
	{
		icon: (
			<FaRegClock className="text-indigo-600 w-12 h-12 mb-4" />
		),
		title: "Time Efficiency",
		description:
			"Save time by automating appointment scheduling, patient records management, and follow-ups.",
		gradientColors:
			"from-indigo-50 via-purple-50 to-pink-50",
	},
	{
		icon: (
			<FaUserFriends className="text-green-600 w-12 h-12 mb-4" />
		),
		title: "Improved Patient Experience",
		description:
			"Enhance patient satisfaction with streamlined processes, personalized care, and real-time updates.",
		gradientColors:
			"from-green-50 via-teal-50 to-cyan-50",
	},
	{
		icon: (
			<FaRegCheckCircle className="text-yellow-600 w-12 h-12 mb-4" />
		),
		title: "Error Reduction",
		description:
			"Minimize errors with automated documentation, prescription generation, and patient reminders.",
		gradientColors:
			"from-yellow-50 via-orange-50 to-red-50",
	},
	{
		icon: (
			<FaLaptopMedical className="text-blue-600 w-12 h-12 mb-4" />
		),
		title: "Centralized Operations",
		description:
			"Access all clinic operations in one place—from billing and appointments to analytics and reporting.",
		gradientColors:
			"from-blue-50 via-teal-50 to-cyan-50",
	},
	{
		icon: (
			<FaFileMedicalAlt className="text-teal-600 w-12 h-12 mb-4" />
		),
		title: "Seamless Record Management",
		description:
			"Securely manage patient data, medical records, and treatment plans with ease.",
		gradientColors:
			"from-teal-50 via-cyan-50 to-blue-50",
	},
	{
		icon: (
			<FaShieldAlt className="text-purple-600 w-12 h-12 mb-4" />
		),
		title: "Advanced Security",
		description:
			"Ensure data security and compliance with the latest encryption and protection standards.",
		gradientColors:
			"from-purple-50 via-pink-50 to-red-50",
	},
];

const Benefits = () => {
	return (
		<div id="benefits" className="py-20">
			<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
				<div className="mb-16 text-center">
					<h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
						Why Choose Sigmaheal?
					</h2>
					<p className="mt-4 text-gray-600 dark:text-gray-400">
						Explore the key benefits of
						Sigmaheal and see how it transforms
						your clinic's workflow and patient
						care.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{benefitsData.map((benefit, index) => (
						<div
							key={index}
							className={`relative p-8 border border-gray-100 dark:border-gray-700 rounded-3xl bg-gradient-to-br ${benefit.gradientColors} dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-300 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:border-gray-200 dark:hover:border-gray-600`}
							style={{ minHeight: "250px" }}
						>
							{benefit.icon}
							<h3 className="text-lg font-semibold text-gray-800 dark:text-white">
								{benefit.title}
							</h3>
							<p className="mt-4 text-sm">
								{benefit.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Benefits;
