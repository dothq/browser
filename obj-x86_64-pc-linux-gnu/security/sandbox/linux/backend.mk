# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DNS_NO_XPCOM
DIRS := broker glue interfaces launch reporter gtest
LOCAL_INCLUDES += -I$(srcdir)
LOCAL_INCLUDES += -I$(topsrcdir)/security/sandbox/chromium-shim
LOCAL_INCLUDES += -I$(topsrcdir)/security/sandbox/chromium
LOCAL_INCLUDES += -I$(topsrcdir)/nsprpub
CPPSRCS += $(topsrcdir)/security/sandbox/chromium/base/strings/safe_sprintf.cc
CPPSRCS += $(topsrcdir)/security/sandbox/chromium/base/third_party/icu/icu_utf.cc
CPPSRCS += $(topsrcdir)/security/sandbox/chromium/sandbox/linux/seccomp-bpf/trap.cc
CPPSRCS += $(topsrcdir)/security/sandbox/chromium/sandbox/linux/services/syscall_wrappers.cc
safe_sprintf.cc_FLAGS += -DNDEBUG
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
