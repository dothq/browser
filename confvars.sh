#! /bin/sh
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

MOZ_APP_VENDOR="Dot HQ"

if test "$OS_ARCH" = "WINNT"; then
  if ! test "$HAVE_64BIT_BUILD"; then
    if test "$MOZ_UPDATE_CHANNEL" = "nightly" -o \
            "$MOZ_UPDATE_CHANNEL" = "nightly-try" -o \
            "$MOZ_UPDATE_CHANNEL" = "aurora" -o \
            "$MOZ_UPDATE_CHANNEL" = "beta" -o \
            "$MOZ_UPDATE_CHANNEL" = "release"; then
      if ! test "$MOZ_DEBUG"; then
        if ! test "$USE_STUB_INSTALLER"; then
          # Expect USE_STUB_INSTALLER from taskcluster for downstream task consistency
          echo "ERROR: STUB installer expected to be enabled but"
          echo "ERROR: USE_STUB_INSTALLER is not specified in the environment"
          exit 1
        fi
        MOZ_STUB_INSTALLER=1
      fi
    fi
  fi
fi

BROWSER_CHROME_URL=chrome://dot/content/browser.html

MOZ_BRANDING_DIRECTORY=dot/branding
MOZ_OFFICIAL_BRANDING_DIRECTORY=dot/branding
MOZ_APP_ID={818c990f-687c-498c-bc9a-a99d9729702a}

MOZ_PROFILE_MIGRATOR=1

# Include the DevTools client, not just the server (which is the default)
MOZ_DEVTOOLS=all
