# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DOS_POSIX=1 -DOS_LINUX=1
DIRS := mdns tests
include $(topsrcdir)/config/AB_rCD.mk
etld_data.inc: $(MDDEPDIR)/etld_data.inc.stub ;
GARBAGE += etld_data.inc
GARBAGE += $(MDDEPDIR)/etld_data.inc.stub
EXTRA_MDDEPEND_FILES += $(MDDEPDIR)/etld_data.inc.pp
$(MDDEPDIR)/etld_data.inc.stub: /home/kieran/Documents/browser/netwerk/dns/prepare_tlds.py $(srcdir)/effective_tld_names.dat
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/netwerk/dns/prepare_tlds.py main etld_data.inc $(MDDEPDIR)/etld_data.inc.pp $(MDDEPDIR)/etld_data.inc.stub $(srcdir)/effective_tld_names.dat)
	@$(TOUCH) $@

LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
LOCAL_INCLUDES += -I$(topsrcdir)/netwerk/base
LOCAL_INCLUDES += -I$(topsrcdir)/netwerk/protocol/http
CPPSRCS += $(srcdir)/nsEffectiveTLDService.cpp
CPPSRCS += $(srcdir)/nsHostResolver.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
NONRECURSIVE_TARGETS += export
NONRECURSIVE_TARGETS_export += xpidl
NONRECURSIVE_TARGETS_export_xpidl_DIRECTORY = $(DEPTH)/xpcom/xpidl
NONRECURSIVE_TARGETS_export_xpidl_TARGETS += export
