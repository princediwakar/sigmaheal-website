import React from "react";

// Sample data for demonstration
const productsData = [
	{
		title: "Supersite PreFab",
		brand: "Supersite",
		summary:
			"Boost efficiency in prefabricated construction with comprehensive tools tailored to material tracking, scheduling, and quality control.",
		image: "https://dummyimage.com/600x400", // Replace with actual image URLs
		appLink:"https://play.google.com/store/apps/details?id=app.supersite.superfab&hl=en", // Replace with actual app link
		webAppLink: "https://superfab.supersite.app", // Replace with actual web app link
	},
	{
		title: "Supersite Real Estate",
		brand: "Supersite",
		summary:
			"Streamline real estate project tasks, monitor progress, manage budgets, and improve client relationships all in one place.",
		image: "https://dummyimage.com/600x400", // Replace with actual image URLs
		appLink: "https://play.google.com/store/apps/details?id=app.supersite.supersite&hl=en", // Replace with actual app link
		// webAppLink: "", // Replace with actual web app link
	},
	{
		title: "Supersite Infra",
		brand: "Supersite",
		summary:
			"Optimize infrastructure projects with real-time progress tracking, risk mitigation, and effective resource management.",
		image: "https://dummyimage.com/600x400", // Replace with actual image URLs
		appLink: "#", // Replace with actual app link
		webAppLink: "#", // Replace with actual web app link
	},
];

const Product = () => {
	return (
		<div className="bg-white py-20 px-6 sm:px-12 lg:px-24">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
					Our Solutions
				</h2>
				{productsData.map((product, index) => (
					<div
						key={index}
						className="flex flex-col lg:flex-row items-center justify-between my-12 py-10 px-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
					>
						<img
							alt={product.title}
							className="lg:w-1/2 w-full object-cover object-center rounded-lg shadow-sm"
							src={product.image}
						/>
						<div className="lg:w-1/2 w-full lg:pl-12 mt-8 lg:mt-0 text-gray-800">
							{/* <h3 className="text-sm font-semibold text-blue-500 tracking-wide uppercase">
								{product.brand}
							</h3> */}
							<h1 className="text-2xl font-semibold text-gray-900 mt-2">
								{product.title}
							</h1>
							<p className="mt-4 text-gray-600 leading-relaxed">
								{product.summary}
							</p>
							<div className="mt-6 flex space-x-4">
								<a
									href={product.appLink}
									className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium transition duration-300 hover:bg-blue-700"
								>
									Download App
								</a>
								<a
									href={
										product.webAppLink
									}
									className="inline-block bg-green-600 text-white py-2 px-4 rounded-full text-sm font-medium transition duration-300 hover:bg-green-700"
								>
									Visit Web App
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Product;
