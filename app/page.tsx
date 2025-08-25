import AboutSection from "@/components/AboutSection";
import CharactersSection from "@/components/CharactersSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import HowToPlaySection from "@/components/HowToPlaySection";
import InfoSection from "@/components/InfoSection";
import WhatYouGet from "@/components/WhatYouGet";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<CharactersSection />
			<HowToPlaySection />
			<WhatYouGet />
			<InfoSection />
			<ContactSection />
		</main>
	);
}
