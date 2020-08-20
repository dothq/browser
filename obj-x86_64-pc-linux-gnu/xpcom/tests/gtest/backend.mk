# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DOS_POSIX=1 -DOS_LINUX=1
include $(topsrcdir)/config/AB_rCD.mk
dafsa_test_1.inc: $(MDDEPDIR)/dafsa_test_1.inc.stub ;
GARBAGE += dafsa_test_1.inc
GARBAGE += $(MDDEPDIR)/dafsa_test_1.inc.stub
EXTRA_MDDEPEND_FILES += $(MDDEPDIR)/dafsa_test_1.inc.pp
$(MDDEPDIR)/dafsa_test_1.inc.stub: /home/kieran/Documents/browser/xpcom/ds/tools/make_dafsa.py $(srcdir)/dafsa_test_1.dat
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/xpcom/ds/tools/make_dafsa.py main dafsa_test_1.inc $(MDDEPDIR)/dafsa_test_1.inc.pp $(MDDEPDIR)/dafsa_test_1.inc.stub $(srcdir)/dafsa_test_1.dat)
	@$(TOUCH) $@

LOCAL_INCLUDES += -I$(topsrcdir)/xpcom/base
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
CPPSRCS += $(srcdir)/TestAllocReplacement.cpp
CPPSRCS += $(srcdir)/TestCOMArray.cpp
CPPSRCS += $(srcdir)/TestCOMPtr.cpp
CPPSRCS += $(srcdir)/TestHashtables.cpp
CPPSRCS += $(srcdir)/TestNsRefPtr.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
