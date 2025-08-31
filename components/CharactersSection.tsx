"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import type { Swiper as SwiperType } from "swiper";
import { EffectCards, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import card1 from "../public/assets/cards/1.png";
import card2 from "../public/assets/cards/2.png";
import card3 from "../public/assets/cards/3.png";
import card4 from "../public/assets/cards/4.png";
import card5 from "../public/assets/cards/5.png";
import card6 from "../public/assets/cards/6.png";
import card7 from "../public/assets/cards/7.png";
import card8 from "../public/assets/cards/8.png";
import card9 from "../public/assets/cards/9.png";
import swiperIcon from "../public/assets/swipe-icon.svg";

const cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9];

const CharactersSection = () => {
	const [swiperConfig, setSwiperConfig] = useState({
		slidesPerView: 3,
		cardEffects: {
			rotate: false,
			perSlideOffset: 80,
			perSlideRotate: 0,
			slideShadows: false,
		},
	});

	const [screenSize, setScreenSize] = useState("desktop");
	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);
	const [_swiperInstance, setSwiperInstance] = useState<SwiperType | null>(
		null,
	);

	useEffect(() => {
		const updateSwiperConfig = () => {
			const width = window.innerWidth;

			if (width < 640) {
				setScreenSize("mobile");
				setSwiperConfig({
					slidesPerView: 1.5,
					cardEffects: {
						rotate: false,
						perSlideOffset: 20,
						perSlideRotate: 0,
						slideShadows: false,
					},
				});
			} else if (width < 1024) {
				setScreenSize("tablet");
				setSwiperConfig({
					slidesPerView: 2,
					cardEffects: {
						rotate: false,
						perSlideOffset: 40,
						perSlideRotate: 0,
						slideShadows: false,
					},
				});
			} else {
				// Desktop
				setScreenSize("desktop");
				setSwiperConfig({
					slidesPerView: 3,
					cardEffects: {
						rotate: false,
						perSlideOffset: 80,
						perSlideRotate: 0,
						slideShadows: false,
					},
				});
			}
		};

		updateSwiperConfig();
		window.addEventListener("resize", updateSwiperConfig);

		return () => window.removeEventListener("resize", updateSwiperConfig);
	}, []);

	return (
		<section
			className="relative overflow-hidden bg-accent py-16 md:py-24 lg:py-36"
			id="карактери"
		>
			<div className="container mx-auto px-4 lg:px-6">
				<div className="max-w-[1200px] mx-auto">
					<div className="flex flex-col items-center justify-center pb-12 lg:pb-14">
						<h2 className="text-light-100 text-[40px] md:text-5xl xl:text-[60px] text-center uppercase pb-5 max-sm:max-w-[322px]">
							Запознај ги Карактерите
						</h2>
						<p className="text-light-300 text-center max-w-[322px] sm:max-w-[586px]">
							Сите ги знаеш. Некои ги сакаш. Некои ги избегнуваш. Сега време е
							да се соочиш со нив, со карти на маса и чаша во рака.
						</p>
					</div>
					<div className="relative">
						<Swiper
							key={screenSize}
							slidesPerView={swiperConfig.slidesPerView}
							effect={"cards"}
							loop={true}
							centeredSlides={true}
							modules={[EffectCards, Navigation]}
							cardsEffect={swiperConfig.cardEffects}
							navigation={{
								prevEl: prevRef.current,
								nextEl: nextRef.current,
							}}
							onSwiper={setSwiperInstance}
							className="cardsSwiper"
						>
							{cards.map((card) => (
								<SwiperSlide key={card.src} className="!h-auto group">
									<div className="h-full scale-90 opacity-0 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:scale-100 group-[.swiper-slide-prev]:opacity-50 group-[.swiper-slide-prev]:scale-90 group-[.swiper-slide-next]:opacity-50 group-[.swiper-slide-next]:scale-90 transition-all duration-300 ease-in-out">
										<Image
											src={card}
											alt="card image"
											className="h-full w-full"
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>

						<button
							type="button"
							ref={prevRef}
							className="max-lg:hidden absolute left-10 top-1/2 -translate-y-1/2 z-10 size-16 flex items-center justify-center rounded-full border border-white bg-transparent hover:bg-white transition-colors duration-300 ease-in-out cursor-pointer group"
							aria-label="Previous slide"
						>
							<FaArrowLeft className="group-hover:text-accent transition-colors duration-300 ease-in-out text-light-100 text-xl" />
						</button>

						<button
							type="button"
							ref={nextRef}
							className="max-lg:hidden absolute right-10 top-1/2 -translate-y-1/2 z-10 size-16 flex items-center justify-center rounded-full border border-white bg-transparent hover:bg-white transition-colors duration-300 ease-in-out cursor-pointer group"
							aria-label="Next slide"
						>
							<FaArrowRight className="group-hover:text-accent transition-colors duration-300 ease-in-out text-light-100 text-xl" />
						</button>

						<div className="flex items-center justify-center mt-6 lg:hidden">
							<Image src={swiperIcon} alt="icon" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CharactersSection;
