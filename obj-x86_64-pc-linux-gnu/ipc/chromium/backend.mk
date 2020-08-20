# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DHAVE_CONFIG_H -DOS_POSIX=1 -DOS_LINUX=1
DIRS := src/third_party
LOCAL_INCLUDES += -I$(srcdir)/src/third_party/libevent
LOCAL_INCLUDES += -I$(srcdir)/src/third_party/libevent/compat
LOCAL_INCLUDES += -I$(srcdir)/src/third_party/libevent/include
LOCAL_INCLUDES += -I$(srcdir)/src/third_party/libevent/linux
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(srcdir)/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
CPPSRCS += $(srcdir)/src/base/message_pump_glib.cc
CPPSRCS += $(srcdir)/src/base/process_util_linux.cc
CPPSRCS += $(srcdir)/src/base/time_posix.cc
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
