# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1
CSRCS += $(srcdir)/chain.c
CSRCS += $(srcdir)/iccread.c
CSRCS += $(srcdir)/matrix.c
CSRCS += $(srcdir)/transform_util.c
CPPSRCS += $(srcdir)/transform-avx.cpp
CPPSRCS += $(srcdir)/transform-sse1.cpp
CPPSRCS += $(srcdir)/transform-sse2.cpp
CPPSRCS += $(srcdir)/transform.cpp
transform-avx.cpp_FLAGS += -mavx
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
