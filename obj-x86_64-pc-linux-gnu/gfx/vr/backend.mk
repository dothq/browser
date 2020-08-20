# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DOS_POSIX=1 -DOS_LINUX=1
DIRS := service
LOCAL_INCLUDES += -I$(topsrcdir)/dom/base
LOCAL_INCLUDES += -I$(topsrcdir)/dom/canvas
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/layers/d3d11
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/thebes
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
CPPSRCS += $(srcdir)/VRManager.cpp
CPPSRCS += $(srcdir)/VRPuppetCommandBuffer.cpp
CPPSRCS += $(srcdir)/VRShMem.cpp
CPPSRCS += $(srcdir)/ipc/VRLayerChild.cpp
CPPSRCS += $(srcdir)/ipc/VRLayerParent.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
