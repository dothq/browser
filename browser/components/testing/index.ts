/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function send(data: any) {
	window.gSocket.send(JSON.stringify(data));
}

async function configureTests() {
	if (window.gSocket instanceof WebSocket) return;

	window.gSocket = new WebSocket("ws://127.0.0.1:46943");

	window.gSocket.onopen = (e) => {
		window.docShell.treeOwner.QueryInterface(
			window.Ci.nsIBaseWindow
		).visibility = false;

		send({ type: "ACK" });
	};

	window.gSocket.onmessage = (e) => {
		const type = `${e.data.type}`;
		delete e.data.type;

		console.log(
			`-> Received event type=${type} data=${JSON.stringify(
				e.data
			)}`
		);
	};

	window.gSocket.onerror = (e) => {
		window.docShell.treeOwner.QueryInterface(
			window.Ci.nsIBaseWindow
		).visibility = true;

		console.error(`An error occurred with the connection!`);

		window.Services.startup.quit(
			window.Ci.nsIAppStartup.eForceQuit
		);
	};
}

window.addEventListener("load", () => {
	configureTests();
});
