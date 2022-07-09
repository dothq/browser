#filter dumbComments emptyLines substitution

// -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

// General
pref("general.autoScroll", true);
pref("browser.preferences.experimental.hidden", true);
pref("browser.preferences.experimental", false);
pref("app.feedback.baseURL", "https://services.dothq.org/feedback/send?product=dot&version=%DOTVERSION%&channel=unknown");

// Network
pref("dom.security.https_only_mode", true); // Enable HTTPS-only mode
pref("network.trr.mode", 2); // Enable DNS-over-HTTPS by default
pref("network.trr.uri", "https://trr.dns.nextdns.io/");

pref("network.security.esni.enabled", true); // Encrypted SNI support
pref("network.http.http3.enabled", true); // HTTP3 support
pref("network.cookie.cookieBehavior", 1); // Block third-party cookies

pref("network.IDN_show_punycode", true);  // Convert non-unicode domains to Unicode to stop phishing

pref("network.http.referer.XOriginTrimmingPolicy", 2); // Tighten referrer handling policy
pref("network.http.referer.XOriginPolicy", 2);

pref("network.dns.disablePrefetch", true); // Disable prefetch which exposes your IP to unvisited sites
pref("network.dns.disablePrefetchFromHTTPS", true);
pref("network.predictor.enabled", false);
pref("network.predictor.enable-prefetch", false);
pref("network.prefetch-next", false);

pref("network.captive-portal-service.enabled", false);

// Opt out of studies, experiments and telemetry
pref("app.shield.optoutstudies.enabled", false);
pref("browser.onboarding.enabled", false);
pref("experiments.enabled", false);
pref("network.allow-experiments", false);
pref("browser.discovery.enabled", false);
pref("services.settings.server", "");

// Disable Safebrowsing
// todo: Swap out Safe Browsing for open-source alternative
pref("browser.safebrowsing.malware.enabled", false);
pref("browser.safebrowsing.phishing.enabled", false);
pref("browser.safebrowsing.downloads.enabled", false);
pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
pref("browser.safebrowsing.blockedURIs.enabled", false);

pref("browser.safebrowsing.downloads.remote.url", "");
pref("browser.safebrowsing.provider.google4.dataSharing.enabled", "");
pref("browser.safebrowsing.provider.google4.updateURL", "");
pref("browser.safebrowsing.provider.google4.reportURL", "");
pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
pref("browser.safebrowsing.provider.google4.lists", "");
pref("browser.safebrowsing.provider.google4.gethashURL", "");
pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
pref("browser.safebrowsing.provider.google4.advisoryURL", "");
pref("browser.safebrowsing.provider.google4.advisoryName", "");
pref("browser.safebrowsing.provider.google.updateURL", "");
pref("browser.safebrowsing.provider.google.reportURL", "");
pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
pref("browser.safebrowsing.provider.google.pver", "");
pref("browser.safebrowsing.provider.google.lists", "");
pref("browser.safebrowsing.provider.google.gethashURL", "");
pref("browser.safebrowsing.provider.google.advisoryURL", "");

// Security
pref("security.insecure_connection_text.enabled", true);
pref("privacy.donottrackheader.enabled", true);
pref("browser.contentblocking.category", "strict");
pref("privacy.resistFingerprinting", true);
pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);

// Pocket
pref("extensions.pocket.api", "");
pref("extensions.pocket.enabled", false);
pref("extensions.pocket.oAuthConsumerKey", "");
pref("extensions.pocket.site", "");
pref("extensions.pocket.onSaveRecs", false);
pref("extensions.pocket.onSaveRecs.locales", "");

// Appearance
pref("layout.css.backdrop-filter.enabled", true);
pref("browser.tabs.drawInTitlebar", true);
pref("browser.toolbars.bookmarks.visibility", "never");
pref("html5.inert.enabled", true);

// Scrolling
pref("general.smoothScroll.mouseWheel.durationMaxMS", 120);
pref("general.smoothScroll.mouseWheel.durationMinMS", 400);
pref("general.smoothScroll.msdPhysics.enabled", true);
pref("general.smoothScroll.msdPhysics.regularSpringConstant", 3000);
pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 1000);

// Firefox Services
pref("browser.contentblocking.report.lockwise.enabled", false);

// dot.ui
pref("dot.ui.accent_colour", "blue"); // Default accent colour is blue
pref("dot.ui.locale", ""); // If empty, use OS language
pref("dot.ui.statusbar.disabled", false);
pref("dot.ui.statusbar.type", "floating");
pref("dot.ui.roundness", 8);

// dot.window
pref("dot.window.nativecontrols.enabled", true);

// dot.tabs
pref("dot.tabs.scroll_amount", 250);

// dot.keybinds
pref("dot.keybinds.new-tab", "CmdOrCtrl+T");

// dot.newtab
pref("dot.newtab.enabled", true);
pref("dot.newtab.urls", "about:home"); // accepts a single URL or urls split by |