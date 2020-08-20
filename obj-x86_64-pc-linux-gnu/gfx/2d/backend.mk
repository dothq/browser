# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DUSE_SSE2 -DOS_POSIX=1 -DOS_LINUX=1 -DUSE_CAIRO -DMOZ2D_HAS_MOZ_CAIRO -DMOZ_ENABLE_FREETYPE
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/skia
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/skia/skia
CSRCS += $(srcdir)/ssse3-scaler.c
CPPSRCS += $(srcdir)/BlurSSE2.cpp
CPPSRCS += $(srcdir)/ConvolutionFilter.cpp
CPPSRCS += $(srcdir)/DrawTargetSkia.cpp
CPPSRCS += $(srcdir)/Factory.cpp
CPPSRCS += $(srcdir)/FilterProcessingSSE2.cpp
CPPSRCS += $(srcdir)/ImageScalingSSE2.cpp
CPPSRCS += $(srcdir)/InlineTranslator.cpp
CPPSRCS += $(srcdir)/NativeFontResourceFreeType.cpp
CPPSRCS += $(srcdir)/PathSkia.cpp
CPPSRCS += $(srcdir)/ScaledFontFontconfig.cpp
CPPSRCS += $(srcdir)/SourceSurfaceSkia.cpp
CPPSRCS += $(srcdir)/SwizzleAVX2.cpp
CPPSRCS += $(srcdir)/SwizzleSSE2.cpp
CPPSRCS += $(srcdir)/SwizzleSSSE3.cpp
CPPSRCS += $(srcdir)/UnscaledFontFreeType.cpp
SwizzleAVX2.cpp_FLAGS += -mavx2
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
