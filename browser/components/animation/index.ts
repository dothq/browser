/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import anime from "animejs";

type AnimationTarget =
	| string
	| object
	| HTMLElement
	| SVGElement
	| NodeList
	| null;

export const animate = (
	target: HTMLElement | Element | Text,
	animation: Record<string, any>,
	duration?: number
) => {
	if (duration !== undefined && duration == 0) {
		for (const [key, value] of Object.entries(animation)) {
			(target as HTMLElement).style[key as any] = value;
		}

		return;
	}

	return anime({
		targets: target,
		easing: "easeOutQuint",
		duration: duration || 200,
		...animation,
	});
};
