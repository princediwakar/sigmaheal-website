"use client";

import { useState } from "react";
import ContactForm from "../ContactForm";
import Link from "next/link";

const HeroSection = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleOpenDialog = () => {
		setIsDialogOpen(true);
	};

	const handleCloseDialog = () => {
		setIsDialogOpen(false);
	};

	return (
		<div className="relative" id="home">
			<div
				aria-hidden="true"
				className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
			>
				<div className="blur-[106px] h-56 bg-gradient-to-br from-blue-500 to-green-400 dark:from-blue-800"></div>
				<div className="blur-[106px] h-32 bg-gradient-to-r from-yellow-400 to-orange-500 dark:to-yellow-600"></div>
			</div>
			<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
				<div className="relative pt-36 ml-auto">
					<div className="lg:w-2/3 text-center mx-auto">
						{/* Heading */}
						<h1 className="text-gray-900 dark:text-white font-bold text-4xl md:text-5xl xl:text-6xl">
							Simplify Your Clinic Operations with{" "}
							<span className="text-blue-600 dark:text-white">
								Sigmaheal
							</span>
						</h1>
						{/* Subheading */}
						<p className="mt-8 text-gray-700 dark:text-gray-300">
							Manage appointments, patient
							records, billing, and staff
							efficiently with an all-in-one
							clinic management solution.
							Sigmaheal simplifies your
							workflows, enabling you to focus
							on patient care.
						</p>
						{/* Hero Section CTAs */}
						<div className="mt-8 flex flex-wrap justify-center gap-y-4 gap-x-6">
							<button
								onClick={handleOpenDialog}
								className="relative flex h-11 w-full items-center justify-center px-10 before:absolute before:inset-0 before:rounded-full before:bg-blue-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
							>
								<span className="relative text-base font-semibold text-white">
									Contact Us
								</span>
							</button>

							{/* <Link
								href="https://calendly.com/sigmaheal"
								target="_blank"
								className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-gray-200 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
							>
								<span className="relative text-base font-semibold text-gray-900 dark:text-gray-800">
									Request a Demo
								</span>
							</Link> */}
						</div>
						{/* 3 USPs */}
						<div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
							<div className="text-left">
								<h6 className="text-lg font-semibold text-gray-700 dark:text-white">
									Streamlined Operations
								</h6>
								<p className="mt-2 text-gray-500">
									Automate administrative
									tasks effortlessly.
								</p>
							</div>
							<div className="text-left">
								<h6 className="text-lg font-semibold text-gray-700 dark:text-white">
									Patient-Centric Care
								</h6>
								<p className="mt-2 text-gray-500">
									Focus more on patients,
									not paperwork.
								</p>
							</div>
							<div className="text-left">
								<h6 className="text-lg font-semibold text-gray-700 dark:text-white">
									Data-Driven Insights
								</h6>
								<p className="mt-2 text-gray-500">
									Make informed decisions
									with real-time
									analytics.
								</p>
							</div>
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
			</div>
		</div>
	);
};

export default HeroSection;
