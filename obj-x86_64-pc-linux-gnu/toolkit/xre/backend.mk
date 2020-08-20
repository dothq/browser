# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DTELEMETRY_PING_FORMAT_VERSION=4 -DPROXY_PRINTING=1 -DOS_POSIX=1 -DOS_LINUX=1 -DUSE_GLX_TEST '-DMOZ_APP_NAME="firefox"' '-DMOZ_APP_BASENAME="Firefox"' '-DMOZ_APP_DISPLAYNAME="Dot Browser"' '-DMOZ_APP_VENDOR="Mozilla"' '-DMOZ_APP_VERSION="80.0"' '-DOS_TARGET="Linux"' '-DMOZ_WIDGET_TOOLKIT="gtk"' -DMOZ_UPDATER -DGRE_MILESTONE=80.0 -DMOZ_APP_VERSION_DISPLAY=80.0 -DAPP_VERSION=80.0 '-DAPP_ID={ec8030f7-c20a-464f-9b0e-13a3a9e97384}' -DMOZ_BUILD_APP_IS_BROWSER -DTOPOBJDIR=/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu
DIRS := test/gtest
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/components/remote
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/components/printingui
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
LOCAL_INCLUDES += -I$(topsrcdir)/other-licenses/nsis/Contrib/CityHash/cityhash
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/components/find
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/components/printingui/ipc
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/components/windowwatcher
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/mozapps/update/common
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/profile
LOCAL_INCLUDES += -I$(topsrcdir)/config
LOCAL_INCLUDES += -I$(topsrcdir)/dom/base
LOCAL_INCLUDES += -I$(topsrcdir)/dom/commandhandler
LOCAL_INCLUDES += -I$(topsrcdir)/dom/ipc
LOCAL_INCLUDES += -I$(topsrcdir)/dom/webbrowserpersist
LOCAL_INCLUDES += -I$(topsrcdir)/testing/gtest/mozilla
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/crashreporter
LOCAL_INCLUDES += -I$(topsrcdir)/xpcom/build
CPPSRCS += $(topsrcdir)/other-licenses/nsis/Contrib/CityHash/cityhash/city.cpp
CPPSRCS += $(srcdir)/ProfileReset.cpp
CPPSRCS += $(srcdir)/nsAppRunner.cpp
CPPSRCS += $(srcdir)/nsEmbedFunctions.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
NONRECURSIVE_TARGETS += export
NONRECURSIVE_TARGETS_export += xpidl
NONRECURSIVE_TARGETS_export_xpidl_DIRECTORY = $(DEPTH)/xpcom/xpidl
NONRECURSIVE_TARGETS_export_xpidl_TARGETS += export
