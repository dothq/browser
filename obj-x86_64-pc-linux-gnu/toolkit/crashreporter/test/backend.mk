# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DSHARED_LIBRARY=libtestcrasher.so -DNO_STABS_SUPPORT
FINAL_TARGET = $(DEPTH)/_tests/xpcshell/toolkit/crashreporter/test
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/crashreporter/breakpad-client
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/crashreporter/google-breakpad/src
CPPSRCS += $(srcdir)/ExceptionThrower.cpp
ExceptionThrower.cpp_FLAGS += -fexceptions
NO_PROFILE_GUIDED_OPTIMIZE := 1
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
