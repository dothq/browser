# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DOS_POSIX=1 -DOS_LINUX=1 -DCAIRO_GFX '-DMOZ_APP_NAME="firefox"'
DIRS := mozgtk wayland mozwayland
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
LOCAL_INCLUDES += -I$(topsrcdir)/layout/base
LOCAL_INCLUDES += -I$(topsrcdir)/layout/generic
LOCAL_INCLUDES += -I$(topsrcdir)/layout/xul
LOCAL_INCLUDES += -I$(topsrcdir)/other-licenses/atk-1.0
LOCAL_INCLUDES += -I$(topsrcdir)/third_party/cups/include
LOCAL_INCLUDES += -I$(topsrcdir)/widget
LOCAL_INCLUDES += -I$(topsrcdir)/widget/headless
LOCAL_INCLUDES += -I$(topsrcdir)/widget/x11
CPPSRCS += $(srcdir)/MediaKeysEventSourceFactory.cpp
CPPSRCS += $(srcdir)/WaylandVsyncSource.cpp
CPPSRCS += $(srcdir)/nsWindow.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
