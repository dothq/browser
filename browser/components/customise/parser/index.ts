/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import UnknownWidget from "browser/components/errors/unknown-widget";
import React, { Component, ReactNode } from "react";
import { CustomisableUILayout } from "../types";
import RenderableWidget from "../widget";

class CustomisableUIParser {
	public id: string = "";
	public type: "horizontal" | "vertical";

	public isValidWidget(name: string) {
		return dot.customisable.widgets.has(name);
	}

	public isValidLayout(name: string) {
		return dot.customisable.layouts.has(name);
	}

	public compileTree(layout: CustomisableUILayout) {
		const children = [] as RenderableWidget[];

		for (const value of layout) {
			const key =
				typeof value == "object"
					? Object.keys(value)[0]
					: value;
			const props =
				typeof value == "object"
					? (value as Record<any, any>)[
							Object.keys(value as Record<any, any>)[0]
					  ]
					: null;

			const type = this.isValidWidget(key)
				? "widget"
				: this.isValidLayout(key)
				? "layout"
				: "unknown";

			if (type == "widget") {
				const widget = dot.customisable.widgets.get(
					key
				) as RenderableWidget;

				widget.props = props || {};

				children.push(widget);
			} else if (type == "layout" && Array.isArray(props)) {
				// Use the default arrangement of a layout if the props param is empty
				const useStockLayout = !props;

				const subLayout = useStockLayout
					? (dot.customisable.layouts.get(
							key
					  ) as CustomisableUILayout)
					: (props as unknown as CustomisableUILayout);

				const tree = this.compileTree(subLayout);

				children.concat(tree);
			} else {
				const unknown = new UnknownWidget();

				unknown.props.id = key;
				unknown.props.rotation = this.type;

				children.push(unknown);
			}
		}

		return children;
	}

	public renderFactoryTree(): ReactNode[] {
		/**
		 * @example
		 * [
		 *     "back-button",
		 *     "forward-button",
		 *     {
		 * 	       "reload-button": {
		 *             "label": true
		 *         }
		 *     },
		 *     "spacer",
		 *     "addressbar", // Use stock layout
		 * 	   { // Override stock layout
		 *         "addressbar": {
		 *             "home-button": {}
		 *         }
		 *     }
		 * ]
		 */
		const layout = dot.customisable.getLayout(this.id);

		type ChildWithRender = RenderableWidget & {
			render: () => JSX.Element;
		};

		const children = this.compileTree(
			layout
		) as ChildWithRender[];

		const reactChildren = [] as ReactNode[];

		for (const child of children) {
			if (
				"render" in child &&
				typeof child.render == "function" &&
				child.allowedRotations.includes(this.type)
			) {
				const Rendered = child.render();

				const key = `${this.id}-${
					child.constructor.name
				}-${Math.random().toString(36).substring(2)}`;

				class ReactWrapper extends Component {
					public render() {
						return React.cloneElement(Rendered, {
							key,
						});
					}

					public componentDidMount() {
						child.onWidgetMounted();
					}

					public componentWillUnmount() {
						child.onWidgetDestroy();
					}
				}

				reactChildren.push(
					React.createElement(ReactWrapper, {
						key,
					})
				);
			} else {
				console.warn(
					`gBrowser.CustomisableUI: Failed to render '${child.constructor.name}' as the .render() method was absent.`
				);
			}
		}

		return reactChildren;
	}

	public onLayoutUpdate(callback: () => void) {
		Services.prefs.addObserver(
			`dot.customise.layouts.${this.id}`,
			() => callback()
		);
	}

	public constructor(id: string, type: "horizontal" | "vertical") {
		this.id = id;
		this.type = type;
	}
}

export default CustomisableUIParser;
