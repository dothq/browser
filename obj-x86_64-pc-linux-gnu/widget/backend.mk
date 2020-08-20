# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DMOZ_CROSS_PROCESS_IME -DOS_POSIX=1 -DOS_LINUX=1
DIRS := tests tests/gtest headless gtk x11
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
LOCAL_INCLUDES += -I$(topsrcdir)/dom/base
LOCAL_INCLUDES += -I$(topsrcdir)/dom/ipc
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/2d
LOCAL_INCLUDES += -I$(topsrcdir)/layout/base
LOCAL_INCLUDES += -I$(topsrcdir)/layout/forms
LOCAL_INCLUDES += -I$(topsrcdir)/layout/generic
LOCAL_INCLUDES += -I$(topsrcdir)/layout/painting
LOCAL_INCLUDES += -I$(topsrcdir)/layout/xul
LOCAL_INCLUDES += -I$(topsrcdir)/layout/xul/tree
LOCAL_INCLUDES += -I$(topsrcdir)/view
LOCAL_INCLUDES += -I$(srcdir)
LOCAL_INCLUDES += -I$(srcdir)/headless
LOCAL_INCLUDES += -I$(topsrcdir)/third_party/cups/include
LOCAL_INCLUDES += -I$(srcdir)/gtk
CPPSRCS += $(srcdir)/GfxInfoX11.cpp
CPPSRCS += $(srcdir)/LSBUtils.cpp
CPPSRCS += $(srcdir)/ScreenManager.cpp
CPPSRCS += $(srcdir)/WindowSurfaceX11SHM.cpp
CPPSRCS += $(srcdir)/nsBaseDragService.cpp
CPPSRCS += $(srcdir)/nsBaseWidget.cpp
CPPSRCS += $(srcdir)/nsShmImage.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
NONRECURSIVE_TARGETS += export
NONRECURSIVE_TARGETS_export += xpidl
NONRECURSIVE_TARGETS_export_xpidl_DIRECTORY = $(DEPTH)/xpcom/xpidl
NONRECURSIVE_TARGETS_export_xpidl_TARGETS += export
