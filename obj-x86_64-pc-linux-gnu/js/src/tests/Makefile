# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT MODIFY BY HAND.
DEPTH := ../../..
topobjdir := /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu
topsrcdir := /home/kieran/Documents/browser
srcdir := /home/kieran/Documents/browser/js/src/tests
srcdir_rel := ../../../../js/src/tests
relativesrcdir := js/src/tests
include $(DEPTH)/config/autoconf.mk
# vim: set shiftwidth=8 tabstop=8 autoindent noexpandtab copyindent:
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

include $(topsrcdir)/config/rules.mk

# test files to be packaged.
TEST_FILES = \
  jsreftest.html \
  shell.js \
  browser.js \
  js-test-driver-end.js \
  user.js \
  non262/ \
  shell/ \
  test/ \
  test262/ \
  $(NULL)

PKG_STAGE = $(DIST)/test-stage

# stage tests for packaging
stage-package:
	$(NSINSTALL) -D $(PKG_STAGE)/jsreftest/tests/js/src/tests
	(cd $(srcdir) && tar $(TAR_CREATE_FLAGS) - $(TEST_FILES)) | (cd $(PKG_STAGE)/jsreftest/tests/js/src/tests && tar -xf -)
	$(PYTHON3) $(srcdir)/jstests.py --make-manifests $(PKG_STAGE)/jsreftest/tests/js/src/tests

include $(topsrcdir)/config/recurse.mk
