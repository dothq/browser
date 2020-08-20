# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/media/mtransport
LOCAL_INCLUDES += -I$(topsrcdir)/media/mtransport
LOCAL_INCLUDES += -I$(topsrcdir)/media/webrtc
LOCAL_INCLUDES += -I$(topsrcdir)/media/webrtc/signaling/src/common/time_profiling
LOCAL_INCLUDES += -I$(topsrcdir)/media/webrtc/signaling/src/media-conduit
LOCAL_INCLUDES += -I$(topsrcdir)/media/webrtc/signaling/src/mediapipeline
LOCAL_INCLUDES += -I$(topsrcdir)/media/webrtc/signaling/src/peerconnection
LOCAL_INCLUDES += -I$(topsrcdir)/media/webrtc/trunk
LOCAL_INCLUDES += -I$(topsrcdir)/media/webrtc/trunk/webrtc
CPPSRCS += $(srcdir)/MediaModule.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
NONRECURSIVE_TARGETS += export
NONRECURSIVE_TARGETS_export += xpidl
NONRECURSIVE_TARGETS_export_xpidl_DIRECTORY = $(DEPTH)/xpcom/xpidl
NONRECURSIVE_TARGETS_export_xpidl_TARGETS += export
