# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DOS_POSIX=1 -DOS_LINUX=1
DIRS := openvr
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
LOCAL_INCLUDES += -I$(topsrcdir)/dom/base
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/layers/d3d11
CPPSRCS += $(srcdir)/OpenVRControllerMapper.cpp
CPPSRCS += $(srcdir)/OpenVRCosmosMapper.cpp
CPPSRCS += $(srcdir)/OpenVRDefaultMapper.cpp
CPPSRCS += $(srcdir)/OpenVRKnucklesMapper.cpp
CPPSRCS += $(srcdir)/OpenVRSession.cpp
CPPSRCS += $(srcdir)/OpenVRViveMapper.cpp
CPPSRCS += $(srcdir)/PuppetSession.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
