# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DOS_POSIX=1 -DOS_LINUX=1 -DUNICODE -D_UNICODE -DNO_STABS_SUPPORT
DIRS := breakpad-client breakpad-client/linux google-breakpad/src/common google-breakpad/src/common/linux google-breakpad/src/processor google-breakpad/src/tools/linux/dump_syms rust client minidump-analyzer test/gtest test
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
LOCAL_INCLUDES += -I$(srcdir)/google-breakpad/src
LOCAL_INCLUDES += -I$(srcdir)/breakpad-client
LOCAL_INCLUDES += -I$(srcdir)/google-breakpad/src
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
