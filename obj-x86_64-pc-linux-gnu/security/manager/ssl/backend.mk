# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DSSL_DISABLE_DEPRECATED_CIPHER_SUITE_NAMES=True -DNSS_ENABLE_ECC=True -DOS_POSIX=1 -DOS_LINUX=1
DIRS := tests
include $(topsrcdir)/config/AB_rCD.mk
nsSTSPreloadListGenerated.inc: $(MDDEPDIR)/nsSTSPreloadListGenerated.inc.stub ;
GARBAGE += nsSTSPreloadListGenerated.inc
GARBAGE += $(MDDEPDIR)/nsSTSPreloadListGenerated.inc.stub
EXTRA_MDDEPEND_FILES += $(MDDEPDIR)/nsSTSPreloadListGenerated.inc.pp
$(MDDEPDIR)/nsSTSPreloadListGenerated.inc.stub: /home/kieran/Documents/browser/xpcom/ds/tools/make_dafsa.py $(srcdir)/nsSTSPreloadList.inc
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/xpcom/ds/tools/make_dafsa.py main nsSTSPreloadListGenerated.inc $(MDDEPDIR)/nsSTSPreloadListGenerated.inc.pp $(MDDEPDIR)/nsSTSPreloadListGenerated.inc.stub $(srcdir)/nsSTSPreloadList.inc)
	@$(TOUCH) $@

LOCAL_INCLUDES += -I$(topsrcdir)/dom/base
LOCAL_INCLUDES += -I$(topsrcdir)/dom/crypto
LOCAL_INCLUDES += -I$(topsrcdir)/netwerk/base
LOCAL_INCLUDES += -I$(topsrcdir)/security/certverifier
LOCAL_INCLUDES += -I$(topobjdir)/dist/public/nss
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
NONRECURSIVE_TARGETS += export
NONRECURSIVE_TARGETS_export += xpidl
NONRECURSIVE_TARGETS_export_xpidl_DIRECTORY = $(DEPTH)/xpcom/xpidl
NONRECURSIVE_TARGETS_export_xpidl_TARGETS += export
