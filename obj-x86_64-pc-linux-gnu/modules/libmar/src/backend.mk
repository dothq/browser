# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1
LOCAL_INCLUDES += -I$(topsrcdir)/other-licenses/nsis/Contrib/CityHash/cityhash
HOST_DEFINES += -DNDEBUG=1 -DTRIMMED=1
HOST_CSRCS += $(srcdir)/mar_create.c
HOST_CSRCS += $(srcdir)/mar_extract.c
HOST_CSRCS += $(srcdir)/mar_read.c
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
COMPUTED_HOST_CFLAGS += -DXP_UNIX -DNDEBUG=1 -DTRIMMED=1 -I/home/kieran/Documents/browser/modules/libmar/src -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/modules/libmar/src -I/home/kieran/Documents/browser/other-licenses/nsis/Contrib/CityHash/cityhash -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/include
COMPUTED_HOST_CXXFLAGS += -DNDEBUG=1 -DTRIMMED=1 -I/home/kieran/Documents/browser/modules/libmar/src -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/modules/libmar/src -I/home/kieran/Documents/browser/other-licenses/nsis/Contrib/CityHash/cityhash -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/include
COMPUTED_HOST_C_LDFLAGS += -DXP_UNIX
