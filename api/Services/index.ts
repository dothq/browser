/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ServicesPrefsType } from "./prefs";
import { ServicesStartupType } from "./startup";

/** @todo Add types for Services */
type ServicesType = {
	appShell: any;
	appinfo: any;
	blocklist: any;
	cache2: any;
	catMan: any;
	clearData: any;
	clipboard: any;
	console: any;
	cookies: any;
	cpmm: any;
	crashmanager: any;
	dirsvc: any;
	domStorageManager: any;
	droppedLinkHandler: any;
	eTLD: any;
	els: any;
	focus: any;
	fog: any;
	intl: any;
	io: any;
	loadContextInfo: any;
	locale: any;
	logins: any;
	mm: any;
	obs: any;
	perms: any;
	policies: any;
	ppmm: any;
	prefs: ServicesPrefsType;
	profiler: any;
	prompt: any;
	qms: any;
	scriptSecurityManager: any;
	scriptloader: any;
	search: any;
	startup: ServicesStartupType;
	storage: any;
	strings: any;
	sysinfo: any;
	telemetry: any;
	textToSubURI: any;
	tm: any;
	uriFixup: any;
	urlFormatter: any;
	uuid: any;
	vc: any;
	wm: any;
	ww: any;
	xulStore: any;
};

const Services = window.Services as ServicesType;

export default Services;
