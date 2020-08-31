/* - This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this file,
   - You can obtain one at http://mozilla.org/MPL/2.0/. */

// Import globals from the files imported by the .xul files.
/* import-globals-from main.js */
/* import-globals-from home.js */
/* import-globals-from search.js */
/* import-globals-from containers.js */
/* import-globals-from privacy.js */
/* import-globals-from sync.js */
/* import-globals-from experimental.js */
/* import-globals-from findInPage.js */
/* import-globals-from ../../base/content/utilityOverlay.js */
/* import-globals-from ../../../toolkit/content/preferencesBindings.js */

"use strict";

var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

ChromeUtils.defineModuleGetter(
  this,
  "AMTelemetry",
  "resource://gre/modules/AddonManager.jsm"
);
ChromeUtils.defineModuleGetter(
  this,
  "formAutofillParent",
  "resource://formautofill/FormAutofillParent.jsm"
);

document.addEventListener("DOMContentLoaded", init_all, { once: true });

function init_all() {
  Preferences.forceEnableInstantApply();

  window.selectedId = "appearance";

  const sidebarItems = document.getElementsByClassName("sidebar-item");

  for (const item of sidebarItems) {
      item.onclick = () => {
          document.getElementById(`sidebar-item-${window.selectedId}`).removeAttribute("selected");

          const id = item.id.split("sidebar-item-")[1];

          console.log(id)

          document.getElementById(`sidebar-item-${id}`).setAttribute("selected", true);

          loadPanel(id)
      }
  }

  document.getElementById("sidebar-link-about").onclick = () => {
    openAboutDialog()
  }

  loadPanel("appearance")

  document.getElementById("sidebar-scroll-box").addEventListener("scroll", (e) => {
    if(e.target.scrollTop >= 25) document.getElementsByClassName("sidebar-header")[0].style.boxShadow = "0 6.4px 14.4px 0 rgba(0,0,0,.132),0 1.2px 3.6px 0 rgba(0,0,0,.108)"
    else document.getElementsByClassName("sidebar-header")[0].style.boxShadow = "none"
  })
}

const loadPanel = (panelId) => {
  const selectedPanel = document.getElementById(`panel-${window.selectedId}`);

  window.selectedId = panelId;

  const panel = document.getElementById(`panel-${panelId}`);

  selectedPanel.style.opacity = 0;
  selectedPanel.style.transform = "translateX(-10px)";

  panel.style.opacity = 1;
  panel.style.transform = "translateX(0px)";
}
