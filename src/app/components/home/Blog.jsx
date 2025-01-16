import Link from "next/link";

const blogs = [
	{
		title: "5 Ways Technology is Revolutionizing Clinic Management in India",
		description:
			"Discover how advancements in technology, like AI and automation, are transforming clinic operations, improving efficiency, and enhancing patient care.",
		image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*kcU_kcYLnpMD33l-8DxYLg.jpeg",
		link: "https://medium.com/sigmaheal/5-ways-technology-is-revolutionizing-clinic-management-in-india-5f5983611bb6",
	},
	{
		title: "Top Challenges Faced by Clinics and How to Overcome Them",
		description:
			"Explore the common operational and administrative hurdles clinics face and actionable solutions to streamline processes and enhance patient experience.",
		image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*HITzE4v-I00FVsFDsSA-Sg.jpeg",
		link: "https://medium.com/sigmaheal/overcoming-the-challenges-of-traditional-clinic-management-fbeb0d2e1998",
	},
	{
		title: "Why Automating Patient Records is the Future of Healthcare",
		description:
			"Learn why digitizing and automating patient data is crucial for better healthcare delivery, reduced errors, and improved clinic management.",
		image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*2ZZmqLemImlZAjACZXMAxA.jpeg",
		link: "https://medium.com/sigmaheal/why-automating-patient-records-is-the-future-of-healthcare-3ef2a5d91b06",
	},
];

const Blog = () => {
	return (
		<div
			id="blog"
			className="py-20 bg-gray-50 dark:bg-gray-900"
		>
			<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
				<div className="mb-12 text-center">
					<h2 className="text-3xl font-bold md:text-4xl dark:text-white">
						Latest Insights from Sigmaheal
					</h2>
					<p className="mt-4 lg:mx-auto lg:w-8/12 text-gray-600 dark:text-gray-400">
						Stay informed about the latest
						innovations and trends in clinic
						management and healthcare
						technology.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{blogs.map((blog, index) => (
						<Link
							href={blog.link}
							key={index}
							className="group relative p-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-gradient-to-br dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-300 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:border-gray-200 dark:hover:border-gray-600"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="relative overflow-hidden rounded-xl">
								<img
									src={blog.image}
									alt={blog.title}
									loading="lazy"
									width="1000"
									height="667"
									className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
								/>
							</div>
							<div className="mt-6">
								<h3 className="text-xl font-semibold dark:text-white">
									{blog.title}
								</h3>
								<p className="mt-4 text-gray-600 dark:text-gray-400">
									{blog.description}
								</p>
								<p className="mt-4 inline-block text-indigo-600 dark:text-blue-400 group-hover:underline">
									Read more
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Blog;
