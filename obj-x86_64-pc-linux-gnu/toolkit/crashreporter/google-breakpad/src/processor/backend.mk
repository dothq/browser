# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DBPLOG_MINIMUM_SEVERITY=SEVERITY_CRITICAL -DNO_STABS_SUPPORT
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/crashreporter/breakpad-client
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/crashreporter/google-breakpad/src
CSRCS += $(topsrcdir)/toolkit/crashreporter/google-breakpad/src/third_party/libdisasm/ia32_invariant.c
CPPSRCS += $(srcdir)/disassembler_x86.cc
CPPSRCS += $(srcdir)/exploitability_win.cc
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
