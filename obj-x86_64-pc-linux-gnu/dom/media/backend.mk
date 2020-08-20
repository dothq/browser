# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DHAVE_UINT64_T -DWEBRTC_POSIX -DWEBRTC_BUILD_LIBEVENT -DWEBRTC_LINUX -DMOZILLA_INTERNAL_API -DTRACING -DOS_POSIX=1 -DOS_LINUX=1
DIRS := doctor eme encoder fake-cdm flac gmp gmp-plugin-openh264 imagecapture ipc mediacapabilities mediacontrol mediasink mediasource mediasession mp3 ogg platforms systemservices wave webaudio webm webrtc webspeech webvtt mp4 bridge gtest
LOCAL_INCLUDES += -I$(topsrcdir)/caps
LOCAL_INCLUDES += -I$(topsrcdir)/docshell/base
LOCAL_INCLUDES += -I$(topsrcdir)/dom/base
LOCAL_INCLUDES += -I$(topsrcdir)/layout/generic
LOCAL_INCLUDES += -I$(topsrcdir)/layout/xul
LOCAL_INCLUDES += -I$(topsrcdir)/media/libyuv/libyuv/include
LOCAL_INCLUDES += -I$(topsrcdir)/netwerk/base
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/content/tests/browser
LOCAL_INCLUDES += -I$(topsrcdir)/media/webrtc/signaling/src/common
LOCAL_INCLUDES += -I$(topsrcdir)/media/webrtc/trunk
LOCAL_INCLUDES += -I$(topsrcdir)/media/webrtc/trunk/webrtc
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
CPPSRCS += $(srcdir)/CubebUtils.cpp
CPPSRCS += $(srcdir)/DecoderTraits.cpp
DecoderTraits.cpp_FLAGS += -Wno-error=multichar
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
NONRECURSIVE_TARGETS += export
NONRECURSIVE_TARGETS_export += xpidl
NONRECURSIVE_TARGETS_export_xpidl_DIRECTORY = $(DEPTH)/xpcom/xpidl
NONRECURSIVE_TARGETS_export_xpidl_TARGETS += export
