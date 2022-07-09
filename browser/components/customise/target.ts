/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { Component, ReactNode } from "react";
import CustomisableUIParser from "./parser";

interface Props {
	id: string;
	type: "horizontal" | "vertical";
}

interface State {
	tree: ReactNode[];
}

class Customisable extends Component<Props, State> {
	public parser = new CustomisableUIParser(
		this.props.id,
		this.props.type
	);

	public state = {
		tree: [],
	};

	public componentDidMount() {
		this.setState({ tree: this.parser.renderFactoryTree() });

		this.parser.onLayoutUpdate(() => {
			this.setState({ tree: this.parser.renderFactoryTree() });
		});
	}

	public render() {
		return React.createElement(
			React.Fragment,
			{},
			...this.state.tree
		);
	}
}

export default Customisable;
