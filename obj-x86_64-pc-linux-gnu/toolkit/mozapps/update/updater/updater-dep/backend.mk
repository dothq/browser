# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DDEP_UPDATER -DNS_NO_XPCOM '-DMAR_CHANNEL_ID=""' '-DMOZ_APP_VERSION="80.0"'
FINAL_TARGET = $(DEPTH)/_tests/updater-dep
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/mozapps/update/common
LOCAL_INCLUDES += -I$(topsrcdir)/xpcom/base
CPPSRCS += $(topsrcdir)/toolkit/mozapps/update/updater/archivereader.cpp
CPPSRCS += $(topsrcdir)/toolkit/mozapps/update/updater/progressui_gtk.cpp
CPPSRCS += $(topsrcdir)/toolkit/mozapps/update/updater/updater.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
