import Image from "next/image";
import howToPlayText from "../public/assets/how-to-play-text.svg";
import howToPlayTextMobile from "../public/assets/how-to-play-text-mobile.svg";
import specialCardIcon from "../public/assets/special-card.png";
import Animations from "./Animations";

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
  {
    id: 5,
    number: "5",
    text: "Ако има двајца со исто гласови се прави дуел: Пиење на Екс! Победникот ја добива титулата!",
  },
];

const HowToPlaySection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-36" id="како-се-игра">
      <div className="container mx-auto px-4 lg:px-6 max-w-[800px]">
        <div className="relative lg:w-fit">
          <Animations delay={0.3}>
            <h2 className="uppercase text-dark text-[40px] md:text-5xl xl:text-[60px] max-w-[383px]">
              Како се игра пијандисани?
            </h2>

            <div className="absolute max-lg:bottom-1/2 max-lg:translate-y-1/2 lg:-bottom-12 right-0 sm:right-[30%] lg:-right-6 max-[400px]:hidden">
              <Image src={howToPlayText} alt="icon" className="max-lg:hidden" />
              <Image
                src={howToPlayTextMobile}
                alt="icon"
                className="lg:hidden"
              />
            </div>
          </Animations>
        </div>

        <div className="grid grid-cols-1 gap-8 pt-10 lg:pt-20">
          {howToPlayData.map((data) => (
            <div key={data.id} className="flex items-center gap-4 lg:gap-6">
              <div className="size-20 lg:size-[90px] flex items-center flex-shrink-0 justify-center bg-accent rounded-md md:rounded-2xl xl:rounded-[22px]">
                <Animations delay={0.2}>
                  <h6 className="text-white text-4xl">{data.number}</h6>
                </Animations>
              </div>

              <Animations delay={0.3}>
                <p className="text-[#333333]">{data.text}</p>
              </Animations>
            </div>
          ))}
          <div className="pt-6 flex items-center gap-4">
            <Animations delay={0.3}>
              <Image src={specialCardIcon} alt="icon" />
            </Animations>
            <Animations delay={0.3}>
              <p className="text-[#333333]">карта = пиеш дупло</p>
            </Animations>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlaySection;
