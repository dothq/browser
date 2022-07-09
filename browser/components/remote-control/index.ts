/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

class RemoteControl {
	public observe() {
		this.updateVisualCue();
	}

	public updateVisualCue() {
		if (document.getElementById("remote-control-cue")) return;

		const el = document.createElement("span");

		el.id = "remote-control-cue";
		el.textContent =
			"This browser is being controlled by a third-party.";

		document.body.prepend(el);
	}

	public getRemoteControlComponent() {
		if (DevToolsSocketStatus.opened) {
			return "DevTools";
		}

		if (Marionette.running) {
			return "Marionette";
		}

		if (RemoteAgent.listening) {
			return "RemoteAgent";
		}

		return null;
	}
}

const gRemoteControl = new RemoteControl();
window.gRemoteControl = gRemoteControl;

export default gRemoteControl;
