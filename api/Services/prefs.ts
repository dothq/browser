/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

type Float = number;

export type ServicesPrefsType = {
	PREF_BOOL: 128;
	PREF_INT: 64;
	PREF_INVALID: 0;
	PREF_STRING: 32;
	QueryInterface: any;
	addObserver: (id: string, callback: () => any) => undefined;
	clearUserPref: (id: string) => undefined;
	deleteBranch: (branch: string) => undefined;
	getBoolPref: (id: string, defaultValue?: boolean) => boolean;
	getBranch: (id: string) => ServicesPrefsType;
	getCharPref: (id: string, defaultValue?: string) => string;
	getChildList: (id: string) => string[];
	getComplexValue: <T>(id: string, typeCaster: T) => T;
	getDefaultBranch: (id: string) => ServicesPrefsType;
	getFloatPref: (id: string, defaultValue?: Float) => Float;
	getIntPref: (id: string, defaultValue?: number) => number;
	getPrefType: (id: string) => number;
	getStringPref: (id: string, defaultValue?: string) => string;
	lockPref: (id: string) => undefined;
	parsePrefsFromBuffer: any;
	prefHasUserValue: (id: string) => boolean;
	prefIsLocked: (id: string) => boolean;
	readDefaultPrefsFromFile: any;
	readStats: any;
	readUserPrefsFromFile: any;
	removeObserver: (id: string, callback: () => any) => undefined;
	resetBranch: (branch: string) => undefined;
	resetPrefs: () => undefined;
	resetStats: any;
	root: string;
	savePrefFile: any;
	setBoolPref: (id: string, value: boolean) => undefined;
	setCharPref: (id: string, value: string) => undefined;
	setComplexValue: <T>(id: string, value: T) => undefined;
	setIntPref: (id: string, value: number) => undefined;
	setStringPref: (id: string, value: string) => undefined;
	unlockPref: (id: string) => undefined;
};
