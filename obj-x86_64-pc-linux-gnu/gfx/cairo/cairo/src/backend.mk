# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 '-DPACKAGE_VERSION="moz"' '-DPACKAGE_BUGREPORT="http://bugzilla.mozilla.org/"' -DCAIRO_HAS_PTHREAD -D_GNU_SOURCE -DMOZ_TREE_CAIRO -DMOZ_TREE_PIXMAN -DHAVE_UINT64_T
CSRCS += $(srcdir)/cairo-base85-stream.c
CSRCS += $(srcdir)/cairo-bentley-ottmann-rectangular.c
CSRCS += $(srcdir)/cairo-bentley-ottmann-rectilinear.c
CSRCS += $(srcdir)/cairo-bentley-ottmann.c
CSRCS += $(srcdir)/cairo-cff-subset.c
CSRCS += $(srcdir)/cairo-deflate-stream.c
CSRCS += $(srcdir)/cairo-pdf-operators.c
CSRCS += $(srcdir)/cairo-pdf-surface.c
CSRCS += $(srcdir)/cairo-ps-surface.c
CSRCS += $(srcdir)/cairo-surface-wrapper.c
CSRCS += $(srcdir)/cairo-truetype-subset.c
CSRCS += $(srcdir)/cairo-type1-fallback.c
CSRCS += $(srcdir)/cairo-type3-glyph-surface.c
CSRCS += $(srcdir)/cairo-xlib-display.c
CSRCS += $(srcdir)/cairo-xlib-screen.c
CSRCS += $(srcdir)/cairo-xlib-surface.c
CSRCS += $(srcdir)/cairo-xlib-visual.c
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
