interface InfoProps {
	id: number;
	text: string;
}

const shippingData: InfoProps[] = [
	{
		id: 1,
		text: "ДА, БЕСПЛАТНА ДОСТАВА!",
	},
	{
		id: 2,
		text: "Испорака низ цела Македонија!",
	},
	{
		id: 3,
		text: "Испорака низ цела Македонија!",
	},
];

const priceData: InfoProps[] = [
	{
		id: 1,
		text: "Играта + достава е само 690 ден.",
	},
	{
		id: 2,
		text: "Или 2 коктели во Скопје! (реално...)",
	},
	{
		id: 3,
		text: "Купи еднаш, играј засекогаш!",
	},
];

const InfoSection = () => {
	return (
		<section className="py-10">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 max-w-[1200px] mx-auto">
					<div className="lg:pr-16 xl:pr-[92px] lg:border-r lg:border-dark">
						<h2 className="text-[40px] md:text-5xl xl:text-[60px] text-dark pb-6 uppercase">
							достава имате?
						</h2>
						<ul className="list-disc flex flex-col gap-1 pl-5">
							{shippingData.map((data: InfoProps) => (
								<li key={data.id} className="text-dark">
									<p className="text-[#333333]">{data.text}</p>
								</li>
							))}
						</ul>
					</div>
					<div className="lg:pl-16 xl:pl-[92px]">
						<h2 className="text-[40px] md:text-5xl xl:text-[60px] text-dark pb-6 uppercase">
							а ЦЕНА?
						</h2>
						<ul className="list-disc flex flex-col gap-1 pl-5">
							{priceData.map((data: InfoProps) => (
								<li key={data.id} className="text-dark">
									<p className="text-[#333333]">{data.text}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default InfoSection;
