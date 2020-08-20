# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1
LOCAL_INCLUDES += -I$(topsrcdir)/xpcom/reflect/xptcall
SSRCS += $(srcdir)/xptcinvoke_asm_x86_64_unix.S
CPPSRCS += $(srcdir)/xptcinvoke_x86_64_unix.cpp
CPPSRCS += $(srcdir)/xptcstubs_x86_64_linux.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
