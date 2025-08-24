import Image from "next/image";
import heroBg from "../public/assets/hero-background.webp";
import heroImg from "../public/assets/hero-image.png";
import patternHero from "../public/assets/pattern-hero.svg";
import patternHeroMobile from "../public/assets/pattern-hero-mobile.svg";
import Button from "./Button";

const HeroSection = () => {
	return (
		<section className="relative overflow-hidden">
			<div className="relative container mx-auto px-4 lg:px-6 z-10">
				<div className="grid lg:grid-cols-12 gap-10 items-start pt-[166px]">
					<div className="col-span-6 xl:col-span-5 lg:pt-20 pb-[200px] sm:pb-[160px] lg:pb-16 xl:pb-0">
						<h1 className="text-white text-[40px] md:text-5xl xl:text-[64px] uppercase pb-5 sm:pb-6 xl:pb-8 lg:max-w-[590px]">
							Хаос, забава и хумор. спакувано во една кутија!
						</h1>
						<span className="text-base sm:text-lg xl:text-2xl text-light-300 font-medium">
							Друштвена игра за пиење, инспирана од локалните стереотипи и
							македонската култура!
						</span>
						<div className="w-fit pt-5 sm:pt-8 xl:pt-10">
							<Button text="Нарачај Сега!" link="#contact" />
						</div>
					</div>
					<div className="col-span-6 xl:col-span-7 max-lg:hidden h-full w-full">
						<Image
							src={heroImg}
							alt="image of a girl drinking bear"
							className="max-xl:h-full max-xl:w-full"
						/>
					</div>
				</div>
			</div>

			<div className="absolute bottom-0 left-0 z-20 w-full h-auto max-sm:w-[250%]">
				<Image
					src={patternHero}
					alt="icon"
					className="w-full h-auto max-lg:hidden"
				/>
				<Image
					src={patternHeroMobile}
					alt="icon"
					className="w-full h-auto lg:hidden"
				/>
			</div>
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden">
				<Image
					src={heroBg}
					alt="hero image"
					className="h-full w-full object-cover"
				/>
			</div>
		</section>
	);
};

export default HeroSection;
