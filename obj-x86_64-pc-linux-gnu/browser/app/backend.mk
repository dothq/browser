# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DXPCOM_GLUE -DMOZ_HAS_MOZGLUE '-DFIREFOX_ICO="/home/kieran/Documents/browser/browser/branding/dot/firefox.ico"' '-DDOCUMENT_ICO="/home/kieran/Documents/browser/browser/branding/dot/document.ico"' '-DNEWWINDOW_ICO="/home/kieran/Documents/browser/browser/branding/dot/newwindow.ico"' '-DNEWTAB_ICO="/home/kieran/Documents/browser/browser/branding/dot/newtab.ico"' '-DPBMODE_ICO="/home/kieran/Documents/browser/browser/branding/dot/pbmode.ico"'
FINAL_TARGET = $(if $(XPI_NAME),$(DIST)/xpi-stage/$(XPI_NAME),$(DIST)/bin)$(DIST_SUBDIR:%=/%)
LOCAL_INCLUDES += -I$(topobjdir)/build
LOCAL_INCLUDES += -I$(topsrcdir)/toolkit/xre
LOCAL_INCLUDES += -I$(topsrcdir)/xpcom/base
LOCAL_INCLUDES += -I$(topsrcdir)/xpcom/build
CPPSRCS += $(srcdir)/nsBrowserApp.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
