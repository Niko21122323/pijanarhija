import Image from "next/image";
import checkIcon from "../public/assets/check.svg";
import patternbottom from "../public/assets/pattern-3-bottom.svg";
import patternTop from "../public/assets/pattern-3-top.svg";
import whatYouGetImage from "../public/assets/what-you-get-image.webp";

interface WhatYouGet {
	text: string;
	id: number;
}

const whatYouGetData: WhatYouGet[] = [
	{
		id: 1,
		text: "70+ Уникатно илустрирани карти полни со локален хумор, и предизвици!",
	},
	{
		id: 2,
		text: "Игра која не здосадува! Секоја партија носи ново искуство и забава!",
	},
	{
		id: 3,
		text: "Совршена за родендени, викенди, собиранки и дружби!",
	},
	{
		id: 4,
		text: "Совршен поклон за некој од друшство!",
	},
];

const WhatYouGet = () => {
	return (
		<section className="relative overflow-hidden bg-accent pb-[150px] sm:pb-[200px] lg:pb-[250px] 2xl:pb-[350px] pt-[250px] sm:pt-[300px] lg:pt-[350px] 2xl:pt-[500px]">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
					<div className="lg:col-span-5">
						<h2 className="uppercase text-light-100 text-[40px] md:text-5xl xl:text-[60px] pb-12">
							Што добиваш?
						</h2>
						<div className="flex flex-col gap-4">
							{whatYouGetData.map((data: WhatYouGet) => (
								<div key={data.id} className="flex items-start gap-4">
									<Image src={checkIcon} alt="check icon" />
									<p className="text-light-300">{data.text}</p>
								</div>
							))}
						</div>
					</div>
					<div className="lg:col-span-7">
						<Image
							src={whatYouGetImage}
							alt="image of the cards"
							className="w-full h-auto"
						/>
					</div>
				</div>
			</div>

			<div className="absolute -top-5 left-0 w-full h-auto max-sm:w-[190%] max-md:w-[150%] max-lg:w-[130%]">
				<Image src={patternTop} alt="icon" className="h-auto w-full" />
			</div>
			<div className="absolute bottom-0 left-0 w-full h-auto max-md:w-[150%] max-lg:w-[130%]">
				<Image src={patternbottom} alt="icon" className="h-auto w-full" />
			</div>
		</section>
	);
};

export default WhatYouGet;
