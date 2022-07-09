/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { PureComponent } from "react";
import CSDButton from "./WindowDecorationButton";
import { StyledCSD } from "./WindowDecorations.native.style";

interface Props {
	side: "left" | "right";
}

interface State {
	maximised: boolean;
}

class NativeWindowDecorations extends PureComponent<Props, State> {
	public state = {
		maximised: false,
	};

	public componentDidMount() {
		window.addEventListener(
			"sizemodechange",
			this.onSizemodeChange.bind(this)
		);
	}

	public onSizemodeChange() {
		this.setState({
			maximised: window.windowState == window.STATE_MAXIMIZED,
		});
	}

	public render() {
		return (
			<StyledCSD side={this.props.side}>
				<CSDButton
					onClick={() => window.minimize()}
					variant={"minimize"}
				/>
				<CSDButton
					onClick={() =>
						window.fullScreen
							? BrowserFullScreen()
							: this.state.maximised
							? window.restore()
							: window.maximize()
					}
					variant={
						this.state.maximised ? "restore" : "maximize"
					}
				/>
				<CSDButton
					onClick={(e) => BrowserTryToCloseWindow(e)}
					variant={"close"}
				/>
			</StyledCSD>
		);
	}
}

export default NativeWindowDecorations;
