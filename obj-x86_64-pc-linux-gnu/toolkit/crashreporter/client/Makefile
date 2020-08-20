# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT MODIFY BY HAND.
DEPTH := ../../..
topobjdir := /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu
topsrcdir := /home/kieran/Documents/browser
srcdir := /home/kieran/Documents/browser/toolkit/crashreporter/client
srcdir_rel := ../../../../toolkit/crashreporter/client
relativesrcdir := toolkit/crashreporter/client
include $(DEPTH)/config/autoconf.mk
# vim:set ts=8 sw=8 sts=8 noet:
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

ifeq ($(OS_ARCH),WINNT)
MOZ_WINCONSOLE = 0
endif

include $(topsrcdir)/config/rules.mk

ifeq ($(OS_ARCH),Darwin)
libs::
	$(NSINSTALL) -D $(DIST)/bin/crashreporter.app
	rsync -a -C --exclude '*.in' $(srcdir)/macbuild/Contents $(DIST)/bin/crashreporter.app 
	sed -e 's/%APP_NAME%/$(MOZ_APP_DISPLAYNAME)/' $(srcdir)/macbuild/Contents/Resources/English.lproj/InfoPlist.strings.in | \
	  iconv -f UTF-8 -t UTF-16 > $(DIST)/bin/crashreporter.app/Contents/Resources/English.lproj/InfoPlist.strings
	$(NSINSTALL) -D $(DIST)/bin/crashreporter.app/Contents/MacOS
	$(NSINSTALL) $(DIST)/bin/crashreporter $(DIST)/bin/crashreporter.app/Contents/MacOS
endif

include $(topsrcdir)/config/recurse.mk
