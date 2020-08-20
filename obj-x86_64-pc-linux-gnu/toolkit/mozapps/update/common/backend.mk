# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DNS_NO_XPCOM '-DMOZ_APP_BASENAME="Firefox"'
LOCAL_INCLUDES += -I$(topsrcdir)/other-licenses/nsis/Contrib/CityHash/cityhash
CPPSRCS += $(topsrcdir)/other-licenses/nsis/Contrib/CityHash/cityhash/city.cpp
CPPSRCS += $(srcdir)/commonupdatedir.cpp
CPPSRCS += $(srcdir)/readstrings.cpp
CPPSRCS += $(srcdir)/updatecommon.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
