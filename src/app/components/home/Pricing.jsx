import React from "react";

const pricingData = [
	{
		title: "Basic Plan",
		patients: "Up to 100 patients/month",
		price: "₹1,499/month",
		description:
			"Ideal for small clinics just starting out. Affordable and effective.",
		buttonLabel: "Get Started",
		backgroundColor: "bg-blue-500",
	},
	{
		title: "Standard Plan",
		patients: "101 to 500 patients/month",
		price: "₹3,499/month",
		description:
			"Perfect for growing clinics with moderate patient volume. Includes more features for scalability.",
		buttonLabel: "Learn More",
		backgroundColor: "bg-green-500",
	},
	{
		title: "Premium Plan",
		patients: "501+ patients/month",
		price: "₹6,999/month",
		description:
			"For large clinics with high patient volume. All premium features and priority support.",
		buttonLabel: "Contact Us",
		backgroundColor: "bg-purple-500",
	},
];

const PricingTeaser = () => {
	return (
		<div
			id="pricing-teaser"
			className="py-20 bg-gray-50 dark:bg-gray-900"
		>
			<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
				<div className="mb-16 text-center">
					<h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
						Flexible, Affordable Pricing 
					</h2>
					<p className="mt-4 text-gray-600 dark:text-gray-400">
						Choose the plan that fits your
						clinic’s needs. Scale your
						subscription as your patient base
						grows.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-3">
					{pricingData.map((plan, index) => (
						<div
							key={index}
							className="p-8 rounded-3xl shadow-lg transition-shadow duration-300"
						>
							<div
								className={`${plan.backgroundColor} text-white p-6 rounded-t-3xl`}
							>
								<h3 className="text-2xl font-bold">
									{plan.title}
								</h3>
								<p className="text-lg mt-2">
									{plan.patients}
								</p>
							</div>
							<div className="p-6 bg-white dark:bg-gray-800 rounded-b-3xl">
								<p className="text-xl font-semibold">
									{plan.price}
								</p>
								<p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
									{plan.description}
								</p>
								{/* <button className="mt-6 px-6 py-3 text-white bg-indigo-600 rounded-full transition-colors hover:bg-indigo-700">
									{plan.buttonLabel}
								</button> */}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PricingTeaser;
