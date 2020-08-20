# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT MODIFY BY HAND.
DEPTH := ../../../../..
topobjdir := /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu
topsrcdir := /home/kieran/Documents/browser
srcdir := /home/kieran/Documents/browser/browser/tools/mozscreenshots/mozscreenshots/extension
srcdir_rel := ../../../../../../browser/tools/mozscreenshots/mozscreenshots/extension
relativesrcdir := browser/tools/mozscreenshots/mozscreenshots/extension
include $(DEPTH)/config/autoconf.mk
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

OUTPUT_DIR = $(DEPTH)/_tests/testing/mochitest/browser/browser/tools/mozscreenshots/mozscreenshots/extension
GENERATED_DIRS = $(OUTPUT_DIR)
XPI_PKGNAME = mozscreenshots@mozilla.org

include $(topsrcdir)/config/rules.mk

libs::
	(cd $(DIST)/xpi-stage && tar $(TAR_CREATE_FLAGS) - $(XPI_NAME)) | (cd $(OUTPUT_DIR) && tar -xf -)

include $(topsrcdir)/config/recurse.mk
