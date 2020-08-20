# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DOS_POSIX=1 -DOS_LINUX=1 -DMOZ_ENABLE_FREETYPE -DGRAPHITE2_STATIC
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
LOCAL_INCLUDES += -I$(topsrcdir)/dom/base
LOCAL_INCLUDES += -I$(topsrcdir)/dom/xml
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/skia
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/skia/skia
CPPSRCS += $(srcdir)/PrintTarget.cpp
CPPSRCS += $(srcdir)/PrintTargetPDF.cpp
CPPSRCS += $(srcdir)/PrintTargetPS.cpp
CPPSRCS += $(srcdir)/PrintTargetThebes.cpp
CPPSRCS += $(srcdir)/gfxASurface.cpp
CPPSRCS += $(srcdir)/gfxAlphaRecoverySSE2.cpp
CPPSRCS += $(srcdir)/gfxDrawable.cpp
CPPSRCS += $(srcdir)/gfxFT2FontBase.cpp
CPPSRCS += $(srcdir)/gfxFT2Utils.cpp
CPPSRCS += $(srcdir)/gfxFcPlatformFontList.cpp
CPPSRCS += $(srcdir)/gfxFontUtils.cpp
CPPSRCS += $(srcdir)/gfxGdkNativeRenderer.cpp
CPPSRCS += $(srcdir)/gfxPlatform.cpp
CPPSRCS += $(srcdir)/gfxPlatformGtk.cpp
CPPSRCS += $(srcdir)/gfxXlibNativeRenderer.cpp
CPPSRCS += $(srcdir)/gfxXlibSurface.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
NONRECURSIVE_TARGETS += export
NONRECURSIVE_TARGETS_export += xpidl
NONRECURSIVE_TARGETS_export_xpidl_DIRECTORY = $(DEPTH)/xpcom/xpidl
NONRECURSIVE_TARGETS_export_xpidl_TARGETS += export
