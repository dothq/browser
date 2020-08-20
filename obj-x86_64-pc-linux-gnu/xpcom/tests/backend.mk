# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1
DIRS := gtest
LOCAL_INCLUDES += -I$(topsrcdir)/xpcom/ds
CPPSRCS += $(srcdir)/TestArguments.cpp
CPPSRCS += $(srcdir)/TestBlockingProcess.cpp
CPPSRCS += $(srcdir)/TestPRIntN.cpp
CPPSRCS += $(srcdir)/TestQuickReturn.cpp
CPPSRCS += $(srcdir)/TestUnicodeArguments.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
NONRECURSIVE_TARGETS += export
NONRECURSIVE_TARGETS_export += xpidl
NONRECURSIVE_TARGETS_export_xpidl_DIRECTORY = $(DEPTH)/xpcom/xpidl
NONRECURSIVE_TARGETS_export_xpidl_TARGETS += export
