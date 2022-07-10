/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const { AboutPage } = ChromeUtils.import(
	"chrome://dot/content/modules/AboutPage.jsm"
);

const AboutSettings = new AboutPage({
	cid: "687a8ab6-1e7b-47f8-a5d6-d174b07667c0",
	name: "settings",
	chromeURI: "chrome://dot/content/settings/index.html",
});

var EXPORTED_SYMBOLS = ["AboutSettings"];
