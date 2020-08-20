# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DOS_POSIX=1 -DOS_LINUX=1
include $(topsrcdir)/config/AB_rCD.mk
xpcAccEvents.h: $(MDDEPDIR)/xpcAccEvents.h.stub ;
GARBAGE += xpcAccEvents.h
xpcAccEvents.cpp: $(MDDEPDIR)/xpcAccEvents.h.stub ;
GARBAGE += xpcAccEvents.cpp
GARBAGE += $(MDDEPDIR)/xpcAccEvents.h.stub
EXTRA_MDDEPEND_FILES += $(MDDEPDIR)/xpcAccEvents.h.pp
$(MDDEPDIR)/xpcAccEvents.h.stub: /home/kieran/Documents/browser/accessible/xpcom/AccEventGen.py $(srcdir)/AccEvents.conf
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/accessible/xpcom/AccEventGen.py gen_files xpcAccEvents.h $(MDDEPDIR)/xpcAccEvents.h.pp $(MDDEPDIR)/xpcAccEvents.h.stub $(srcdir)/AccEvents.conf)
	@$(TOUCH) $@

LOCAL_INCLUDES += -I$(topsrcdir)/accessible/base
LOCAL_INCLUDES += -I$(topsrcdir)/accessible/generic
LOCAL_INCLUDES += -I$(topsrcdir)/accessible/atk
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
CPPSRCS += xpcAccEvents.cpp
GARBAGE += xpcAccEvents.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
