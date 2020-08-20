# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DHAVE_UINT64_T -DWEBRTC_POSIX -DWEBRTC_BUILD_LIBEVENT -DWEBRTC_LINUX -DOS_POSIX=1 -DOS_LINUX=1 '-DMOZ_CHILD_PROCESS_NAME="plugin-container"' '-DMOZ_CHILD_PROCESS_BUNDLE="plugin-container.app/Contents/MacOS/"'
LOCAL_INCLUDES += -I$(topsrcdir)/caps
LOCAL_INCLUDES += -I$(topsrcdir)/dom/broadcastchannel
LOCAL_INCLUDES += -I$(topsrcdir)/dom/indexedDB
LOCAL_INCLUDES += -I$(topsrcdir)/dom/storage
LOCAL_INCLUDES += -I$(topsrcdir)/media/webrtc/trunk
LOCAL_INCLUDES += -I$(topsrcdir)/media/webrtc/trunk/webrtc
LOCAL_INCLUDES += -I$(topsrcdir)/netwerk/base
LOCAL_INCLUDES += -I$(topsrcdir)/xpcom/build
LOCAL_INCLUDES += -I$(topsrcdir)/dom/ipc
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/crashreporter
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/xre
LOCAL_INCLUDES += -I$(topsrcdir)/xpcom/base
LOCAL_INCLUDES += -I$(topsrcdir)/xpcom/threads
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(srcdir)
CPPSRCS += $(srcdir)/BackgroundChildImpl.cpp
CPPSRCS += $(srcdir)/BackgroundParentImpl.cpp
CPPSRCS += $(srcdir)/FileDescriptorSetChild.cpp
CPPSRCS += $(srcdir)/FileDescriptorSetParent.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
