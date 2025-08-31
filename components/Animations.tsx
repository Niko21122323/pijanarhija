"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Animations = ({ children, animateOnScroll = true, delay = 0 }: any) => {
	const containerRef = useRef(null);
	const elementRef = useRef([]);
	const splitRef = useRef([]);
	const lines = useRef([]);
	const [isReady, setIsReady] = useState(false);

	// Hide content initially with CSS
	useLayoutEffect(() => {
		if (containerRef.current) {
			gsap.set(containerRef.current, { visibility: "hidden" });
		}
	}, []);

	useGSAP(
		() => {
			if (!containerRef.current) return;

			splitRef.current = [];
			elementRef.current = [];
			lines.current = [];

			let elements = [];
			if (containerRef.current.hasAttribute("data-copy-wrapper")) {
				elements = Array.from(containerRef.current.children);
			} else {
				elements = [containerRef.current];
			}

			elements.forEach((element) => {
				elementRef.current.push(element);
				const split = SplitText.create(element, {
					type: "lines",
					mask: "lines",
					lineClass: "line++",
				});
				splitRef.current.push(split);

				const computedStyle = window.getComputedStyle(element);
				const textIndent = computedStyle.textIndent;
				if (textIndent && textIndent !== "0px") {
					if (split.lines.length > 0) {
						split.lines[0].style.paddingLeft = textIndent;
					}
					element.style.textIndent = "0";
				}

				lines.current.push(...split.lines);
			});

			// Set initial state and make visible
			gsap.set(lines.current, { y: "100%" });
			gsap.set(containerRef.current, { visibility: "visible" });
			setIsReady(true);

			const animationProps = {
				y: "0%",
				duration: 1,
				stagger: 0.1,
				ease: "power4.out",
				delay: delay,
			};

			if (animateOnScroll) {
				gsap.to(lines.current, {
					...animationProps,
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top 75%",
						once: true,
					},
				});
			} else {
				gsap.to(lines.current, animationProps);
			}

			return () => {
				splitRef.current.forEach((split) => {
					if (split) {
						split.revert();
					}
				});
			};
		},
		{ scope: containerRef, dependencies: [animateOnScroll, delay] },
	);

	if (React.Children.count(children) === 1) {
		return React.cloneElement(children, {
			ref: containerRef,
			style: { visibility: isReady ? "visible" : "hidden" },
		});
	}

	return (
		<div
			ref={containerRef}
			data-copy-wrapper="true"
			style={{ visibility: isReady ? "visible" : "hidden" }}
		>
			{children}
		</div>
	);
};

export default Animations;
