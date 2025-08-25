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
		<section>
			<div className="container mx-auto px-4 lg:px-6">
				<div className=""></div>
			</div>
		</section>
	);
};

export default InfoSection;
