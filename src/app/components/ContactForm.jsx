"use client"
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "../firebase/config";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "", // Added phone field
		company: "", // Added company field
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			// Use addDoc to add data to Firestore collection
			await addDoc(collection(db, "inquiries"), formData);
			setSuccess(true);
			setFormData({
				name: "",
				email: "",
				phone: "",
				company: "",
				message: "",
			});
		} catch (err) {
			console.error("Error submitting form: ", err);
			setError("Error submitting form. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="max-w-xl mx-auto px-6">
			<form className="bg-white rounded-lg" onSubmit={handleSubmit}>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="name"
					>
						Name
					</label>
					<input
						type="text"
						name="name"
						id="name"
						value={formData.name}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="company"
					>
						Company
					</label>
					<input
						type="text"
						name="company"
						id="company"
						value={formData.company}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
						required
					/>
				</div>

				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="phone"
					>
						Phone
					</label>
					<input
						type="tel"
						name="phone"
						id="phone"
						value={formData.phone}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="email"
					>
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						value={formData.email}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="message"
					>
						Message
					</label>
					<textarea
						name="message"
						id="message"
						value={formData.message}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
						required
						rows="4"
					></textarea>
				</div>
				{error && <p className="text-red-500">{error}</p>}
				{success && (
					<p className="text-green-500">Message sent successfully!</p>
				)}
				<div className="flex justify-center">
					<button
						type="submit"
						className={`bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition duration-300 ${
							loading ? "opacity-50 cursor-not-allowed" : ""
						}`}
						disabled={loading}
					>
						{loading ? "Sending..." : "Send Message"}
					</button>
				</div>
			</form>
		</section>
	);
};

export default ContactForm;
