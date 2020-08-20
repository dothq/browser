# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DNO_STABS_SUPPORT
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/crashreporter/breakpad-client
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/crashreporter/google-breakpad/src
SSRCS += $(srcdir)/breakpad_getcontext.S
CPPSRCS += $(srcdir)/file_id.cc
HOST_DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DNO_STABS_SUPPORT
HOST_CPPSRCS += $(srcdir)/crc32.cc
HOST_CPPSRCS += $(srcdir)/dump_symbols.cc
HOST_CPPSRCS += $(srcdir)/elf_symbols_to_module.cc
HOST_CPPSRCS += $(srcdir)/elfutils.cc
HOST_CPPSRCS += $(srcdir)/file_id.cc
HOST_CPPSRCS += $(srcdir)/linux_libc_support.cc
HOST_CPPSRCS += $(srcdir)/memory_mapped_file.cc
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
COMPUTED_HOST_CFLAGS += -DXP_UNIX -DNDEBUG=1 -DTRIMMED=1 -DNO_STABS_SUPPORT -I/home/kieran/Documents/browser/toolkit/crashreporter/google-breakpad/src/common/linux -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/toolkit/crashreporter/google-breakpad/src/common/linux -I/home/kieran/Documents/browser/toolkit/crashreporter/breakpad-client -I/home/kieran/Documents/browser/toolkit/crashreporter/google-breakpad/src -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/include
COMPUTED_HOST_CXXFLAGS += -DNDEBUG=1 -DTRIMMED=1 -DNO_STABS_SUPPORT -O2 -g -I/home/kieran/Documents/browser/toolkit/crashreporter/google-breakpad/src/common/linux -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/toolkit/crashreporter/google-breakpad/src/common/linux -I/home/kieran/Documents/browser/toolkit/crashreporter/breakpad-client -I/home/kieran/Documents/browser/toolkit/crashreporter/google-breakpad/src -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/include
COMPUTED_HOST_CXX_LDFLAGS += -O2 -g
COMPUTED_HOST_C_LDFLAGS += -DXP_UNIX
