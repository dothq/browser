# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DOS_POSIX=1 -DOS_LINUX=1
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/2d
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/2d/unittest
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/config
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/layers
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/ots/src
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/qcms
CPPSRCS += $(topsrcdir)/gfx/ots/tests/cff_charstring_test.cc
CPPSRCS += $(topsrcdir)/gfx/ots/tests/layout_common_table_test.cc
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
