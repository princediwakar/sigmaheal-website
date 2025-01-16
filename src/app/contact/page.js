import React from "react";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
	return (
		<div className="py-16 max-w-xl mx-auto">
			<h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
				Contact Us
			</h2>
			<p className="text-center  text-gray-700 mb-8">
				We'd love to hear from you! Please send any
				questions or inquiries about Supersite.
			</p>
			<ContactForm />
		</div>
	);
};

export default ContactUs;
