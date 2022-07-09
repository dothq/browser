/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ComponentType, createElement } from "react";

class RenderableWidget<P = {}> {
	public allowedRotations = ["horizontal", "vertical"];

	public props: P | Record<any, any> = {};

	public onWidgetMounted() {}
	public onWidgetDestroy() {}
}

export function withWidget<P>(WrappedComponent: ComponentType<P>) {
	return class extends RenderableWidget {
		public constructor() {
			super();
		}

		public render() {
			return createElement(WrappedComponent);
		}
	};
}

export default RenderableWidget;
