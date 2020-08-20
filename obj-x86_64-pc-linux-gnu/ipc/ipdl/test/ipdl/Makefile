# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT MODIFY BY HAND.
DEPTH := ../../../..
topobjdir := /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu
topsrcdir := /home/kieran/Documents/browser
srcdir := /home/kieran/Documents/browser/ipc/ipdl/test/ipdl
srcdir_rel := ../../../../../ipc/ipdl/test/ipdl
relativesrcdir := ipc/ipdl/test/ipdl
include $(DEPTH)/config/autoconf.mk
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

include $(topsrcdir)/config/rules.mk

OKTESTS := $(wildcard $(srcdir)/ok/*.ipdl) $(wildcard $(srcdir)/ok/*.ipdlh)
ERRORTESTS := $(wildcard $(srcdir)/error/*.ipdl) $(wildcard $(srcdir)/error/*.ipdlh)

check::
	@$(PYTHON3) $(srcdir)/runtests.py  \
		$(srcdir)/ok $(srcdir)/error  \
		$(PYTHON3) $(topsrcdir)/ipc/ipdl/ipdl.py  \
		--sync-msg-list=$(srcdir)/sync-messages.ini \
		--msg-metadata=$(srcdir)/message-metadata.ini \
		OKTESTS $(OKTESTS)  \
		ERRORTESTS $(ERRORTESTS)

include $(topsrcdir)/config/recurse.mk
