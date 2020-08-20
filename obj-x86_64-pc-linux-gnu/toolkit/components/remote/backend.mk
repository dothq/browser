# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/profile
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/xre
CPPSRCS += $(srcdir)/RemoteUtils.cpp
CPPSRCS += $(srcdir)/nsDBusRemoteClient.cpp
CPPSRCS += $(srcdir)/nsDBusRemoteServer.cpp
CPPSRCS += $(srcdir)/nsGTKRemoteServer.cpp
CPPSRCS += $(srcdir)/nsRemoteService.cpp
CPPSRCS += $(srcdir)/nsUnixRemoteServer.cpp
CPPSRCS += $(srcdir)/nsXRemoteClient.cpp
CPPSRCS += $(srcdir)/nsXRemoteServer.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
