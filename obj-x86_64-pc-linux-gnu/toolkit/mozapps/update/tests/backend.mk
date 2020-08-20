# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DMOZ_APP_VENDOR=Mozilla -DMOZ_APP_BASENAME=Firefox -DNS_NO_XPCOM
FINAL_TARGET = $(DEPTH)/_tests/xpcshell/toolkit/mozapps/update/tests/data
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/mozapps/update
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/mozapps/update/common
CPPSRCS += $(srcdir)/TestAUSHelper.cpp
CPPSRCS += $(srcdir)/TestAUSReadStrings.cpp
DIST_FILES_0 += $(srcdir)/data/xpcshellConstantsPP.js
DIST_FILES_0_PATH := $(DEPTH)/_tests/xpcshell/toolkit/mozapps/update/tests/data/
DIST_FILES_0_TARGET := misc
PP_TARGETS += DIST_FILES_0
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
