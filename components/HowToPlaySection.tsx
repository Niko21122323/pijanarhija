import Image from "next/image";
import howToPlayText from "../public/assets/how-to-play-text.svg";
import howToPlayTextMobile from "../public/assets/how-to-play-text-mobile.svg";

interface HowToPlay {
	id: number;
	number: string;
	text: string;
}

const howToPlayData: HowToPlay[] = [
	{
		id: 1,
		number: "1",
		text: "Секој треба да има пијачка пред себе. Ставете го шпилот на срединa со лицето на картите надолу.",
	},
	{
		id: 2,
		number: "2",
		text: "Прв почнува играчот кому најбрзо му се ближи роденден. Кругот се движи по насока на часовникот.",
	},
	{
		id: 3,
		number: "3",
		text: "Играчот влече карта, ја чита на глас, и ја остава со лицето нагоре одма до шпилот. Играчот го прави го напишаното на картата!",
	},
	{
		id: 4,
		number: "4",
		text: "Кога ќе се потроши шпилот, следува гласање: „Кој највеќе испи оваа партија?“. Најгласаниот е победникот. Ако има двајца — пиење на екс. Кој прв испие станува Мастер Пијанархистот!",
	},
];

const HowToPlaySection = () => {
	return (
		<section className="py-16 md:py-24 lg:py-36" id="како-се-игра">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="relative lg:w-fit">
					<h2 className="uppercase text-dark text-[40px] md:text-5xl xl:text-[60px] max-w-[383px]">
						Како се игра пијандисани?
					</h2>

					<div className="absolute max-lg:bottom-1/2 max-lg:translate-y-1/2 lg:-bottom-12 right-0 sm:right-[30%] lg:-right-6 max-[400px]:hidden">
						<Image src={howToPlayText} alt="icon" className="max-lg:hidden" />
						<Image src={howToPlayTextMobile} alt="icon" className="lg:hidden" />
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pt-10 lg:pt-20">
					{howToPlayData.map((data) => (
						<div key={data.id} className="flex items-center gap-4 lg:gap-10">
							<div className="size-20 lg:size-[90px] flex items-center flex-shrink-0 justify-center bg-accent rounded-[22px]">
								<h6 className="text-white text-4xl">{data.number}</h6>
							</div>

							<p className="text-[#333333] lg:max-w-[421px]">{data.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowToPlaySection;
