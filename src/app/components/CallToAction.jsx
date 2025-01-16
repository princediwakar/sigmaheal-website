"use client";
import { useState } from "react";
import ContactForm from "./ContactForm";

const CallToAction = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleOpenDialog = () => {
		setIsDialogOpen(true);
	};

	const handleCloseDialog = () => {
		setIsDialogOpen(false);
	};

	return (
		<section
			id="call-to-action"
			className="py-20 bg-gradient-to-br from-teal-500 to-indigo-400 dark:from-teal-800 dark:to-indigo-700 text-white relative"
		>
			<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div className="text-center md:text-left md:max-w-lg">
						<h2 className="text-3xl font-extrabold md:text-4xl leading-tight md:leading-snug">
							Take the First Step to Simplify Clinic Your Operations.
						</h2>
						<p className="mt-6 text-lg text-gray-200">
							Unlock the potential of your
							clinic management. With
							Sigmaheal’s intuitive tools,
							improve patient care, enhance
							operations, and streamline your
							workflow effortlessly.
						</p>
					</div>
					<div className="mt-8 md:mt-0 flex justify-center md:justify-end">
						<button
							onClick={handleOpenDialog}
							className="inline-block px-8 py-4 bg-white text-teal-600 font-bold rounded-full transition duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg"
						>
							Contact Us Now
						</button>
					</div>
				</div>
			</div>

			{/* Dialog */}
			{isDialogOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg p-6 max-w-sm w-full relative">
						<button
							onClick={handleCloseDialog}
							className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
						<ContactForm />
					</div>
				</div>
			)}
		</section>
	);
};

export default CallToAction;
