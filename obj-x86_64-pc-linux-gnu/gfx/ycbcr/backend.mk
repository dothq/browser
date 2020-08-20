# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1
LOCAL_INCLUDES += -I$(topsrcdir)/media/libyuv/libyuv/include
CPPSRCS += $(srcdir)/yuv_convert_mmx.cpp
CPPSRCS += $(srcdir)/yuv_convert_sse2.cpp
CPPSRCS += $(srcdir)/yuv_row_posix.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
