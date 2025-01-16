"use client";

import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaFacebookF,
	FaLinkedinIn,
	FaInstagram,
	FaMedium,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 py-12">
			<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Company Info */}
					<div>
						<h3 className="text-xl font-bold text-white">
							Sigmaheal
						</h3>
						<p className="mt-4">
							Sigmaheal provides advanced
							healthcare management solutions
							to streamline clinic operations
							and enhance patient care.
							Experience seamless management
							with our comprehensive platform.
						</p>
						<div className="mt-6 flex gap-4">
							<Link
								href="https://linkedin.com/company/sigmaheal"
								className="text-gray-300 hover:text-white"
							>
								<FaLinkedinIn size={20} />
							</Link>
							<Link
								href="https://www.facebook.com/sigmaheal"
								className="text-gray-300 hover:text-white"
							>
								<FaFacebookF size={20} />
							</Link>
							<Link
								href="https://www.instagram.com/sigmaheal"
								className="text-gray-300 hover:text-white"
							>
								<FaInstagram size={20} />
							</Link>
							<Link
								href="https://blog.sigmaheal.app"
								className="text-gray-300 hover:text-white"
							>
								<FaMedium size={20} />
							</Link>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-xl font-bold text-white">
							Quick Links
						</h3>
						<ul className="mt-4 space-y-2">
							<li>
								<Link
									href="/"
									className="hover:text-indigo-400"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:text-indigo-400"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									href="https://medium.com/sigmaheal"
									className="hover:text-indigo-400"
								>
									Blog
								</Link>
							</li>
						</ul>
					</div>

					{/* Services */}
					{/* <div>
						<h3 className="text-xl font-bold text-white">
							Our Services
						</h3>
						<ul className="mt-4 space-y-2">
							<li>
								<Link
									href="/services/clinic-management"
									className="hover:text-indigo-400"
								>
									Clinic Management
								</Link>
							</li>
							<li>
								<Link
									href="/services/patient-records"
									className="hover:text-indigo-400"
								>
									Patient Records
								</Link>
							</li>
							<li>
								<Link
									href="/services/appointment-scheduling"
									className="hover:text-indigo-400"
								>
									Appointment Scheduling
								</Link>
							</li>
						</ul>
					</div> */}

					{/* Contact Information */}
					<div>
						<h3 className="text-xl font-bold text-white">
							Contact Us
						</h3>
						<div className="mt-4 flex items-center gap-4">
							<FaPhoneAlt
								className="text-indigo-500"
								size={20}
							/>
							<p>(+91) 738-8890-554</p>
						</div>
						<div className="mt-2 flex items-center gap-4">
							<FaEnvelope
								className="text-indigo-500"
								size={20}
							/>
							<p>
								<Link
									href="mailto:sigmaheal.app@gmail.com"
									className="hover:text-indigo-400"
								>
									sigmaheal.app@gmail.com
								</Link>
							</p>
						</div>
						<div className="mt-2 flex items-center gap-4">
							<FaMapMarkerAlt
								className="text-indigo-500"
								size={20}
							/>
							<p>
								Bengaluru, Karnataka, India
							</p>
						</div>
					</div>
				</div>

				<div className="mt-12 border-t border-gray-700 pt-6 text-center">
					<p className="text-gray-500 text-sm">
						&copy; {new Date().getFullYear()}{" "}
						Sigmaheal. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
