/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { makeObservable, observable } from "mobx";
import Addressbar from "../addressbar/Addressbar";
import BookmarksButton from "../bookmarks/bookmarks";
import DownloadsButton from "../downloads/downloads";
import HistoryButton from "../history/history";
import BackButton from "../navigation/back";
import ForwardButton from "../navigation/forward";
import ReloadButton from "../navigation/reload";
import AddTab from "../tabs/AddTab";
import TabStrip from "../tabs/Tabs";
import MenuButton from "./common-widgets/menu";
import SpacerWidget from "./common-widgets/spacer";
import AddressbarLayout from "./layouts/addressbar";
import NavBarLayout from "./layouts/navbar";
import SidebarLayout from "./layouts/sidebar";
import TabBarLayout from "./layouts/tabbar";
import { CustomisableUILayout } from "./types";
import RenderableWidget from "./widget";

class CustomisableUI {
	@observable
	public widgets = new Map<string, RenderableWidget>();

	@observable
	public layouts = new Map<string, CustomisableUILayout>();

	public addWidgets(widgets: Record<string, RenderableWidget>) {
		for (const [key, widget] of Object.entries(widgets)) {
			this.widgets.set(key, widget);
		}
	}

	public addLayouts(layouts: Record<string, CustomisableUILayout>) {
		for (const [key, layout] of Object.entries(layouts)) {
			this.layouts.set(key, layout);
		}
	}

	public getLayout(id: string): CustomisableUILayout {
		if (!this.layouts.has(id))
			throw new Error(
				`gBrowser.CustomisableUI: No layout with id '${id}'.`
			);

		const prefId = `dot.customise.layouts.${id}`;

		const userDefinedLayout = Services.prefs.getStringPref(
			prefId,
			undefined
		);

		if (
			userDefinedLayout &&
			userDefinedLayout.length &&
			this.isParsable(userDefinedLayout)
		) {
			return JSON.parse(userDefinedLayout);
		} else if (dot.customisable.layouts.get(id)) {
			const defaultLayout = dot.customisable.layouts.get(
				id
			) as CustomisableUILayout;

			this.setLayout(id, defaultLayout);

			return defaultLayout;
		} else {
			this.setLayout(id, []);

			return [];
		}
	}

	public setLayout(id: string, layout: CustomisableUILayout) {
		if (!this.layouts.has(id))
			throw new Error(
				`gBrowser.CustomisableUI: No layout with id '${id}'.`
			);

		const prefId = `dot.customise.layouts.${id}`;

		if (!this.isStringifiable(layout))
			throw new Error(
				`gBrowser.CustomisableUI: Layout for '${id}' is malformed.`
			);

		Services.prefs.setStringPref(prefId, JSON.stringify(layout));

		return this.getLayout(id);
	}

	public addWidgetToLayout(
		widgetId: string,
		layoutId: string,
		position: number
	) {
		if (!this.widgets.has(widgetId))
			throw new Error(
				`gBrowser.CustomisableUI: No widget with id '${widgetId}'.`
			);

		if (!this.layouts.has(layoutId))
			throw new Error(
				`gBrowser.CustomisableUI: No layout with id '${layoutId}'.`
			);

		const newLayout = this.getLayout(layoutId);

		if (typeof position !== "number" || isNaN(position))
			throw new Error(
				`gBrowser.CustomisableUI: Invalid integer '${position}'.`
			);

		if (position > newLayout.length || position < 0)
			throw new Error(
				`gBrowser.CustomisableUI: Position cannot be higher than ${newLayout.length} and less than 0.`
			);

		newLayout.splice(position, 0, widgetId);

		return this.setLayout(layoutId, newLayout);
	}

	public appendWidgetToLayout(widgetId: string, layoutId: string) {
		const layout = this.getLayout(layoutId);

		return this.addWidgetToLayout(
			widgetId,
			layoutId,
			layout.length
		);
	}

	public prependWidgetToLayout(widgetId: string, layoutId: string) {
		return this.addWidgetToLayout(widgetId, layoutId, 0);
	}

	public resetLayout(id: string) {
		if (!this.layouts.has(id))
			throw new Error(
				`gBrowser.CustomisableUI: No layout with id '${id}'.`
			);

		const defaultLayout = this.layouts.get(
			id
		) as CustomisableUILayout;

		return this.setLayout(id, defaultLayout);
	}

	public resetAllLayouts() {
		this.layouts.forEach((_, id) => this.resetLayout(id));
	}

	private isParsable(layout: string) {
		try {
			JSON.parse(layout);

			if (!Array.isArray(JSON.parse(layout)))
				throw new Error("");
		} catch (e) {
			return false;
		}

		return true;
	}

	private isStringifiable(layout: object) {
		try {
			JSON.stringify(layout);
		} catch (e) {
			return false;
		}

		return true;
	}

	public init() {
		console.log(
			"gBrowser.CustomisableUI: Initialising interface widgets..."
		);

		this.addWidgets({
			"back-button": new BackButton(),
			"forward-button": new ForwardButton(),
			"reload-button": new ReloadButton(),
			"downloads-button": new DownloadsButton(),
			"menu-button": new MenuButton(),
			spacer: new SpacerWidget(),
			addressbar: new Addressbar(),
			"bookmarks-button": new BookmarksButton(),
			"history-button": new HistoryButton(),
			"tab-strip": new TabStrip(),
			"add-tab-button": new AddTab(),
		});

		console.log(
			"gBrowser.CustomisableUI: Initialising interface layouts..."
		);

		this.addLayouts({
			tabbar: TabBarLayout,
			navbar: NavBarLayout,
			addressbar: AddressbarLayout,
			sidebar: SidebarLayout,
		});
	}

	public constructor() {
		makeObservable(this);
	}
}

export default CustomisableUI;
