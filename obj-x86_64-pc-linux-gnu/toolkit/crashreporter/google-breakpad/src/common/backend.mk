# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DNO_STABS_SUPPORT
DIRS := dwarf
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/crashreporter/rust
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/crashreporter/breakpad-client
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/crashreporter/google-breakpad/src
HOST_DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DHAVE_A_OUT_H -DHAVE_RUST_DEMANGLE
HOST_CPPSRCS += $(srcdir)/arm_ex_reader.cc
HOST_CPPSRCS += $(srcdir)/arm_ex_to_module.cc
HOST_CPPSRCS += $(srcdir)/convert_UTF.cc
HOST_CPPSRCS += $(srcdir)/dwarf_cfi_to_module.cc
HOST_CPPSRCS += $(srcdir)/dwarf_cu_to_module.cc
HOST_CPPSRCS += $(srcdir)/dwarf_line_to_module.cc
HOST_CPPSRCS += $(srcdir)/dwarf_range_list_handler.cc
HOST_CPPSRCS += $(srcdir)/language.cc
HOST_CPPSRCS += $(srcdir)/md5.cc
HOST_CPPSRCS += $(srcdir)/module.cc
HOST_CPPSRCS += $(srcdir)/path_helper.cc
HOST_CPPSRCS += $(srcdir)/string_conversion.cc
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
COMPUTED_HOST_CFLAGS += -DXP_UNIX -DNDEBUG=1 -DTRIMMED=1 -DHAVE_A_OUT_H -DHAVE_RUST_DEMANGLE -I/home/kieran/Documents/browser/toolkit/crashreporter/google-breakpad/src/common -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/toolkit/crashreporter/google-breakpad/src/common -I/home/kieran/Documents/browser/toolkit/crashreporter/rust -I/home/kieran/Documents/browser/toolkit/crashreporter/breakpad-client -I/home/kieran/Documents/browser/toolkit/crashreporter/google-breakpad/src -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/include
COMPUTED_HOST_CXXFLAGS += -DNDEBUG=1 -DTRIMMED=1 -DHAVE_A_OUT_H -DHAVE_RUST_DEMANGLE -O2 -g -I/home/kieran/Documents/browser/toolkit/crashreporter/google-breakpad/src/common -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/toolkit/crashreporter/google-breakpad/src/common -I/home/kieran/Documents/browser/toolkit/crashreporter/rust -I/home/kieran/Documents/browser/toolkit/crashreporter/breakpad-client -I/home/kieran/Documents/browser/toolkit/crashreporter/google-breakpad/src -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/include
COMPUTED_HOST_CXX_LDFLAGS += -O2 -g
COMPUTED_HOST_C_LDFLAGS += -DXP_UNIX
