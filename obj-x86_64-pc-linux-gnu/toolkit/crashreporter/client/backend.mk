# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 '-DBIN_SUFFIX=""' -DNO_STABS_SUPPORT
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/components/jsoncpp/include
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/crashreporter/breakpad-client
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/crashreporter/google-breakpad/src
RCINCLUDE := $(srcdir)/crashreporter.rc
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
