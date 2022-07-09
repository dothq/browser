/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import ErrorBoundary from "browser/components/errors/ErrorBoundary";
import {
	ClassType,
	Component,
	ComponentClass,
	ComponentState,
	createElement,
} from "react";
import ReactDOM from "react-dom";

export const render = <
	P extends {},
	T extends Component<P, ComponentState>,
	C extends ComponentClass<P>,
	K extends `#${string}`
>(
	element: ClassType<P, T, C>,
	{
		mountId,
		parentId,
		prepend,
		cache,
		insertBeforeId,
	}: {
		mountId: K;
		cache: EmotionCache;
		parentId?: K;
		prepend?: boolean;
		insertBeforeId?: K;
	}
) => {
	if (!document.querySelector(mountId)) {
		const el = document.createElement("div");
		el.id = mountId.substring(1);

		const parent = parentId
			? (document.querySelector(parentId) as HTMLElement)
			: document.body;

		if (insertBeforeId) {
			parent.insertBefore(
				el,
				document.querySelector(insertBeforeId)
			);
		} else {
			parent[prepend ? "prepend" : "appendChild"](el);
		}
	}

	ReactDOM.render(
		createElement(CacheProvider, { value: cache }, [
			createElement(ErrorBoundary, <any>{}, [
				createElement(element),
			]),
		]),
		document.querySelector(mountId)
	);
};
