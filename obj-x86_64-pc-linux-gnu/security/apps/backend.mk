# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DOS_POSIX=1 -DOS_LINUX=1 -DNSS_ENABLE_ECC=True '-DDLL_PREFIX="lib"' '-DDLL_SUFFIX=".so"'
include $(topsrcdir)/config/AB_rCD.mk
xpcshell.inc: $(MDDEPDIR)/xpcshell.inc.stub ;
GARBAGE += xpcshell.inc
GARBAGE += $(MDDEPDIR)/xpcshell.inc.stub
EXTRA_MDDEPEND_FILES += $(MDDEPDIR)/xpcshell.inc.pp
$(MDDEPDIR)/xpcshell.inc.stub: /home/kieran/Documents/browser/security/apps/gen_cert_header.py $(topsrcdir)/security/manager/ssl/tests/unit/test_signed_apps/xpcshellTestRoot.der
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/security/apps/gen_cert_header.py xpcshellRoot xpcshell.inc $(MDDEPDIR)/xpcshell.inc.pp $(MDDEPDIR)/xpcshell.inc.stub $(topsrcdir)/security/manager/ssl/tests/unit/test_signed_apps/xpcshellTestRoot.der)
	@$(TOUCH) $@

addons-public.inc: $(MDDEPDIR)/addons-public.inc.stub ;
GARBAGE += addons-public.inc
GARBAGE += $(MDDEPDIR)/addons-public.inc.stub
EXTRA_MDDEPEND_FILES += $(MDDEPDIR)/addons-public.inc.pp
$(MDDEPDIR)/addons-public.inc.stub: /home/kieran/Documents/browser/security/apps/gen_cert_header.py $(srcdir)/addons-public.crt
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/security/apps/gen_cert_header.py addonsPublicRoot addons-public.inc $(MDDEPDIR)/addons-public.inc.pp $(MDDEPDIR)/addons-public.inc.stub $(srcdir)/addons-public.crt)
	@$(TOUCH) $@

addons-public-intermediate.inc: $(MDDEPDIR)/addons-public-intermediate.inc.stub ;
GARBAGE += addons-public-intermediate.inc
GARBAGE += $(MDDEPDIR)/addons-public-intermediate.inc.stub
EXTRA_MDDEPEND_FILES += $(MDDEPDIR)/addons-public-intermediate.inc.pp
$(MDDEPDIR)/addons-public-intermediate.inc.stub: /home/kieran/Documents/browser/security/apps/gen_cert_header.py $(srcdir)/addons-public-intermediate.crt
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/security/apps/gen_cert_header.py addonsPublicIntermediate addons-public-intermediate.inc $(MDDEPDIR)/addons-public-intermediate.inc.pp $(MDDEPDIR)/addons-public-intermediate.inc.stub $(srcdir)/addons-public-intermediate.crt)
	@$(TOUCH) $@

addons-stage.inc: $(MDDEPDIR)/addons-stage.inc.stub ;
GARBAGE += addons-stage.inc
GARBAGE += $(MDDEPDIR)/addons-stage.inc.stub
EXTRA_MDDEPEND_FILES += $(MDDEPDIR)/addons-stage.inc.pp
$(MDDEPDIR)/addons-stage.inc.stub: /home/kieran/Documents/browser/security/apps/gen_cert_header.py $(srcdir)/addons-stage.crt
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/security/apps/gen_cert_header.py addonsStageRoot addons-stage.inc $(MDDEPDIR)/addons-stage.inc.pp $(MDDEPDIR)/addons-stage.inc.stub $(srcdir)/addons-stage.crt)
	@$(TOUCH) $@

LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
LOCAL_INCLUDES += -I$(topsrcdir)/security/certverifier
LOCAL_INCLUDES += -I$(topsrcdir)/security/manager/ssl
LOCAL_INCLUDES += -I$(topsrcdir)/third_party/rust/cose-c/include
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
