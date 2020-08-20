# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DPACKAGE=mozpixman -D_USE_MATH_DEFINES -DUSE_SSE -DUSE_SSE2
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/cairo/cairo/src
CSRCS += $(srcdir)/pixman-access-accessors.c
CSRCS += $(srcdir)/pixman-access.c
CSRCS += $(srcdir)/pixman-arm.c
CSRCS += $(srcdir)/pixman-bits-image.c
CSRCS += $(srcdir)/pixman-combine-float.c
CSRCS += $(srcdir)/pixman-combine16.c
CSRCS += $(srcdir)/pixman-combine32.c
CSRCS += $(srcdir)/pixman-conical-gradient.c
CSRCS += $(srcdir)/pixman-edge-accessors.c
CSRCS += $(srcdir)/pixman-edge.c
CSRCS += $(srcdir)/pixman-fast-path.c
CSRCS += $(srcdir)/pixman-filter.c
CSRCS += $(srcdir)/pixman-general.c
CSRCS += $(srcdir)/pixman-glyph.c
CSRCS += $(srcdir)/pixman-gradient-walker.c
CSRCS += $(srcdir)/pixman-image.c
CSRCS += $(srcdir)/pixman-implementation.c
CSRCS += $(srcdir)/pixman-linear-gradient.c
CSRCS += $(srcdir)/pixman-matrix.c
CSRCS += $(srcdir)/pixman-mips.c
CSRCS += $(srcdir)/pixman-noop.c
CSRCS += $(srcdir)/pixman-ppc.c
CSRCS += $(srcdir)/pixman-radial-gradient.c
CSRCS += $(srcdir)/pixman-region16.c
CSRCS += $(srcdir)/pixman-region32.c
CSRCS += $(srcdir)/pixman-solid-fill.c
CSRCS += $(srcdir)/pixman-sse2.c
CSRCS += $(srcdir)/pixman-trap.c
CSRCS += $(srcdir)/pixman-utils.c
CSRCS += $(srcdir)/pixman-x86.c
CSRCS += $(srcdir)/pixman.c
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
