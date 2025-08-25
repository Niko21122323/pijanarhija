import Image from "next/image";
import aboutImage from "../public/assets/about-image.webp";

interface AboutData {
	id: number;
	title: string;
	text: string;
}
const aboutData: AboutData[] = [
	{
		id: 1,
		title: "Што е Пијанархија?",
		text: "Пијанархија е македонска игра со карти за пиење инспирирана од локалните стереотипи кои ги среќаваме во нашето секојдневие.",
	},
	{
		id: 2,
		title: "Приказната",
		text: "Добредојде во држава водена од алкохол, галама и хумор. Премиерот е исчезнат, законите не важат, а сите имаат теорија за се. Бабата се кара во автобус, гасерот лета со 150 км/h а сељакот ти пушта уште една фора.",
	},
	{
		id: 3,
		title: "Твојата Мисија",
		text: "Во овој хаос, ти и твоето друштво мора да ги преживеете единствените закони кои останаа да важат, а тоа се законите на народот и луѓето. Избори се до крај со пијачка во рака, карти на маса, и многу мноогу смеење",
	},
];

const AboutSection = () => {
	return (
		<section className="sm:py-16 md:py-28 xl:py-32">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="grid lg:grid-cols-2 xl:grid-cols-11 gap-[67px] lg:gap-2 items-center">
					<div className="xl:col-span-5">
						<Image src={aboutImage} alt="deck of cards" />
					</div>
					<div className="xl:col-span-6 flex flex-col gap-6 xl:gap-8">
						{aboutData.map((data: AboutData) => (
							<div key={data.id} className="">
								<h3 className="text-dark text-4xl xl:text-[52px] uppercase pb-3">
									{data.title}
								</h3>
								<p className="text-[#333333]">{data.text}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
