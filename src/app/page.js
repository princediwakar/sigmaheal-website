
import HeroSection from "./components/home/HeroSection";
import Features from "./components/home/Features";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/home/Testimonials";
import Benefits from "./components/home/Benefits";
import Pricing from "./components/home/Pricing";
import Blog from "./components/home/Blog";
import Showcase from "./components/home/Showcase";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HowItWorks from "./components/home/HowItWorks";
// import Product from './components/home/Product';

const HomePage = () => {
	return (
		<>
			<HeroSection />
			{/* <Product /> */}
			<Features />
			<Benefits />
			<HowItWorks />
			{/* <Showcase /> */}
			<Pricing />
			<Testimonials />
			<Blog />
			<CallToAction />
		</>
	);
};

export default HomePage;
