/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { PureComponent } from "react";

interface Props {
	children: React.ReactChild | React.ReactChild[];
}

class ErrorBoundary extends PureComponent<Props> {
	public state = {
		error: false,
	};

	public constructor(props: Props) {
		super(props);
	}

	static getDerivedStateFromError() {
		return { error: true };
	}

	public componentDidCatch(error: any, info: any) {
		const stack = error.stack
			.split("\n")
			.filter((ln: string) => !ln.trim().length);

		console.error("");
		console.error([error.name || "", error.message].join(" "));

		for (const ln of stack) {
			console.error(`    ${ln.replace(/\n/g, "")}`);
		}

		console.error("");

		window.Services.startup.quit(
			window.Services.startup.eAttemptQuit |
				window.Services.startup.eRestart
		);
	}

	public render() {
		if (!this.state.error) return this.props.children;

		return <div></div>;
	}
}

export default ErrorBoundary;
