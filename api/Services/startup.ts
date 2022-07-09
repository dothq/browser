/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export type ServicesStartupType = {
	quit: (flag: number) => void;
	eConsiderQuit: 1;
	eAttemptQuit: 2;
	eForceQuit: 3;
	eRestart: 16;
	eSilently: 256;
};
