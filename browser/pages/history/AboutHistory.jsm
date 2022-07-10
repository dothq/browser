/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const { AboutPage } = ChromeUtils.import(
	"chrome://dot/content/modules/AboutPage.jsm"
);

const AboutHistory = new AboutPage({
	cid: "d2854889-5173-453a-a9aa-6c69db344d4c",
	name: "history",
	chromeURI: "chrome://dot/content/history/index.html",
});

var EXPORTED_SYMBOLS = ["AboutHistory"];
