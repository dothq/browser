# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DVR_API_PUBLIC -DMOZ_DISABLE_WINDOWS_WRAPPER -DPOSIX -DLINUX -DLINUX64
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/components/jsoncpp/include
CPPSRCS += $(srcdir)/src/dirtools_public.cpp
CPPSRCS += $(srcdir)/src/envvartools_public.cpp
CPPSRCS += $(srcdir)/src/hmderrors_public.cpp
CPPSRCS += $(srcdir)/src/openvr_api_public.cpp
CPPSRCS += $(srcdir)/src/pathtools_public.cpp
CPPSRCS += $(srcdir)/src/sharedlibtools_public.cpp
CPPSRCS += $(srcdir)/src/strtools_public.cpp
CPPSRCS += $(srcdir)/src/vrpathregistry_public.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
