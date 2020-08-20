# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DGOOGLE_PROTOBUF_NO_RTTI -DGOOGLE_PROTOBUF_NO_STATIC_INITIALIZER -DOS_POSIX=1 -DOS_LINUX=1
DIRS := apz/test/gtest apz/test/gtest/mvm
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
LOCAL_INCLUDES += -I$(topsrcdir)/docshell/base
LOCAL_INCLUDES += -I$(topsrcdir)/dom/canvas
LOCAL_INCLUDES += -I$(topsrcdir)/layout/base
LOCAL_INCLUDES += -I$(topsrcdir)/layout/generic
LOCAL_INCLUDES += -I$(topsrcdir)/media/libyuv/libyuv/include
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/skia
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/skia/skia
CPPSRCS += $(srcdir)/DMABUFSurfaceImage.cpp
CPPSRCS += $(srcdir)/ImageContainer.cpp
CPPSRCS += $(srcdir)/PersistentBufferProvider.cpp
CPPSRCS += $(srcdir)/basic/BasicCompositor.cpp
CPPSRCS += $(srcdir)/basic/BasicImageLayer.cpp
CPPSRCS += $(srcdir)/basic/TextureClientX11.cpp
CPPSRCS += $(srcdir)/basic/X11BasicCompositor.cpp
CPPSRCS += $(srcdir)/basic/X11TextureSourceBasic.cpp
CPPSRCS += $(srcdir)/client/TextureClient.cpp
CPPSRCS += $(srcdir)/composite/X11TextureHost.cpp
CPPSRCS += $(srcdir)/ipc/ShadowLayerUtilsX11.cpp
CPPSRCS += $(srcdir)/opengl/DMABUFTextureClientOGL.cpp
CPPSRCS += $(srcdir)/opengl/DMABUFTextureHostOGL.cpp
CPPSRCS += $(srcdir)/opengl/X11TextureSourceOGL.cpp
CPPSRCS += $(srcdir)/protobuf/LayerScopePacket.pb.cc
CPPSRCS += $(srcdir)/wr/WebRenderTextureHost.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
