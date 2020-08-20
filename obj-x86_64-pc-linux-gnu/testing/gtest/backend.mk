# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1
DIRS := benchmark mozilla
LOCAL_INCLUDES += -I$(srcdir)/gmock
LOCAL_INCLUDES += -I$(srcdir)/gmock/include
LOCAL_INCLUDES += -I$(srcdir)/gtest
LOCAL_INCLUDES += -I$(srcdir)/gtest/include
CPPSRCS += $(srcdir)/gmock/src/gmock-all.cc
CPPSRCS += $(srcdir)/gtest/src/gtest-all.cc
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
