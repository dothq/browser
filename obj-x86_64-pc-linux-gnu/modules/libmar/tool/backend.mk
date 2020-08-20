# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 '-DMAR_CHANNEL_ID=""' '-DMOZ_APP_VERSION="80.0"'
CSRCS += $(srcdir)/mar.c
CPPSRCS += $(topsrcdir)/other-licenses/nsis/Contrib/CityHash/cityhash/city.cpp
HOST_DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DNO_SIGN_VERIFY '-DMAR_CHANNEL_ID=""' '-DMOZ_APP_VERSION="80.0"'
HOST_CSRCS += $(srcdir)/mar.c
HOST_CPPSRCS += $(topsrcdir)/other-licenses/nsis/Contrib/CityHash/cityhash/city.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
COMPUTED_HOST_CFLAGS += -DXP_UNIX -DNDEBUG=1 -DTRIMMED=1 -DNO_SIGN_VERIFY '-DMAR_CHANNEL_ID=""' '-DMOZ_APP_VERSION="80.0"' -I/home/kieran/Documents/browser/modules/libmar/tool -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/modules/libmar/tool -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/include
COMPUTED_HOST_CXXFLAGS += -DNDEBUG=1 -DTRIMMED=1 -DNO_SIGN_VERIFY '-DMAR_CHANNEL_ID=""' '-DMOZ_APP_VERSION="80.0"' -I/home/kieran/Documents/browser/modules/libmar/tool -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/modules/libmar/tool -I/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/include
COMPUTED_HOST_C_LDFLAGS += -DXP_UNIX
