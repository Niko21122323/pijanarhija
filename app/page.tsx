import AboutSection from "@/components/AboutSection";
import CharactersSection from "@/components/CharactersSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import HowToPlaySection from "@/components/HowToPlaySection";
import InfoSection from "@/components/InfoSection";
import SponsorSection from "@/components/SponsorSection";
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
			<FaqSection />
			<SponsorSection />
		</main>
	);
}
