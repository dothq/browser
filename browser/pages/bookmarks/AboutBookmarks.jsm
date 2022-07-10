/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const { AboutPage } = ChromeUtils.import(
	"chrome://dot/content/modules/AboutPage.jsm"
);

const AboutBookmarks = new AboutPage({
	cid: "cddaf638-8369-4cc2-aff4-ea8bab31c575",
	name: "bookmarks",
	chromeURI: "chrome://dot/content/bookmarks/index.html",
});

var EXPORTED_SYMBOLS = ["AboutBookmarks"];
