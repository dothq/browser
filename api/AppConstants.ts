/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

window.AppConstants = window.ChromeUtils.import(
	"resource://gre/modules/AppConstants.jsm"
).AppConstants;

interface AppConstantsInterface {
	ACCESSIBILITY: boolean;
	ANDROID_PACKAGE_NAME: string;
	ASAN: boolean;
	ASAN_REPORTER: boolean;
	BROWSER_CHROME_URL: string;
	DEBUG: boolean;
	DEBUG_JS_MODULES: string;
	DLL_PREFIX: string;
	DLL_SUFFIX: string;
	EARLY_BETA_OR_EARLIER: boolean;
	ENABLE_WEBDRIVER: boolean;
	HAVE_SHELL_SERVICE: boolean;
	HAVE_USR_LIB64_DIR: boolean;
	IS_ESR: boolean;
	MENUBAR_CAN_AUTOHIDE: boolean;
	MOZILLA_OFFICIAL: boolean;
	MOZ_ALLOW_ADDON_SIDELOAD: boolean;
	MOZ_ANDROID_HISTORY: boolean;
	MOZ_APP_BASENAME: string;
	MOZ_APP_DISPLAYNAME_DO_NOT_USE: string;
	MOZ_APP_NAME: string;
	MOZ_APP_VERSION: string;
	MOZ_APP_VERSION_DISPLAY: string;
	MOZ_BACKGROUNDTASKS: boolean;
	MOZ_BING_API_CLIENTID: string;
	MOZ_BING_API_KEY: string;
	MOZ_BITS_DOWNLOAD: boolean;
	MOZ_BUILDID: string;
	MOZ_BUILD_APP: string;
	MOZ_CODE_COVERAGE: boolean;
	MOZ_CRASHREPORTER: boolean;
	MOZ_DATA_REPORTING: boolean;
	MOZ_DEV_EDITION: boolean;
	MOZ_GECKO_PROFILER: boolean;
	MOZ_GLEAN_ANDROID: boolean;
	MOZ_GOOGLE_LOCATION_SERVICE_API_KEY: string;
	MOZ_GOOGLE_SAFEBROWSING_API_KEY: string;
	MOZ_JXL: boolean;
	MOZ_MACBUNDLE_ID: string;
	MOZ_MACBUNDLE_NAME: string;
	MOZ_MAINTENANCE_SERVICE: boolean;
	MOZ_MOZILLA_API_KEY: string;
	MOZ_NEW_NOTIFICATION_STORE: boolean;
	MOZ_NEW_XULSTORE: boolean;
	MOZ_NORMANDY: boolean;
	MOZ_OFFICIAL_BRANDING: boolean;
	MOZ_PLACES: boolean;
	MOZ_REQUIRE_SIGNING: boolean;
	MOZ_SANDBOX: boolean;
	MOZ_SERVICES_HEALTHREPORT: boolean;
	MOZ_SERVICES_SYNC: boolean;
	MOZ_SWITCHBOARD: boolean;
	MOZ_SYSTEM_NSS: boolean;
	MOZ_TELEMETRY_ON_BY_DEFAULT: boolean;
	MOZ_TELEMETRY_REPORTING: boolean;
	MOZ_UNSIGNED_SCOPES: 0;
	MOZ_UPDATER: boolean;
	MOZ_UPDATE_AGENT: boolean;
	MOZ_UPDATE_CHANNEL: string;
	MOZ_WEBEXT_WEBIDL_ENABLED: boolean;
	MOZ_WEBRTC: boolean;
	MOZ_WIDGET_GTK: boolean;
	MOZ_WIDGET_TOOLKIT: string;
	NIGHTLY_BUILD: boolean;
	OMNIJAR_NAME: string;
	RELEASE_OR_BETA: boolean;
	REMOTE_SETTINGS_VERIFY_SIGNATURE: boolean;
	SOURCE_REVISION_URL: string;
	TELEMETRY_PING_FORMAT_VERSION: 4;
	TSAN: boolean;
	XP_UNIX: boolean;
	isPlatformAndVersionAtLeast: (platform: any, version: any) => any;
	isPlatformAndVersionAtMost: (platform: any, version: any) => any;
	platform: string;
	unixstyle: string;
	[key: string]:
		| string
		| number
		| boolean
		| undefined
		| ((...args: any) => any);
}

const AppConstants = window.AppConstants as AppConstantsInterface;

export default AppConstants;
