# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/mozapps/update/updater
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/mozapps/update/updater/bspatch
HOST_DEFINES += -DNDEBUG=1 -DTRIMMED=1
HOST_CSRCS += $(srcdir)/bsdiff.c
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
COMPUTED_HOST_CFLAGS += -DXP_UNIX -DNDEBUG=1 -DTRIMMED=1 -I/home/kieran/Documents/browser/other-licenses/bsdiff -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/other-licenses/bsdiff -I/home/kieran/Documents/browser/toolkit/mozapps/update/updater -I/home/kieran/Documents/browser/toolkit/mozapps/update/updater/bspatch -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/include
COMPUTED_HOST_CXXFLAGS += -DNDEBUG=1 -DTRIMMED=1 -I/home/kieran/Documents/browser/other-licenses/bsdiff -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/other-licenses/bsdiff -I/home/kieran/Documents/browser/toolkit/mozapps/update/updater -I/home/kieran/Documents/browser/toolkit/mozapps/update/updater/bspatch -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/include
COMPUTED_HOST_C_LDFLAGS += -DXP_UNIX
