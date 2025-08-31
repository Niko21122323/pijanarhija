import Image from "next/image";
import checkIcon from "../public/assets/check.svg";
import whatYouGetImage from "../public/assets/what-you-get.webp";
import whatYouGetMobile from "../public/assets/what-you-get-mobile.webp";

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
		<section className="relative overflow-hidden bg-accent py-16 md:py-24 lg:py-36">
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
							className="w-full h-auto max-lg:hidden"
						/>
						<Image
							src={whatYouGetMobile}
							alt="image of the cards"
							className="w-full h-auto lg:hidden"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhatYouGet;
