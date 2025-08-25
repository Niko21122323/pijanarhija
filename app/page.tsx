import AboutSection from "@/components/AboutSection";
import CharactersSection from "@/components/CharactersSection";
import HeroSection from "@/components/HeroSection";
import HowToPlaySection from "@/components/HowToPlaySection";
import WhatYouGet from "@/components/WhatYouGet";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<CharactersSection />
			<HowToPlaySection />
			<WhatYouGet />
			<section className=""></section>
		</main>
	);
}
