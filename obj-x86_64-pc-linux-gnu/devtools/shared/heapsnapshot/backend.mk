# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DOS_POSIX=1 -DOS_LINUX=1 -DGOOGLE_PROTOBUF_NO_RTTI
DIST_SUBDIR = browser
FINAL_TARGET = $(if $(XPI_NAME),$(DIST)/xpi-stage/$(XPI_NAME),$(DIST)/bin)$(DIST_SUBDIR:%=/%)
DIRS := tests/gtest
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
CPPSRCS += $(srcdir)/AutoMemMap.cpp
CPPSRCS += $(srcdir)/CoreDump.pb.cc
CPPSRCS += $(srcdir)/DeserializedNode.cpp
CPPSRCS += $(srcdir)/DominatorTree.cpp
CPPSRCS += $(srcdir)/FileDescriptorOutputStream.cpp
CPPSRCS += $(srcdir)/HeapSnapshot.cpp
CPPSRCS += $(srcdir)/HeapSnapshotTempFileHelperParent.cpp
CPPSRCS += $(srcdir)/ZeroCopyNSIOutputStream.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
