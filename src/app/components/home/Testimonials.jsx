const testimonials = [
	{
		company: "Sree Clinic, Bengaluru",
		person: "Dr. Suresh B",
		designation: "Founder",
		project: "General Clinic",
		testimonial:
			"Before Sigmaheal, we struggled with managing patient appointments and medical records. Now, everything is automated, and patient check-ins are smoother than ever!",
	},
	{
		company: "HealthCare Solutions, Pune",
		person: "Dr. Meera Joshi",
		designation: "Medical Director",
		project: "Multi-Specialty Clinic",
		testimonial:
			"Our clinic had no central system for managing patient treatment histories. Sigmaheal brought all our data under one roof, making it easier to track patient progress and improve care.",
	},
	{
		company: "MediCare Center, Delhi",
		person: "Dr. Amit Gupta",
		designation: "Chief Medical Officer",
		project: "Urban Healthcare Facility",
		testimonial:
			"Tracking patient flow and appointments used to be a headache. Sigmaheal’s scheduling system and real-time updates have transformed how we manage daily operations.",
	},
	{
		company: "Star Clinic, Mumbai",
		person: "Dr. Priya Mehta",
		designation: "Senior Consultant",
		project: "Dental Clinic",
		testimonial:
			"We had too much paperwork and couldn’t easily retrieve patient histories. Sigmaheal digitized everything, reducing paperwork and making patient management a breeze.",
	},
	{
		company: "MaxCare Health, Bengaluru",
		person: "Dr. Vikas Jain",
		designation: "Founder & CEO",
		project: "Multi-location Clinic Network",
		testimonial:
			"Managing multiple clinics across cities was chaotic. Sigmaheal’s centralized system gives us real-time control over all locations, and their support team is always ready to assist.",
	},
	{
		company: "Dr. Singh’s Family Clinic, Chandigarh",
		person: "Dr. Rajesh Singh",
		designation: "Lead Physician",
		project: "Family Health Center",
		testimonial:
			"We spent hours on manual invoicing and patient tracking. With Sigmaheal’s automated invoicing system and patient tracking, we’ve saved so much time and effort.",
	},
];

const Testimonials = () => {
	return (
		<div
			id="testimonials"
			className="py-20 bg-gray-50 dark:bg-gray-900"
		>
			<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
				<div className="mb-12 text-center">
					<h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
						Hear from our customers directly
					</h2>
					<p className="mt-4 text-gray-600 dark:text-gray-400">
						See how Sigmaheal has solved real
						challenges for clinics across India.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{testimonials.map(
						(testimonial, index) => (
							<div
								key={index}
								className={`relative p-8 border border-gray-100 dark:border-gray-700 rounded-3xl bg-gradient-to-br dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-300 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:border-gray-200 dark:hover:border-gray-600`}
								style={{
									minHeight: "250px",
								}} // Reserve space to avoid layout shift
							>
								<div className="flex items-center mb-6">
									<div className="">
										<p className="text-lg font-medium text-gray-800 dark:text-white">
											{
												testimonial.person
											}
										</p>
										<p className="text-sm text-gray-600 dark:text-gray-400">
											{
												testimonial.designation
											}{" "}
											-{" "}
											{
												testimonial.company
											}
										</p>
									</div>
								</div>
								<p className="text-gray-700 italic dark:text-gray-300">
									“
									{
										testimonial.testimonial
									}
									”
								</p>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
