# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DXPCOM_GLUE
LOCAL_INCLUDES += -I$(topsrcdir)/xpcom/build
LOCAL_INCLUDES += -I$(topsrcdir)/xpcom/threads
CPPSRCS += $(topsrcdir)/xpcom/glue/FileUtils.cpp
CPPSRCS += $(topsrcdir)/xpcom/glue/MemUtils.cpp
CPPSRCS += $(srcdir)/nsXPCOMGlue.cpp
DIST_INSTALL := 1
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
