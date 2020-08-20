# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DNS_NO_XPCOM '-DMAR_CHANNEL_ID=""' '-DMOZ_APP_VERSION="80.0"'
DIRS := updater-dep updater-xpcshell
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/mozapps/update/common
LOCAL_INCLUDES += -I$(topsrcdir)/xpcom/base
CPPSRCS += $(srcdir)/archivereader.cpp
CPPSRCS += $(srcdir)/progressui_gtk.cpp
CPPSRCS += $(srcdir)/updater.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
