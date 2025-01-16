import React from 'react';

const projects = [
  {
    company: 'Nagarjuna Construction Company',
    project: 'AIIMS BILASPUR, HP',
    image: './images/testimonials/NCC.jpg',
    description: 'A prestigious healthcare project located in the serene hills of Himachal Pradesh.',
    gradient: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900',
  },
  {
    company: 'Dongre PMC',
    project: 'Saifee Burhani Upliftment Trust, Mumbai',
    image: './images/testimonials/SBUT.jpg',
    description: 'Urban renewal project in the city of Mumbai, focusing on sustainable development.',
    gradient: 'bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900',
  },
  {
    company: 'DNR Group, Bengaluru',
    project: 'Residential Complex',
    image: './images/testimonials/DNR.jpg',
    description: 'A modern residential complex offering luxurious amenities in the heart of Bengaluru.',
    gradient: 'bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900',
  },
  {
    company: 'AMS Project Consultants, Pune',
    project: 'Commercial Building',
    image: './images/testimonials/AMS.jpg',
    description: 'State-of-the-art commercial building designed with cutting-edge architecture.',
    gradient: 'bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900',
  },
  {
    company: 'Pooja Crafted Homes, Hyderabad',
    project: 'Greenfield Residential Complex',
    image: './images/testimonials/POOJA.jpg',
    description: 'Eco-friendly residential development focused on sustainability and green living.',
    gradient: 'bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900',
  },
  {
    company: 'Zaurya RealTech Pvt Ltd, Bangalore',
    project: 'Residential Apartment',
    image: './images/testimonials/ZAURYA.jpg',
    description: 'High-rise residential apartments offering panoramic views and modern facilities.',
    gradient: 'bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900',
  },
];

const Showcase = () => {
  return (
    <div id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl dark:text-white">Successful Projects</h2>
          <p className="mt-4 lg:mx-auto lg:w-8/12 text-gray-600 dark:text-gray-400">
            Explore our diverse range of projects and see how we’ve made a difference with our solutions.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-none ${project.gradient}`}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={`Project by ${project.company}`}
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold dark:text-white">
                  {project.project}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {project.company}
                </p>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
