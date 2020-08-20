# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DOS_POSIX=1 -DOS_LINUX=1
LOCAL_INCLUDES += -I$(topsrcdir)/security/certverifier
LOCAL_INCLUDES += -I$(topsrcdir)/security/manager/ssl
LOCAL_INCLUDES += -I$(topsrcdir)/third_party/rust/cose-c/include
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
CPPSRCS += $(srcdir)/CertDBTest.cpp
CPPSRCS += $(srcdir)/CertListTest.cpp
CPPSRCS += $(srcdir)/CoseTest.cpp
CPPSRCS += $(srcdir)/DataStorageTest.cpp
CPPSRCS += $(srcdir)/DeserializeCertTest.cpp
CPPSRCS += $(srcdir)/MD4Test.cpp
CPPSRCS += $(srcdir)/OCSPCacheTest.cpp
CPPSRCS += $(srcdir)/TLSIntoleranceTest.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
