# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DGOOGLE_PROTOBUF_NO_RTTI -DGOOGLE_PROTOBUF_NO_STATIC_INITIALIZER -DOS_POSIX=1 -DOS_LINUX=1
DIRS := tests
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/components/build
LOCAL_INCLUDES += -I$(topsrcdir)/xpcom/io
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
CPPSRCS += $(srcdir)/HashStore.cpp
CPPSRCS += $(srcdir)/VariableLengthPrefixSet.cpp
CPPSRCS += $(srcdir)/nsUrlClassifierPrefixSet.cpp
CPPSRCS += $(srcdir)/nsUrlClassifierStreamUpdater.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
NONRECURSIVE_TARGETS += export
NONRECURSIVE_TARGETS_export += xpidl
NONRECURSIVE_TARGETS_export_xpidl_DIRECTORY = $(DEPTH)/xpcom/xpidl
NONRECURSIVE_TARGETS_export_xpidl_TARGETS += export
