# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DIMPL_MFBT -DLZ4LIB_VISIBILITY=
DIRS := tests
LOCAL_INCLUDES += -I$(srcdir)/double-conversion
CSRCS += $(srcdir)/lz4/lz4.c
CSRCS += $(srcdir)/lz4/lz4frame.c
CSRCS += $(srcdir)/lz4/lz4hc.c
CSRCS += $(srcdir)/lz4/xxhash.c
CPPSRCS += $(srcdir)/Compression.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
