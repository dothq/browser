# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DFFVPX_VERSION=46465650 -DUSING_MOZFFVPX
LOCAL_INCLUDES += -I$(topsrcdir)/xpcom/build
LOCAL_INCLUDES += -I$(topsrcdir)/dom/media/platforms/ffmpeg
LOCAL_INCLUDES += -I$(topsrcdir)/dom/media/platforms/ffmpeg/ffmpeg58/include
CPPSRCS += $(srcdir)/FFVPXRuntimeLinker.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
