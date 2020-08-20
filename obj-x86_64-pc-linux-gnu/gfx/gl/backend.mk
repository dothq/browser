# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DOS_POSIX=1 -DOS_LINUX=1
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/skia
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/skia/skia
CPPSRCS += $(srcdir)/GLContextProviderGLX.cpp
CPPSRCS += $(srcdir)/GLContextProviderWayland.cpp
CPPSRCS += $(srcdir)/GLContextProviderX11.cpp
CPPSRCS += $(srcdir)/GLScreenBuffer.cpp
CPPSRCS += $(srcdir)/SharedSurfaceDMABUF.cpp
CPPSRCS += $(srcdir)/SharedSurfaceGLX.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
