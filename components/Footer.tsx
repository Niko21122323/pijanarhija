import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import logo from "../public/assets/logo.svg";
import Button from "./Button";

const footerLinks = [
	{
		id: 1,
		label: "За Играта",
		link: "",
	},
	{
		id: 2,
		label: "Карактери",
		link: "",
	},
	{
		id: 3,
		label: "Како се Игра",
		link: "",
	},
	{
		id: 4,
		label: "Цена и Достава",
		link: "",
	},
	{
		id: 5,
		label: "Цена и Достава",
		link: "#contact",
	},
];

const Footer = () => {
	return (
		<footer className="bg-accent overflow-x-hidden">
			<div className="container mx-auto px-4 lg:px-6 py-16 md:py-24 lg:py-36">
				<div className="flex flex-col md:flex-row items-start md:justify-between gap-10">
					<div className="">
						<Image src={logo} alt="company logo" className="max-w-[200px]" />
						<p className="pt-4 text-white/80 max-w-[500px]">
							Бесплатна достава до врата за 1-5 работни дена. Исплатата се врши
							на рака кога ке ви стигне нарачката.
						</p>

						<div className="w-fit pt-8">
							<Button text="Нарачај Сега!" link="#contact" />
						</div>
					</div>
					<div className="flex flex-col gap-12">
						<div className="grid max-[550px]:grid-cols-1 grid-cols-3 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-6 xl:gap-x-16">
							{footerLinks.map((link) => (
								<a
									key={link.id}
									href={link.link}
									className="text-xl font-semibold text-white/80 hover:text-white transition-colors duration-300 ease-in-out"
								>
									{link.label}
								</a>
							))}
						</div>
						<div className="flex gap-4">
							<a href="#">
								<IoLogoInstagram className="text-3xl text-white/80 hover:text-white transition-colors duration-300 ease-in-out" />
							</a>
							<a href="#">
								<FaFacebook className="text-3xl text-white/80 hover:text-white transition-colors duration-300 ease-in-out" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
