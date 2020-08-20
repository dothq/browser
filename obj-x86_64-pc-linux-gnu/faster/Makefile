default:
TOPSRCDIR = /home/kieran/Documents/browser
TOPOBJDIR = /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu
MDDEPDIR = .deps
TOUCH ?= touch
include $(TOPSRCDIR)/config/makefiles/functions.mk
include $(TOPSRCDIR)/config/AB_rCD.mk
AB_CD = en-US
PYTHON3 = /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/_virtualenvs/init_py3/bin/python
ACDEFINES = -DACCESSIBILITY=1 -DATK_MAJOR_VERSION='' -DATK_MINOR_VERSION='' -DATK_REV_VERSION='' -DBROWSER_CHROME_URL=chrome://browser/content/browser.xhtml -DBROWSER_CHROME_URL_QUOTED='"chrome://browser/content/browser.xhtml"' -DBUILD_CTYPES=1 -DCROSS_COMPILE='' -DENABLE_SHARED_MEMORY=1 -DENABLE_SYSTEM_EXTENSION_DIRS=1 -DENABLE_TESTS=1 -DENABLE_WASM_BULKMEM_OPS=1 -DENABLE_WASM_MULTI_VALUE=1 -DENABLE_WASM_REFTYPES=1 -DFORCE_PR_LOG=1 -DGL_PROVIDER_EGL=1 -DGTEST_HAS_RTTI=0 -DHAVE_64BIT_BUILD=1 -DHAVE_FORCEINLINE=1 -DHAVE_LOCALECONV=1 -DJS_64BIT=1 -DJS_CODEGEN_X64=1 -DJS_DEFAULT_JITREPORT_GRANULARITY=3 -DJS_HAS_INTL_API=1 -DJS_PUNBOX64=1 -DMALLOC_H='<malloc.h>' -DMOZILLA_UAVERSION='"80.0"' -DMOZILLA_VERSION='"80.0"' -DMOZILLA_VERSION_U=80.0 -DMOZ_ACCESSIBILITY_ATK=1 -DMOZ_APP_UA_NAME='""' -DMOZ_APP_UA_VERSION='"80.0"' -DMOZ_AV1=1 -DMOZ_BLOCK_PROFILE_DOWNGRADE=1 -DMOZ_BUILD_APP=browser -DMOZ_BUNDLED_FONTS=1 -DMOZ_CRASHREPORTER=1 -DMOZ_DATA_REPORTING=1 -DMOZ_DEDICATED_PROFILES=1 -DMOZ_DISTRIBUTION_ID='"org.mozilla"' -DMOZ_DLL_PREFIX='"lib"' -DMOZ_DLL_SUFFIX='".so"' -DMOZ_ENABLE_DBUS=1 -DMOZ_ENABLE_FORKSERVER=1 -DMOZ_ENABLE_SKIA=1 -DMOZ_FFMPEG=1 -DMOZ_FFVPX=1 -DMOZ_FFVPX_AUDIOONLY=1 -DMOZ_FMP4=1 -DMOZ_GECKO_PROFILER=1 -DMOZ_GECKO_PROFILER_PARSE_ELF=1 -DMOZ_GLUE_IN_PROGRAM=1 -DMOZ_HAS_REMOTE=1 -DMOZ_INSTRUMENT_EVENT_LOOP=1 -DMOZ_LOGGING=1 -DMOZ_MACBUNDLE_ID=org.mozilla.dotbrowser -DMOZ_NEW_CERT_STORAGE=1 -DMOZ_NORMANDY=1 -DMOZ_PEERCONNECTION=1 -DMOZ_PLACES=1 -DMOZ_PROFILER_MEMORY=1 -DMOZ_RAW=1 -DMOZ_SAMPLE_TYPE_FLOAT32=1 -DMOZ_SANDBOX=1 -DMOZ_SCTP=1 -DMOZ_SERVICES_HEALTHREPORT=1 -DMOZ_SRTP=1 -DMOZ_STATIC_JS=1 -DMOZ_TREE_CAIRO=1 -DMOZ_TREE_PIXMAN=1 -DMOZ_UPDATER=1 -DMOZ_UPDATE_CHANNEL=default -DMOZ_USER_DIR='".mozilla"' -DMOZ_VERIFY_MAR_SIGNATURE=1 -DMOZ_VORBIS=1 -DMOZ_WAYLAND=1 -DMOZ_WEBM_ENCODER=1 -DMOZ_WEBRTC=1 -DMOZ_WEBRTC_ASSERT_ALWAYS=1 -DMOZ_WEBRTC_SIGNALING=1 -DMOZ_WEBSPEECH=1 -DMOZ_WEBSPEECH_TEST_BACKEND=1 -DMOZ_WIDGET_GTK=1 -DMOZ_X11=1 -DMOZ_XUL=1 -DNO_NSPR_10_SUPPORT=1 -DNS_PRINTING=1 -DNS_PRINT_PREVIEW=1 -DRELEASE_OR_BETA=1 -DSTATIC_JS_API=1 -DUSE_SKIA=1 -DU_STATIC_IMPLEMENTATION=1 -DU_USING_ICU_NAMESPACE=0 -DXP_LINUX=1 -DXP_UNIX=1
MOZ_BUILD_APP = browser
MOZ_WIDGET_TOOLKIT = gtk
INSTALL_MANIFESTS = dist/bin dist/bin/browser dist/bin/browser/features/formautofill@mozilla.org dist/bin/browser/features/webcompat-reporter@mozilla.org dist/bin/browser/localization dist/bin/gmp-clearkey/0.1 dist/bin/gmp-fake/1.0 dist/bin/gmp-fakeopenh264/1.0 dist/bin/localization
install-dist/bin: $(TOPOBJDIR)/build/application.ini $(TOPOBJDIR)/toolkit/components/featuregates/feature_definitions.json $(TOPOBJDIR)/toolkit/components/telemetry/EventArtifactDefinitions.json $(TOPOBJDIR)/toolkit/components/telemetry/ScalarArtifactDefinitions.json $(TOPOBJDIR)/toolkit/locales/locale.ini $(TOPOBJDIR)/toolkit/locales/multilocale.txt $(TOPOBJDIR)/toolkit/locales/update.locale $(TOPOBJDIR)/toolkit/mozapps/extensions/built_in_addons.json
install-dist/bin/browser: $(TOPOBJDIR)/browser/base/content/aboutNetErrorCodes.js $(TOPOBJDIR)/browser/locales/bookmarks.html $(TOPOBJDIR)/browser/locales/updater.ini $(TOPOBJDIR)/devtools/shared/webconsole/reserved-js-words.js
include $(TOPSRCDIR)/config/faster/rules.mk
$(TOPOBJDIR)/mozilla-config.h: $(TOPOBJDIR)/$(MDDEPDIR)/mozilla-config.h.stub ;
GARBAGE += $(TOPOBJDIR)/mozilla-config.h
GARBAGE += $(TOPOBJDIR)/$(MDDEPDIR)/mozilla-config.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/$(MDDEPDIR)/mozilla-config.h.pp
$(TOPOBJDIR)/$(MDDEPDIR)/mozilla-config.h.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/process_define_files.py $(TOPSRCDIR)/mozilla-config.h.in
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/process_define_files.py process_define_file $(TOPOBJDIR)/mozilla-config.h $(TOPOBJDIR)/$(MDDEPDIR)/mozilla-config.h.pp $(TOPOBJDIR)/$(MDDEPDIR)/mozilla-config.h.stub $(TOPSRCDIR)/mozilla-config.h.in)
	@$(TOUCH) $@

$(TOPOBJDIR)/buildid.h: $(TOPOBJDIR)/$(MDDEPDIR)/buildid.h.stub ;
GARBAGE += $(TOPOBJDIR)/buildid.h
GARBAGE += $(TOPOBJDIR)/$(MDDEPDIR)/buildid.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/$(MDDEPDIR)/buildid.h.pp
$(TOPOBJDIR)/$(MDDEPDIR)/buildid.h.stub: /home/kieran/Documents/browser/build/variables.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/build/variables.py buildid_header $(TOPOBJDIR)/buildid.h $(TOPOBJDIR)/$(MDDEPDIR)/buildid.h.pp $(TOPOBJDIR)/$(MDDEPDIR)/buildid.h.stub)
	@$(TOUCH) $@

$(TOPOBJDIR)/source-repo.h: $(TOPOBJDIR)/$(MDDEPDIR)/source-repo.h.stub ;
GARBAGE += $(TOPOBJDIR)/source-repo.h
GARBAGE += $(TOPOBJDIR)/$(MDDEPDIR)/source-repo.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/$(MDDEPDIR)/source-repo.h.pp
$(TOPOBJDIR)/$(MDDEPDIR)/source-repo.h.stub: /home/kieran/Documents/browser/build/variables.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/build/variables.py source_repo_header $(TOPOBJDIR)/source-repo.h $(TOPOBJDIR)/$(MDDEPDIR)/source-repo.h.pp $(TOPOBJDIR)/$(MDDEPDIR)/source-repo.h.stub)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/build/$(MDDEPDIR)/application.ini.stub
$(TOPOBJDIR)/build/application.ini: $(TOPOBJDIR)/build/$(MDDEPDIR)/application.ini.stub ;
GARBAGE += $(TOPOBJDIR)/build/application.ini
GARBAGE += $(TOPOBJDIR)/build/$(MDDEPDIR)/application.ini.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/build/$(MDDEPDIR)/application.ini.pp
$(TOPOBJDIR)/build/$(MDDEPDIR)/application.ini.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/preprocessor.py $(TOPSRCDIR)/build/application.ini.in
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/preprocessor.py generate $(TOPOBJDIR)/build/application.ini $(TOPOBJDIR)/build/$(MDDEPDIR)/application.ini.pp $(TOPOBJDIR)/build/$(MDDEPDIR)/application.ini.stub $(TOPSRCDIR)/build/application.ini.in -DGRE_MILESTONE=80.0 -DMAR_CHANNEL_ID= -DMOZ_APPUPDATE_HOST=aus5.mozilla.org -DMOZ_APP_BASENAME=Firefox '-DMOZ_APP_DISPLAYNAME=Dot Browser' '-DMOZ_APP_ID={ec8030f7-c20a-464f-9b0e-13a3a9e97384}' -DMOZ_APP_REMOTINGNAME=firefox -DMOZ_APP_VENDOR=Mozilla -DMOZ_APP_VERSION=80.0 -DMOZ_BUILD_APP_IS_BROWSER=1 -DMOZ_CRASHREPORTER=1 -DMOZ_PROFILE_MIGRATOR=1 -DMOZ_UPDATER=1 -DTOPOBJDIR=/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu)
	@$(TOUCH) $@

$(TOPOBJDIR)/build/application.ini.h: $(TOPOBJDIR)/build/$(MDDEPDIR)/application.ini.h.stub ;
GARBAGE += $(TOPOBJDIR)/build/application.ini.h
GARBAGE += $(TOPOBJDIR)/build/$(MDDEPDIR)/application.ini.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/build/$(MDDEPDIR)/application.ini.h.pp
$(TOPOBJDIR)/build/$(MDDEPDIR)/application.ini.h.stub: /home/kieran/Documents/browser/build/appini_header.py $(TOPOBJDIR)/build/application.ini
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/build/appini_header.py main $(TOPOBJDIR)/build/application.ini.h $(TOPOBJDIR)/build/$(MDDEPDIR)/application.ini.h.pp $(TOPOBJDIR)/build/$(MDDEPDIR)/application.ini.h.stub $(TOPOBJDIR)/build/application.ini)
	@$(TOUCH) $@

$(TOPOBJDIR)/security/apps/xpcshell.inc: $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/xpcshell.inc.stub ;
GARBAGE += $(TOPOBJDIR)/security/apps/xpcshell.inc
GARBAGE += $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/xpcshell.inc.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/xpcshell.inc.pp
$(TOPOBJDIR)/security/apps/$(MDDEPDIR)/xpcshell.inc.stub: /home/kieran/Documents/browser/security/apps/gen_cert_header.py $(TOPSRCDIR)/security/manager/ssl/tests/unit/test_signed_apps/xpcshellTestRoot.der
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/security/apps/gen_cert_header.py xpcshellRoot $(TOPOBJDIR)/security/apps/xpcshell.inc $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/xpcshell.inc.pp $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/xpcshell.inc.stub $(TOPSRCDIR)/security/manager/ssl/tests/unit/test_signed_apps/xpcshellTestRoot.der)
	@$(TOUCH) $@

$(TOPOBJDIR)/security/apps/addons-public.inc: $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-public.inc.stub ;
GARBAGE += $(TOPOBJDIR)/security/apps/addons-public.inc
GARBAGE += $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-public.inc.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-public.inc.pp
$(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-public.inc.stub: /home/kieran/Documents/browser/security/apps/gen_cert_header.py $(TOPSRCDIR)/security/apps/addons-public.crt
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/security/apps/gen_cert_header.py addonsPublicRoot $(TOPOBJDIR)/security/apps/addons-public.inc $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-public.inc.pp $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-public.inc.stub $(TOPSRCDIR)/security/apps/addons-public.crt)
	@$(TOUCH) $@

$(TOPOBJDIR)/security/apps/addons-public-intermediate.inc: $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-public-intermediate.inc.stub ;
GARBAGE += $(TOPOBJDIR)/security/apps/addons-public-intermediate.inc
GARBAGE += $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-public-intermediate.inc.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-public-intermediate.inc.pp
$(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-public-intermediate.inc.stub: /home/kieran/Documents/browser/security/apps/gen_cert_header.py $(TOPSRCDIR)/security/apps/addons-public-intermediate.crt
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/security/apps/gen_cert_header.py addonsPublicIntermediate $(TOPOBJDIR)/security/apps/addons-public-intermediate.inc $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-public-intermediate.inc.pp $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-public-intermediate.inc.stub $(TOPSRCDIR)/security/apps/addons-public-intermediate.crt)
	@$(TOUCH) $@

$(TOPOBJDIR)/security/apps/addons-stage.inc: $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-stage.inc.stub ;
GARBAGE += $(TOPOBJDIR)/security/apps/addons-stage.inc
GARBAGE += $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-stage.inc.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-stage.inc.pp
$(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-stage.inc.stub: /home/kieran/Documents/browser/security/apps/gen_cert_header.py $(TOPSRCDIR)/security/apps/addons-stage.crt
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/security/apps/gen_cert_header.py addonsStageRoot $(TOPOBJDIR)/security/apps/addons-stage.inc $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-stage.inc.pp $(TOPOBJDIR)/security/apps/$(MDDEPDIR)/addons-stage.inc.stub $(TOPSRCDIR)/security/apps/addons-stage.crt)
	@$(TOUCH) $@

$(TOPOBJDIR)/xpcom/xpcom-config.h: $(TOPOBJDIR)/xpcom/$(MDDEPDIR)/xpcom-config.h.stub ;
GARBAGE += $(TOPOBJDIR)/xpcom/xpcom-config.h
GARBAGE += $(TOPOBJDIR)/xpcom/$(MDDEPDIR)/xpcom-config.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/xpcom/$(MDDEPDIR)/xpcom-config.h.pp
$(TOPOBJDIR)/xpcom/$(MDDEPDIR)/xpcom-config.h.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/process_define_files.py $(TOPSRCDIR)/xpcom/xpcom-config.h.in
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/process_define_files.py process_define_file $(TOPOBJDIR)/xpcom/xpcom-config.h $(TOPOBJDIR)/xpcom/$(MDDEPDIR)/xpcom-config.h.pp $(TOPOBJDIR)/xpcom/$(MDDEPDIR)/xpcom-config.h.stub $(TOPSRCDIR)/xpcom/xpcom-config.h.in)
	@$(TOUCH) $@

$(TOPOBJDIR)/xpcom/xpcom-private.h: $(TOPOBJDIR)/xpcom/$(MDDEPDIR)/xpcom-private.h.stub ;
GARBAGE += $(TOPOBJDIR)/xpcom/xpcom-private.h
GARBAGE += $(TOPOBJDIR)/xpcom/$(MDDEPDIR)/xpcom-private.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/xpcom/$(MDDEPDIR)/xpcom-private.h.pp
$(TOPOBJDIR)/xpcom/$(MDDEPDIR)/xpcom-private.h.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/process_define_files.py $(TOPSRCDIR)/xpcom/xpcom-private.h.in
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/process_define_files.py process_define_file $(TOPOBJDIR)/xpcom/xpcom-private.h $(TOPOBJDIR)/xpcom/$(MDDEPDIR)/xpcom-private.h.pp $(TOPOBJDIR)/xpcom/$(MDDEPDIR)/xpcom-private.h.stub $(TOPSRCDIR)/xpcom/xpcom-private.h.in)
	@$(TOUCH) $@

$(TOPOBJDIR)/xpcom/idl-parser/xpidl/xpidl.stub: $(TOPOBJDIR)/xpcom/idl-parser/xpidl/$(MDDEPDIR)/xpidl.stub.stub ;
GARBAGE += $(TOPOBJDIR)/xpcom/idl-parser/xpidl/xpidl.stub
GARBAGE += $(TOPOBJDIR)/xpcom/idl-parser/xpidl/$(MDDEPDIR)/xpidl.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/xpcom/idl-parser/xpidl/$(MDDEPDIR)/xpidl.stub.pp
$(TOPOBJDIR)/xpcom/idl-parser/xpidl/$(MDDEPDIR)/xpidl.stub.stub: /home/kieran/Documents/browser/xpcom/idl-parser/xpidl/header.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/xpcom/idl-parser/xpidl/header.py main $(TOPOBJDIR)/xpcom/idl-parser/xpidl/xpidl.stub $(TOPOBJDIR)/xpcom/idl-parser/xpidl/$(MDDEPDIR)/xpidl.stub.pp $(TOPOBJDIR)/xpcom/idl-parser/xpidl/$(MDDEPDIR)/xpidl.stub.stub)
	@$(TOUCH) $@

$(TOPOBJDIR)/xpcom/base/ErrorList.h: $(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/ErrorList.h.stub ;
GARBAGE += $(TOPOBJDIR)/xpcom/base/ErrorList.h
GARBAGE += $(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/ErrorList.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/ErrorList.h.pp
$(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/ErrorList.h.stub: /home/kieran/Documents/browser/xpcom/base/ErrorList.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/xpcom/base/ErrorList.py error_list_h $(TOPOBJDIR)/xpcom/base/ErrorList.h $(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/ErrorList.h.pp $(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/ErrorList.h.stub)
	@$(TOUCH) $@

$(TOPOBJDIR)/xpcom/base/ErrorNamesInternal.h: $(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/ErrorNamesInternal.h.stub ;
GARBAGE += $(TOPOBJDIR)/xpcom/base/ErrorNamesInternal.h
GARBAGE += $(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/ErrorNamesInternal.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/ErrorNamesInternal.h.pp
$(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/ErrorNamesInternal.h.stub: /home/kieran/Documents/browser/xpcom/base/ErrorList.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/xpcom/base/ErrorList.py error_names_internal_h $(TOPOBJDIR)/xpcom/base/ErrorNamesInternal.h $(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/ErrorNamesInternal.h.pp $(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/ErrorNamesInternal.h.stub)
	@$(TOUCH) $@

$(TOPOBJDIR)/xpcom/base/error_list.rs: $(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/error_list.rs.stub ;
GARBAGE += $(TOPOBJDIR)/xpcom/base/error_list.rs
GARBAGE += $(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/error_list.rs.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/error_list.rs.pp
$(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/error_list.rs.stub: /home/kieran/Documents/browser/xpcom/base/ErrorList.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/xpcom/base/ErrorList.py error_list_rs $(TOPOBJDIR)/xpcom/base/error_list.rs $(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/error_list.rs.pp $(TOPOBJDIR)/xpcom/base/$(MDDEPDIR)/error_list.rs.stub)
	@$(TOUCH) $@

$(TOPOBJDIR)/xpcom/ds/nsGkAtomList.h: $(TOPOBJDIR)/xpcom/ds/$(MDDEPDIR)/nsGkAtomList.h.stub ;
GARBAGE += $(TOPOBJDIR)/xpcom/ds/nsGkAtomList.h
GARBAGE += $(TOPOBJDIR)/xpcom/ds/$(MDDEPDIR)/nsGkAtomList.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/xpcom/ds/$(MDDEPDIR)/nsGkAtomList.h.pp
$(TOPOBJDIR)/xpcom/ds/$(MDDEPDIR)/nsGkAtomList.h.stub: /home/kieran/Documents/browser/xpcom/ds/StaticAtoms.py $(TOPSRCDIR)/xpcom/ds/Atom.py $(TOPSRCDIR)/xpcom/ds/HTMLAtoms.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/xpcom/ds/StaticAtoms.py generate_nsgkatomlist_h $(TOPOBJDIR)/xpcom/ds/nsGkAtomList.h $(TOPOBJDIR)/xpcom/ds/$(MDDEPDIR)/nsGkAtomList.h.pp $(TOPOBJDIR)/xpcom/ds/$(MDDEPDIR)/nsGkAtomList.h.stub $(TOPSRCDIR)/xpcom/ds/Atom.py $(TOPSRCDIR)/xpcom/ds/HTMLAtoms.py)
	@$(TOUCH) $@

$(TOPOBJDIR)/xpcom/ds/nsGkAtomConsts.h: $(TOPOBJDIR)/xpcom/ds/$(MDDEPDIR)/nsGkAtomConsts.h.stub ;
GARBAGE += $(TOPOBJDIR)/xpcom/ds/nsGkAtomConsts.h
GARBAGE += $(TOPOBJDIR)/xpcom/ds/$(MDDEPDIR)/nsGkAtomConsts.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/xpcom/ds/$(MDDEPDIR)/nsGkAtomConsts.h.pp
$(TOPOBJDIR)/xpcom/ds/$(MDDEPDIR)/nsGkAtomConsts.h.stub: /home/kieran/Documents/browser/xpcom/ds/StaticAtoms.py $(TOPSRCDIR)/xpcom/ds/Atom.py $(TOPSRCDIR)/xpcom/ds/HTMLAtoms.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/xpcom/ds/StaticAtoms.py generate_nsgkatomconsts_h $(TOPOBJDIR)/xpcom/ds/nsGkAtomConsts.h $(TOPOBJDIR)/xpcom/ds/$(MDDEPDIR)/nsGkAtomConsts.h.pp $(TOPOBJDIR)/xpcom/ds/$(MDDEPDIR)/nsGkAtomConsts.h.stub $(TOPSRCDIR)/xpcom/ds/Atom.py $(TOPSRCDIR)/xpcom/ds/HTMLAtoms.py)
	@$(TOUCH) $@

$(TOPOBJDIR)/xpcom/build/Services.cpp: $(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/Services.cpp.stub ;
GARBAGE += $(TOPOBJDIR)/xpcom/build/Services.cpp
GARBAGE += $(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/Services.cpp.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/Services.cpp.pp
$(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/Services.cpp.stub: /home/kieran/Documents/browser/xpcom/build/Services.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/xpcom/build/Services.py services_cpp $(TOPOBJDIR)/xpcom/build/Services.cpp $(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/Services.cpp.pp $(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/Services.cpp.stub)
	@$(TOUCH) $@

$(TOPOBJDIR)/xpcom/build/Services.h: $(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/Services.h.stub ;
GARBAGE += $(TOPOBJDIR)/xpcom/build/Services.h
GARBAGE += $(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/Services.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/Services.h.pp
$(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/Services.h.stub: /home/kieran/Documents/browser/xpcom/build/Services.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/xpcom/build/Services.py services_h $(TOPOBJDIR)/xpcom/build/Services.h $(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/Services.h.pp $(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/Services.h.stub)
	@$(TOUCH) $@

$(TOPOBJDIR)/xpcom/build/services.rs: $(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/services.rs.stub ;
GARBAGE += $(TOPOBJDIR)/xpcom/build/services.rs
GARBAGE += $(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/services.rs.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/services.rs.pp
$(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/services.rs.stub: /home/kieran/Documents/browser/xpcom/build/Services.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/xpcom/build/Services.py services_rs $(TOPOBJDIR)/xpcom/build/services.rs $(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/services.rs.pp $(TOPOBJDIR)/xpcom/build/$(MDDEPDIR)/services.rs.stub)
	@$(TOUCH) $@

$(TOPOBJDIR)/xpcom/tests/gtest/dafsa_test_1.inc: $(TOPOBJDIR)/xpcom/tests/gtest/$(MDDEPDIR)/dafsa_test_1.inc.stub ;
GARBAGE += $(TOPOBJDIR)/xpcom/tests/gtest/dafsa_test_1.inc
GARBAGE += $(TOPOBJDIR)/xpcom/tests/gtest/$(MDDEPDIR)/dafsa_test_1.inc.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/xpcom/tests/gtest/$(MDDEPDIR)/dafsa_test_1.inc.pp
$(TOPOBJDIR)/xpcom/tests/gtest/$(MDDEPDIR)/dafsa_test_1.inc.stub: /home/kieran/Documents/browser/xpcom/ds/tools/make_dafsa.py $(TOPSRCDIR)/xpcom/tests/gtest/dafsa_test_1.dat
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/xpcom/ds/tools/make_dafsa.py main $(TOPOBJDIR)/xpcom/tests/gtest/dafsa_test_1.inc $(TOPOBJDIR)/xpcom/tests/gtest/$(MDDEPDIR)/dafsa_test_1.inc.pp $(TOPOBJDIR)/xpcom/tests/gtest/$(MDDEPDIR)/dafsa_test_1.inc.stub $(TOPSRCDIR)/xpcom/tests/gtest/dafsa_test_1.dat)
	@$(TOUCH) $@

$(TOPOBJDIR)/modules/libpref/init/StaticPrefListAll.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefListAll.h
$(TOPOBJDIR)/modules/libpref/StaticPrefsAll.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefsAll.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_accessibility.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_accessibility.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_alerts.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_alerts.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_apz.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_apz.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_beacon.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_beacon.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_bidi.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_bidi.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_browser.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_browser.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_canvas.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_canvas.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_channelclassifier.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_channelclassifier.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_clipboard.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_clipboard.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_content.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_content.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_converter.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_converter.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_datareporting.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_datareporting.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_device.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_device.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_devtools.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_devtools.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_docshell.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_docshell.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_dom.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_dom.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_editor.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_editor.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_extensions.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_extensions.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_findbar.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_findbar.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_fission.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_fission.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_font.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_font.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_full_screen_api.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_full_screen_api.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_general.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_general.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_geo.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_geo.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_gfx.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_gfx.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_gl.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_gl.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_html5.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_html5.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_idle_period.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_idle_period.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_image.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_image.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_intl.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_intl.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_javascript.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_javascript.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_layers.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_layers.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_layout.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_layout.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_mathml.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_mathml.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_media.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_media.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_mousewheel.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_mousewheel.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_network.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_network.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_nglayout.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_nglayout.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_page_load.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_page_load.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_permissions.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_permissions.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_plain_text.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_plain_text.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_plugin.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_plugin.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_plugins.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_plugins.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_preferences.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_preferences.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_print.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_print.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_privacy.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_privacy.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_prompts.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_prompts.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_security.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_security.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_slider.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_slider.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_storage.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_storage.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_svg.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_svg.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_telemetry.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_telemetry.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_test.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_test.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_threads.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_threads.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_toolkit.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_toolkit.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_ui.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_ui.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_urlclassifier.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_urlclassifier.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_view_source.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_view_source.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_webgl.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_webgl.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_widget.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_widget.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_xul.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_xul.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefList_zoom.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefList_zoom.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_accessibility.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_accessibility.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_alerts.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_alerts.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_apz.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_apz.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_beacon.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_beacon.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_bidi.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_bidi.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_browser.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_browser.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_canvas.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_canvas.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_channelclassifier.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_channelclassifier.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_clipboard.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_clipboard.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_content.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_content.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_converter.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_converter.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_datareporting.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_datareporting.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_device.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_device.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_devtools.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_devtools.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_docshell.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_docshell.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_dom.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_dom.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_editor.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_editor.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_extensions.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_extensions.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_findbar.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_findbar.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_fission.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_fission.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_font.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_font.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_full_screen_api.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_full_screen_api.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_general.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_general.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_geo.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_geo.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_gfx.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_gfx.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_gl.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_gl.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_html5.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_html5.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_idle_period.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_idle_period.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_image.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_image.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_intl.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_intl.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_javascript.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_javascript.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_layers.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_layers.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_layout.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_layout.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_mathml.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_mathml.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_media.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_media.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_mousewheel.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_mousewheel.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_network.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_network.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_nglayout.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_nglayout.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_page_load.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_page_load.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_permissions.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_permissions.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_plain_text.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_plain_text.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_plugin.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_plugin.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_plugins.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_plugins.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_preferences.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_preferences.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_print.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_print.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_privacy.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_privacy.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_prompts.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_prompts.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_security.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_security.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_slider.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_slider.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_storage.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_storage.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_svg.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_svg.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_telemetry.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_telemetry.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_test.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_test.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_threads.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_threads.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_toolkit.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_toolkit.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_ui.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_ui.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_urlclassifier.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_urlclassifier.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_view_source.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_view_source.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_webgl.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_webgl.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_widget.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_widget.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_xul.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_xul.h
$(TOPOBJDIR)/modules/libpref/StaticPrefs_zoom.h: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/StaticPrefs_zoom.h
$(TOPOBJDIR)/modules/libpref/init/StaticPrefsCGetters.cpp: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/StaticPrefsCGetters.cpp
$(TOPOBJDIR)/modules/libpref/static_prefs.rs: $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub ;
GARBAGE += $(TOPOBJDIR)/modules/libpref/static_prefs.rs
GARBAGE += $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.pp
$(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub: /home/kieran/Documents/browser/modules/libpref/init/generate_static_pref_list.py $(TOPSRCDIR)/modules/libpref/init/StaticPrefList.yaml
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/modules/libpref/init/generate_static_pref_list.py emit_code $(TOPOBJDIR)/modules/libpref/init/StaticPrefListAll.h $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.pp $(TOPOBJDIR)/modules/libpref/init/$(MDDEPDIR)/StaticPrefListAll.h.stub $(TOPSRCDIR)/modules/libpref/init/StaticPrefList.yaml)
	@$(TOUCH) $@

$(TOPOBJDIR)/intl/locale/encodingsgroups.properties.h: $(TOPOBJDIR)/intl/locale/$(MDDEPDIR)/encodingsgroups.properties.h.stub ;
GARBAGE += $(TOPOBJDIR)/intl/locale/encodingsgroups.properties.h
GARBAGE += $(TOPOBJDIR)/intl/locale/$(MDDEPDIR)/encodingsgroups.properties.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/intl/locale/$(MDDEPDIR)/encodingsgroups.properties.h.pp
$(TOPOBJDIR)/intl/locale/$(MDDEPDIR)/encodingsgroups.properties.h.stub: /home/kieran/Documents/browser/intl/locale/props2arrays.py $(TOPSRCDIR)/intl/locale/encodingsgroups.properties
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/intl/locale/props2arrays.py main $(TOPOBJDIR)/intl/locale/encodingsgroups.properties.h $(TOPOBJDIR)/intl/locale/$(MDDEPDIR)/encodingsgroups.properties.h.pp $(TOPOBJDIR)/intl/locale/$(MDDEPDIR)/encodingsgroups.properties.h.stub $(TOPSRCDIR)/intl/locale/encodingsgroups.properties)
	@$(TOUCH) $@

$(TOPOBJDIR)/netwerk/dns/etld_data.inc: $(TOPOBJDIR)/netwerk/dns/$(MDDEPDIR)/etld_data.inc.stub ;
GARBAGE += $(TOPOBJDIR)/netwerk/dns/etld_data.inc
GARBAGE += $(TOPOBJDIR)/netwerk/dns/$(MDDEPDIR)/etld_data.inc.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/netwerk/dns/$(MDDEPDIR)/etld_data.inc.pp
$(TOPOBJDIR)/netwerk/dns/$(MDDEPDIR)/etld_data.inc.stub: /home/kieran/Documents/browser/netwerk/dns/prepare_tlds.py $(TOPSRCDIR)/netwerk/dns/effective_tld_names.dat
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/netwerk/dns/prepare_tlds.py main $(TOPOBJDIR)/netwerk/dns/etld_data.inc $(TOPOBJDIR)/netwerk/dns/$(MDDEPDIR)/etld_data.inc.pp $(TOPOBJDIR)/netwerk/dns/$(MDDEPDIR)/etld_data.inc.stub $(TOPSRCDIR)/netwerk/dns/effective_tld_names.dat)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/netwerk/dns/tests/unit/data/$(MDDEPDIR)/fake_remote_dafsa.bin.stub
$(TOPOBJDIR)/netwerk/dns/tests/unit/data/fake_remote_dafsa.bin: $(TOPOBJDIR)/netwerk/dns/tests/unit/data/$(MDDEPDIR)/fake_remote_dafsa.bin.stub ;
GARBAGE += $(TOPOBJDIR)/netwerk/dns/tests/unit/data/fake_remote_dafsa.bin
GARBAGE += $(TOPOBJDIR)/netwerk/dns/tests/unit/data/$(MDDEPDIR)/fake_remote_dafsa.bin.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/netwerk/dns/tests/unit/data/$(MDDEPDIR)/fake_remote_dafsa.bin.pp
$(TOPOBJDIR)/netwerk/dns/tests/unit/data/$(MDDEPDIR)/fake_remote_dafsa.bin.stub: /home/kieran/Documents/browser/netwerk/dns/prepare_tlds.py $(TOPSRCDIR)/netwerk/dns/tests/unit/data/fake_public_suffix_list.dat
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/netwerk/dns/prepare_tlds.py main $(TOPOBJDIR)/netwerk/dns/tests/unit/data/fake_remote_dafsa.bin $(TOPOBJDIR)/netwerk/dns/tests/unit/data/$(MDDEPDIR)/fake_remote_dafsa.bin.pp $(TOPOBJDIR)/netwerk/dns/tests/unit/data/$(MDDEPDIR)/fake_remote_dafsa.bin.stub $(TOPSRCDIR)/netwerk/dns/tests/unit/data/fake_public_suffix_list.dat bin)
	@$(TOUCH) $@

$(TOPOBJDIR)/dom/base/UseCounterList.h: $(TOPOBJDIR)/dom/base/$(MDDEPDIR)/UseCounterList.h.stub ;
GARBAGE += $(TOPOBJDIR)/dom/base/UseCounterList.h
GARBAGE += $(TOPOBJDIR)/dom/base/$(MDDEPDIR)/UseCounterList.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/dom/base/$(MDDEPDIR)/UseCounterList.h.pp
$(TOPOBJDIR)/dom/base/$(MDDEPDIR)/UseCounterList.h.stub: /home/kieran/Documents/browser/dom/base/gen-usecounters.py $(TOPSRCDIR)/dom/base/UseCounters.conf
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/dom/base/gen-usecounters.py use_counter_list $(TOPOBJDIR)/dom/base/UseCounterList.h $(TOPOBJDIR)/dom/base/$(MDDEPDIR)/UseCounterList.h.pp $(TOPOBJDIR)/dom/base/$(MDDEPDIR)/UseCounterList.h.stub $(TOPSRCDIR)/dom/base/UseCounters.conf)
	@$(TOUCH) $@

$(TOPOBJDIR)/dom/base/UseCounterWorkerList.h: $(TOPOBJDIR)/dom/base/$(MDDEPDIR)/UseCounterWorkerList.h.stub ;
GARBAGE += $(TOPOBJDIR)/dom/base/UseCounterWorkerList.h
GARBAGE += $(TOPOBJDIR)/dom/base/$(MDDEPDIR)/UseCounterWorkerList.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/dom/base/$(MDDEPDIR)/UseCounterWorkerList.h.pp
$(TOPOBJDIR)/dom/base/$(MDDEPDIR)/UseCounterWorkerList.h.stub: /home/kieran/Documents/browser/dom/base/gen-usecounters.py $(TOPSRCDIR)/dom/base/UseCountersWorker.conf
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/dom/base/gen-usecounters.py use_counter_list $(TOPOBJDIR)/dom/base/UseCounterWorkerList.h $(TOPOBJDIR)/dom/base/$(MDDEPDIR)/UseCounterWorkerList.h.pp $(TOPOBJDIR)/dom/base/$(MDDEPDIR)/UseCounterWorkerList.h.stub $(TOPSRCDIR)/dom/base/UseCountersWorker.conf)
	@$(TOUCH) $@

$(TOPOBJDIR)/layout/style/nsCSSPropertyID.h: $(TOPOBJDIR)/layout/style/$(MDDEPDIR)/nsCSSPropertyID.h.stub ;
GARBAGE += $(TOPOBJDIR)/layout/style/nsCSSPropertyID.h
GARBAGE += $(TOPOBJDIR)/layout/style/$(MDDEPDIR)/nsCSSPropertyID.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/layout/style/$(MDDEPDIR)/nsCSSPropertyID.h.pp
$(TOPOBJDIR)/layout/style/$(MDDEPDIR)/nsCSSPropertyID.h.stub: /home/kieran/Documents/browser/layout/style/GenerateCSSPropertyID.py $(TOPSRCDIR)/layout/style/nsCSSPropertyID.h.in $(TOPOBJDIR)/layout/style/ServoCSSPropList.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/layout/style/GenerateCSSPropertyID.py generate $(TOPOBJDIR)/layout/style/nsCSSPropertyID.h $(TOPOBJDIR)/layout/style/$(MDDEPDIR)/nsCSSPropertyID.h.pp $(TOPOBJDIR)/layout/style/$(MDDEPDIR)/nsCSSPropertyID.h.stub $(TOPSRCDIR)/layout/style/nsCSSPropertyID.h.in $(TOPOBJDIR)/layout/style/ServoCSSPropList.py)
	@$(TOUCH) $@

$(TOPOBJDIR)/layout/style/ServoCSSPropList.h: $(TOPOBJDIR)/layout/style/$(MDDEPDIR)/ServoCSSPropList.h.stub ;
GARBAGE += $(TOPOBJDIR)/layout/style/ServoCSSPropList.h
GARBAGE += $(TOPOBJDIR)/layout/style/$(MDDEPDIR)/ServoCSSPropList.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/layout/style/$(MDDEPDIR)/ServoCSSPropList.h.pp
$(TOPOBJDIR)/layout/style/$(MDDEPDIR)/ServoCSSPropList.h.stub: /home/kieran/Documents/browser/layout/style/GenerateServoCSSPropList.py $(TOPOBJDIR)/layout/style/ServoCSSPropList.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/layout/style/GenerateServoCSSPropList.py generate_header $(TOPOBJDIR)/layout/style/ServoCSSPropList.h $(TOPOBJDIR)/layout/style/$(MDDEPDIR)/ServoCSSPropList.h.pp $(TOPOBJDIR)/layout/style/$(MDDEPDIR)/ServoCSSPropList.h.stub $(TOPOBJDIR)/layout/style/ServoCSSPropList.py)
	@$(TOUCH) $@

$(TOPOBJDIR)/layout/style/ServoCSSPropList.py: $(TOPOBJDIR)/layout/style/$(MDDEPDIR)/ServoCSSPropList.py.stub ;
GARBAGE += $(TOPOBJDIR)/layout/style/ServoCSSPropList.py
GARBAGE += $(TOPOBJDIR)/layout/style/$(MDDEPDIR)/ServoCSSPropList.py.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/layout/style/$(MDDEPDIR)/ServoCSSPropList.py.pp
$(TOPOBJDIR)/layout/style/$(MDDEPDIR)/ServoCSSPropList.py.stub: /home/kieran/Documents/browser/layout/style/GenerateServoCSSPropList.py $(TOPSRCDIR)/layout/style/ServoCSSPropList.mako.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/layout/style/GenerateServoCSSPropList.py generate_data $(TOPOBJDIR)/layout/style/ServoCSSPropList.py $(TOPOBJDIR)/layout/style/$(MDDEPDIR)/ServoCSSPropList.py.pp $(TOPOBJDIR)/layout/style/$(MDDEPDIR)/ServoCSSPropList.py.stub $(TOPSRCDIR)/layout/style/ServoCSSPropList.mako.py)
	@$(TOUCH) $@

$(TOPOBJDIR)/layout/style/test/gtest/ExampleStylesheet.h: $(TOPOBJDIR)/layout/style/test/gtest/$(MDDEPDIR)/ExampleStylesheet.h.stub ;
GARBAGE += $(TOPOBJDIR)/layout/style/test/gtest/ExampleStylesheet.h
GARBAGE += $(TOPOBJDIR)/layout/style/test/gtest/$(MDDEPDIR)/ExampleStylesheet.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/layout/style/test/gtest/$(MDDEPDIR)/ExampleStylesheet.h.pp
$(TOPOBJDIR)/layout/style/test/gtest/$(MDDEPDIR)/ExampleStylesheet.h.stub: /home/kieran/Documents/browser/layout/style/test/gtest/generate_example_stylesheet.py $(TOPSRCDIR)/layout/style/test/gtest/example.css
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/layout/style/test/gtest/generate_example_stylesheet.py main $(TOPOBJDIR)/layout/style/test/gtest/ExampleStylesheet.h $(TOPOBJDIR)/layout/style/test/gtest/$(MDDEPDIR)/ExampleStylesheet.h.pp $(TOPOBJDIR)/layout/style/test/gtest/$(MDDEPDIR)/ExampleStylesheet.h.stub $(TOPSRCDIR)/layout/style/test/gtest/example.css)
	@$(TOUCH) $@

$(TOPOBJDIR)/layout/generic/FrameIdList.h: $(TOPOBJDIR)/layout/generic/$(MDDEPDIR)/FrameIdList.h.stub ;
GARBAGE += $(TOPOBJDIR)/layout/generic/FrameIdList.h
GARBAGE += $(TOPOBJDIR)/layout/generic/$(MDDEPDIR)/FrameIdList.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/layout/generic/$(MDDEPDIR)/FrameIdList.h.pp
$(TOPOBJDIR)/layout/generic/$(MDDEPDIR)/FrameIdList.h.stub: /home/kieran/Documents/browser/layout/generic/GenerateFrameLists.py $(TOPSRCDIR)/layout/generic/FrameClasses.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/layout/generic/GenerateFrameLists.py generate_frame_id_list_h $(TOPOBJDIR)/layout/generic/FrameIdList.h $(TOPOBJDIR)/layout/generic/$(MDDEPDIR)/FrameIdList.h.pp $(TOPOBJDIR)/layout/generic/$(MDDEPDIR)/FrameIdList.h.stub $(TOPSRCDIR)/layout/generic/FrameClasses.py)
	@$(TOUCH) $@

$(TOPOBJDIR)/layout/generic/FrameTypeList.h: $(TOPOBJDIR)/layout/generic/$(MDDEPDIR)/FrameTypeList.h.stub ;
GARBAGE += $(TOPOBJDIR)/layout/generic/FrameTypeList.h
GARBAGE += $(TOPOBJDIR)/layout/generic/$(MDDEPDIR)/FrameTypeList.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/layout/generic/$(MDDEPDIR)/FrameTypeList.h.pp
$(TOPOBJDIR)/layout/generic/$(MDDEPDIR)/FrameTypeList.h.stub: /home/kieran/Documents/browser/layout/generic/GenerateFrameLists.py $(TOPSRCDIR)/layout/generic/FrameClasses.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/layout/generic/GenerateFrameLists.py generate_frame_type_list_h $(TOPOBJDIR)/layout/generic/FrameTypeList.h $(TOPOBJDIR)/layout/generic/$(MDDEPDIR)/FrameTypeList.h.pp $(TOPOBJDIR)/layout/generic/$(MDDEPDIR)/FrameTypeList.h.stub $(TOPSRCDIR)/layout/generic/FrameClasses.py)
	@$(TOUCH) $@

$(TOPOBJDIR)/accessible/xpcom/xpcAccEvents.h: $(TOPOBJDIR)/accessible/xpcom/$(MDDEPDIR)/xpcAccEvents.h.stub ;
GARBAGE += $(TOPOBJDIR)/accessible/xpcom/xpcAccEvents.h
$(TOPOBJDIR)/accessible/xpcom/xpcAccEvents.cpp: $(TOPOBJDIR)/accessible/xpcom/$(MDDEPDIR)/xpcAccEvents.h.stub ;
GARBAGE += $(TOPOBJDIR)/accessible/xpcom/xpcAccEvents.cpp
GARBAGE += $(TOPOBJDIR)/accessible/xpcom/$(MDDEPDIR)/xpcAccEvents.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/accessible/xpcom/$(MDDEPDIR)/xpcAccEvents.h.pp
$(TOPOBJDIR)/accessible/xpcom/$(MDDEPDIR)/xpcAccEvents.h.stub: /home/kieran/Documents/browser/accessible/xpcom/AccEventGen.py $(TOPSRCDIR)/accessible/xpcom/AccEvents.conf
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/accessible/xpcom/AccEventGen.py gen_files $(TOPOBJDIR)/accessible/xpcom/xpcAccEvents.h $(TOPOBJDIR)/accessible/xpcom/$(MDDEPDIR)/xpcAccEvents.h.pp $(TOPOBJDIR)/accessible/xpcom/$(MDDEPDIR)/xpcAccEvents.h.stub $(TOPSRCDIR)/accessible/xpcom/AccEvents.conf)
	@$(TOUCH) $@

$(TOPOBJDIR)/security/manager/ssl/nsSTSPreloadListGenerated.inc: $(TOPOBJDIR)/security/manager/ssl/$(MDDEPDIR)/nsSTSPreloadListGenerated.inc.stub ;
GARBAGE += $(TOPOBJDIR)/security/manager/ssl/nsSTSPreloadListGenerated.inc
GARBAGE += $(TOPOBJDIR)/security/manager/ssl/$(MDDEPDIR)/nsSTSPreloadListGenerated.inc.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/security/manager/ssl/$(MDDEPDIR)/nsSTSPreloadListGenerated.inc.pp
$(TOPOBJDIR)/security/manager/ssl/$(MDDEPDIR)/nsSTSPreloadListGenerated.inc.stub: /home/kieran/Documents/browser/xpcom/ds/tools/make_dafsa.py $(TOPSRCDIR)/security/manager/ssl/nsSTSPreloadList.inc
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/xpcom/ds/tools/make_dafsa.py main $(TOPOBJDIR)/security/manager/ssl/nsSTSPreloadListGenerated.inc $(TOPOBJDIR)/security/manager/ssl/$(MDDEPDIR)/nsSTSPreloadListGenerated.inc.pp $(TOPOBJDIR)/security/manager/ssl/$(MDDEPDIR)/nsSTSPreloadListGenerated.inc.stub $(TOPSRCDIR)/security/manager/ssl/nsSTSPreloadList.inc)
	@$(TOUCH) $@

$(TOPOBJDIR)/security/manager/ssl/tests/unit/pkcs11testmodule/libpkcs11testmodule.so.symbols: $(TOPOBJDIR)/security/manager/ssl/tests/unit/pkcs11testmodule/$(MDDEPDIR)/libpkcs11testmodule.so.symbols.stub ;
GARBAGE += $(TOPOBJDIR)/security/manager/ssl/tests/unit/pkcs11testmodule/libpkcs11testmodule.so.symbols
GARBAGE += $(TOPOBJDIR)/security/manager/ssl/tests/unit/pkcs11testmodule/$(MDDEPDIR)/libpkcs11testmodule.so.symbols.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/security/manager/ssl/tests/unit/pkcs11testmodule/$(MDDEPDIR)/libpkcs11testmodule.so.symbols.pp
$(TOPOBJDIR)/security/manager/ssl/tests/unit/pkcs11testmodule/$(MDDEPDIR)/libpkcs11testmodule.so.symbols.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/generate_symbols_file.py $(TOPSRCDIR)/security/manager/ssl/tests/unit/pkcs11testmodule/pkcs11testmodule.symbols
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/generate_symbols_file.py generate_symbols_file $(TOPOBJDIR)/security/manager/ssl/tests/unit/pkcs11testmodule/libpkcs11testmodule.so.symbols $(TOPOBJDIR)/security/manager/ssl/tests/unit/pkcs11testmodule/$(MDDEPDIR)/libpkcs11testmodule.so.symbols.pp $(TOPOBJDIR)/security/manager/ssl/tests/unit/pkcs11testmodule/$(MDDEPDIR)/libpkcs11testmodule.so.symbols.stub $(TOPSRCDIR)/security/manager/ssl/tests/unit/pkcs11testmodule/pkcs11testmodule.symbols )
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/components/featuregates/$(MDDEPDIR)/feature_definitions.json.stub
$(TOPOBJDIR)/toolkit/components/featuregates/feature_definitions.json: $(TOPOBJDIR)/toolkit/components/featuregates/$(MDDEPDIR)/feature_definitions.json.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/components/featuregates/feature_definitions.json
GARBAGE += $(TOPOBJDIR)/toolkit/components/featuregates/$(MDDEPDIR)/feature_definitions.json.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/components/featuregates/$(MDDEPDIR)/feature_definitions.json.pp
$(TOPOBJDIR)/toolkit/components/featuregates/$(MDDEPDIR)/feature_definitions.json.stub: /home/kieran/Documents/browser/toolkit/components/featuregates/gen_feature_definitions.py $(TOPSRCDIR)/toolkit/components/featuregates/Features.toml
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/components/featuregates/gen_feature_definitions.py main $(TOPOBJDIR)/toolkit/components/featuregates/feature_definitions.json $(TOPOBJDIR)/toolkit/components/featuregates/$(MDDEPDIR)/feature_definitions.json.pp $(TOPOBJDIR)/toolkit/components/featuregates/$(MDDEPDIR)/feature_definitions.json.stub $(TOPSRCDIR)/toolkit/components/featuregates/Features.toml)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/components/telemetry/TelemetryHistogramData.inc: $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramData.inc.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryHistogramData.inc
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramData.inc.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramData.inc.pp
$(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramData.inc.stub: /home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_histogram_data.py $(TOPSRCDIR)/toolkit/components/telemetry/Histograms.json $(TOPSRCDIR)/dom/base/UseCounters.conf $(TOPSRCDIR)/dom/base/nsDeprecatedOperationList.h $(TOPOBJDIR)/layout/style/ServoCSSPropList.py $(TOPSRCDIR)/servo/components/style/properties/counted_unknown_properties.py $(TOPSRCDIR)/dom/base/UseCountersWorker.conf
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_histogram_data.py main $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryHistogramData.inc $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramData.inc.pp $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramData.inc.stub $(TOPSRCDIR)/toolkit/components/telemetry/Histograms.json $(TOPSRCDIR)/dom/base/UseCounters.conf $(TOPSRCDIR)/dom/base/nsDeprecatedOperationList.h $(TOPOBJDIR)/layout/style/ServoCSSPropList.py $(TOPSRCDIR)/servo/components/style/properties/counted_unknown_properties.py $(TOPSRCDIR)/dom/base/UseCountersWorker.conf)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/components/telemetry/TelemetryHistogramEnums.h: $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramEnums.h.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryHistogramEnums.h
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramEnums.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramEnums.h.pp
$(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramEnums.h.stub: /home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_histogram_enum.py $(TOPSRCDIR)/toolkit/components/telemetry/Histograms.json $(TOPSRCDIR)/dom/base/UseCounters.conf $(TOPSRCDIR)/dom/base/nsDeprecatedOperationList.h $(TOPOBJDIR)/layout/style/ServoCSSPropList.py $(TOPSRCDIR)/servo/components/style/properties/counted_unknown_properties.py $(TOPSRCDIR)/dom/base/UseCountersWorker.conf
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_histogram_enum.py main $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryHistogramEnums.h $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramEnums.h.pp $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramEnums.h.stub $(TOPSRCDIR)/toolkit/components/telemetry/Histograms.json $(TOPSRCDIR)/dom/base/UseCounters.conf $(TOPSRCDIR)/dom/base/nsDeprecatedOperationList.h $(TOPOBJDIR)/layout/style/ServoCSSPropList.py $(TOPSRCDIR)/servo/components/style/properties/counted_unknown_properties.py $(TOPSRCDIR)/dom/base/UseCountersWorker.conf)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/components/telemetry/TelemetryHistogramNameMap.h: $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramNameMap.h.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryHistogramNameMap.h
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramNameMap.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramNameMap.h.pp
$(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramNameMap.h.stub: /home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_histogram_phf.py $(TOPSRCDIR)/toolkit/components/telemetry/Histograms.json $(TOPSRCDIR)/dom/base/UseCounters.conf $(TOPSRCDIR)/dom/base/nsDeprecatedOperationList.h $(TOPOBJDIR)/layout/style/ServoCSSPropList.py $(TOPSRCDIR)/servo/components/style/properties/counted_unknown_properties.py $(TOPSRCDIR)/dom/base/UseCountersWorker.conf
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_histogram_phf.py main $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryHistogramNameMap.h $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramNameMap.h.pp $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryHistogramNameMap.h.stub $(TOPSRCDIR)/toolkit/components/telemetry/Histograms.json $(TOPSRCDIR)/dom/base/UseCounters.conf $(TOPSRCDIR)/dom/base/nsDeprecatedOperationList.h $(TOPOBJDIR)/layout/style/ServoCSSPropList.py $(TOPSRCDIR)/servo/components/style/properties/counted_unknown_properties.py $(TOPSRCDIR)/dom/base/UseCountersWorker.conf)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/components/telemetry/TelemetryScalarData.h: $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryScalarData.h.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryScalarData.h
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryScalarData.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryScalarData.h.pp
$(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryScalarData.h.stub: /home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_scalar_data.py $(TOPSRCDIR)/toolkit/components/telemetry/Scalars.yaml
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_scalar_data.py main $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryScalarData.h $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryScalarData.h.pp $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryScalarData.h.stub $(TOPSRCDIR)/toolkit/components/telemetry/Scalars.yaml)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/components/telemetry/TelemetryScalarEnums.h: $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryScalarEnums.h.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryScalarEnums.h
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryScalarEnums.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryScalarEnums.h.pp
$(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryScalarEnums.h.stub: /home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_scalar_enum.py $(TOPSRCDIR)/toolkit/components/telemetry/Scalars.yaml
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_scalar_enum.py main $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryScalarEnums.h $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryScalarEnums.h.pp $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryScalarEnums.h.stub $(TOPSRCDIR)/toolkit/components/telemetry/Scalars.yaml)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/ScalarArtifactDefinitions.json.stub
$(TOPOBJDIR)/toolkit/components/telemetry/ScalarArtifactDefinitions.json: $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/ScalarArtifactDefinitions.json.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/ScalarArtifactDefinitions.json
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/ScalarArtifactDefinitions.json.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/ScalarArtifactDefinitions.json.pp
$(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/ScalarArtifactDefinitions.json.stub: /home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_scalar_data.py $(TOPSRCDIR)/toolkit/components/telemetry/Scalars.yaml
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_scalar_data.py generate_JSON_definitions $(TOPOBJDIR)/toolkit/components/telemetry/ScalarArtifactDefinitions.json $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/ScalarArtifactDefinitions.json.pp $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/ScalarArtifactDefinitions.json.stub $(TOPSRCDIR)/toolkit/components/telemetry/Scalars.yaml)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/components/telemetry/TelemetryEventData.h: $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryEventData.h.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryEventData.h
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryEventData.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryEventData.h.pp
$(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryEventData.h.stub: /home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_event_data.py $(TOPSRCDIR)/toolkit/components/telemetry/Events.yaml
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_event_data.py main $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryEventData.h $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryEventData.h.pp $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryEventData.h.stub $(TOPSRCDIR)/toolkit/components/telemetry/Events.yaml)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/components/telemetry/TelemetryEventEnums.h: $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryEventEnums.h.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryEventEnums.h
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryEventEnums.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryEventEnums.h.pp
$(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryEventEnums.h.stub: /home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_event_enum.py $(TOPSRCDIR)/toolkit/components/telemetry/Events.yaml
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_event_enum.py main $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryEventEnums.h $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryEventEnums.h.pp $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryEventEnums.h.stub $(TOPSRCDIR)/toolkit/components/telemetry/Events.yaml)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/EventArtifactDefinitions.json.stub
$(TOPOBJDIR)/toolkit/components/telemetry/EventArtifactDefinitions.json: $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/EventArtifactDefinitions.json.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/EventArtifactDefinitions.json
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/EventArtifactDefinitions.json.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/EventArtifactDefinitions.json.pp
$(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/EventArtifactDefinitions.json.stub: /home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_event_data.py $(TOPSRCDIR)/toolkit/components/telemetry/Events.yaml
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_event_data.py generate_JSON_definitions $(TOPOBJDIR)/toolkit/components/telemetry/EventArtifactDefinitions.json $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/EventArtifactDefinitions.json.pp $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/EventArtifactDefinitions.json.stub $(TOPSRCDIR)/toolkit/components/telemetry/Events.yaml)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/components/telemetry/TelemetryProcessEnums.h: $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryProcessEnums.h.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryProcessEnums.h
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryProcessEnums.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryProcessEnums.h.pp
$(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryProcessEnums.h.stub: /home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_process_enum.py $(TOPSRCDIR)/toolkit/components/telemetry/Processes.yaml
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_process_enum.py main $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryProcessEnums.h $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryProcessEnums.h.pp $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryProcessEnums.h.stub $(TOPSRCDIR)/toolkit/components/telemetry/Processes.yaml)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/components/telemetry/TelemetryProcessData.h: $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryProcessData.h.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryProcessData.h
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryProcessData.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryProcessData.h.pp
$(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryProcessData.h.stub: /home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_process_data.py $(TOPSRCDIR)/toolkit/components/telemetry/Processes.yaml
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_process_data.py main $(TOPOBJDIR)/toolkit/components/telemetry/TelemetryProcessData.h $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryProcessData.h.pp $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/TelemetryProcessData.h.stub $(TOPSRCDIR)/toolkit/components/telemetry/Processes.yaml)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/glean_checks.stub
$(TOPOBJDIR)/toolkit/components/telemetry/glean_checks: $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/glean_checks.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/glean_checks
GARBAGE += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/glean_checks.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/glean_checks.pp
$(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/glean_checks.stub: /home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/run_glean_parser.py $(TOPSRCDIR)/toolkit/components/telemetry/geckoview/streaming/metrics.yaml
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/run_glean_parser.py main $(TOPOBJDIR)/toolkit/components/telemetry/glean_checks $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/glean_checks.pp $(TOPOBJDIR)/toolkit/components/telemetry/$(MDDEPDIR)/glean_checks.stub $(TOPSRCDIR)/toolkit/components/telemetry/geckoview/streaming/metrics.yaml)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-a-1.0.xpi.stub
$(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/normandydriver-a-1.0.xpi: $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-a-1.0.xpi.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/normandydriver-a-1.0.xpi
GARBAGE += $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-a-1.0.xpi.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-a-1.0.xpi.pp
$(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-a-1.0.xpi.stub: /home/kieran/Documents/browser/toolkit/components/normandy/test/create_xpi.py $(TOPSRCDIR)/toolkit/components/normandy/test/browser/addons/normandydriver-a-1.0
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/components/normandy/test/create_xpi.py main $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/normandydriver-a-1.0.xpi $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-a-1.0.xpi.pp $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-a-1.0.xpi.stub $(TOPSRCDIR)/toolkit/components/normandy/test/browser/addons/normandydriver-a-1.0)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-b-1.0.xpi.stub
$(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/normandydriver-b-1.0.xpi: $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-b-1.0.xpi.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/normandydriver-b-1.0.xpi
GARBAGE += $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-b-1.0.xpi.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-b-1.0.xpi.pp
$(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-b-1.0.xpi.stub: /home/kieran/Documents/browser/toolkit/components/normandy/test/create_xpi.py $(TOPSRCDIR)/toolkit/components/normandy/test/browser/addons/normandydriver-b-1.0
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/components/normandy/test/create_xpi.py main $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/normandydriver-b-1.0.xpi $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-b-1.0.xpi.pp $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-b-1.0.xpi.stub $(TOPSRCDIR)/toolkit/components/normandy/test/browser/addons/normandydriver-b-1.0)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-a-2.0.xpi.stub
$(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/normandydriver-a-2.0.xpi: $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-a-2.0.xpi.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/normandydriver-a-2.0.xpi
GARBAGE += $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-a-2.0.xpi.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-a-2.0.xpi.pp
$(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-a-2.0.xpi.stub: /home/kieran/Documents/browser/toolkit/components/normandy/test/create_xpi.py $(TOPSRCDIR)/toolkit/components/normandy/test/browser/addons/normandydriver-a-2.0
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/components/normandy/test/create_xpi.py main $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/normandydriver-a-2.0.xpi $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-a-2.0.xpi.pp $(TOPOBJDIR)/toolkit/components/normandy/test/browser/addons/$(MDDEPDIR)/normandydriver-a-2.0.xpi.stub $(TOPSRCDIR)/toolkit/components/normandy/test/browser/addons/normandydriver-a-2.0)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/crashreporter/CrashAnnotations.h: $(TOPOBJDIR)/toolkit/crashreporter/$(MDDEPDIR)/CrashAnnotations.h.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/crashreporter/CrashAnnotations.h
GARBAGE += $(TOPOBJDIR)/toolkit/crashreporter/$(MDDEPDIR)/CrashAnnotations.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/crashreporter/$(MDDEPDIR)/CrashAnnotations.h.pp
$(TOPOBJDIR)/toolkit/crashreporter/$(MDDEPDIR)/CrashAnnotations.h.stub: /home/kieran/Documents/browser/toolkit/crashreporter/generate_crash_reporter_sources.py $(TOPSRCDIR)/toolkit/crashreporter/CrashAnnotations.h.in $(TOPSRCDIR)/toolkit/crashreporter/CrashAnnotations.yaml
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/crashreporter/generate_crash_reporter_sources.py emit_header $(TOPOBJDIR)/toolkit/crashreporter/CrashAnnotations.h $(TOPOBJDIR)/toolkit/crashreporter/$(MDDEPDIR)/CrashAnnotations.h.pp $(TOPOBJDIR)/toolkit/crashreporter/$(MDDEPDIR)/CrashAnnotations.h.stub $(TOPSRCDIR)/toolkit/crashreporter/CrashAnnotations.h.in $(TOPSRCDIR)/toolkit/crashreporter/CrashAnnotations.yaml)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/multilocale.txt.stub
$(TOPOBJDIR)/toolkit/locales/multilocale.txt: $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/multilocale.txt.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/locales/multilocale.txt
GARBAGE += $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/multilocale.txt.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/multilocale.txt.pp
$(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/multilocale.txt.stub: /home/kieran/Documents/browser/toolkit/locales/gen_multilocale.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/locales/gen_multilocale.py main $(TOPOBJDIR)/toolkit/locales/multilocale.txt $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/multilocale.txt.pp $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/multilocale.txt.stub)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/update.locale.stub
$(TOPOBJDIR)/toolkit/locales/update.locale: $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/update.locale.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/locales/update.locale
GARBAGE += $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/update.locale.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/update.locale.pp
$(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/update.locale.stub: /home/kieran/Documents/browser/toolkit/locales/generate_update_locale.py $(if $(IS_LANGUAGE_REPACK),FORCE)
	$(REPORT_BUILD)
	$(call py_action,file_generate,--locale=$(AB_CD) /home/kieran/Documents/browser/toolkit/locales/generate_update_locale.py main $(TOPOBJDIR)/toolkit/locales/update.locale $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/update.locale.pp $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/update.locale.stub)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/locale.ini.stub
$(TOPOBJDIR)/toolkit/locales/locale.ini: $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/locale.ini.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/locales/locale.ini
GARBAGE += $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/locale.ini.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/locale.ini.pp
$(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/locale.ini.stub: /home/kieran/Documents/browser/toolkit/locales/generate_locale_ini.py $(if $(IS_LANGUAGE_REPACK),FORCE)
	$(REPORT_BUILD)
	$(call py_action,file_generate,--locale=$(AB_CD) /home/kieran/Documents/browser/toolkit/locales/generate_locale_ini.py main $(TOPOBJDIR)/toolkit/locales/locale.ini $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/locale.ini.pp $(TOPOBJDIR)/toolkit/locales/$(MDDEPDIR)/locale.ini.stub)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/mozapps/extensions/$(MDDEPDIR)/built_in_addons.json.stub
$(TOPOBJDIR)/toolkit/mozapps/extensions/built_in_addons.json: $(TOPOBJDIR)/toolkit/mozapps/extensions/$(MDDEPDIR)/built_in_addons.json.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/built_in_addons.json
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/$(MDDEPDIR)/built_in_addons.json.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/extensions/$(MDDEPDIR)/built_in_addons.json.pp
$(TOPOBJDIR)/toolkit/mozapps/extensions/$(MDDEPDIR)/built_in_addons.json.stub: /home/kieran/Documents/browser/toolkit/mozapps/extensions/gen_built_in_addons.py
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/extensions/gen_built_in_addons.py main $(TOPOBJDIR)/toolkit/mozapps/extensions/built_in_addons.json $(TOPOBJDIR)/toolkit/mozapps/extensions/$(MDDEPDIR)/built_in_addons.json.pp $(TOPOBJDIR)/toolkit/mozapps/extensions/$(MDDEPDIR)/built_in_addons.json.stub --features=browser/features)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop1.xpi.stub
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop1.xpi: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop1.xpi.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop1.xpi
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop1.xpi.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop1.xpi.pp
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop1.xpi.stub: /home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop1
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py main $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop1.xpi $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop1.xpi.pp $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop1.xpi.stub $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop1)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop1.zip.stub
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop1.zip: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop1.zip.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop1.zip
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop1.zip.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop1.zip.pp
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop1.zip.stub: /home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop1
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py main $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop1.zip $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop1.zip.pp $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop1.zip.stub $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop1)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop2.xpi.stub
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop2.xpi: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop2.xpi.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop2.xpi
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop2.xpi.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop2.xpi.pp
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop2.xpi.stub: /home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop2
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py main $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop2.xpi $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop2.xpi.pp $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop2.xpi.stub $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop2)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop2.zip.stub
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop2.zip: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop2.zip.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop2.zip
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop2.zip.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop2.zip.pp
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop2.zip.stub: /home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop2
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py main $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop2.zip $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop2.zip.pp $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop2.zip.stub $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop2)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop_incompat.xpi.stub
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop_incompat.xpi: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop_incompat.xpi.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop_incompat.xpi
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop_incompat.xpi.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop_incompat.xpi.pp
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop_incompat.xpi.stub: /home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop_incompat
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py main $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop_incompat.xpi $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop_incompat.xpi.pp $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop_incompat.xpi.stub $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop_incompat)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop_incompat.zip.stub
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop_incompat.zip: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop_incompat.zip.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop_incompat.zip
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop_incompat.zip.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop_incompat.zip.pp
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop_incompat.zip.stub: /home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop_incompat
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py main $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop_incompat.zip $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop_incompat.zip.pp $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_dragdrop_incompat.zip.stub $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_dragdrop_incompat)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_installssl.xpi.stub
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_installssl.xpi: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_installssl.xpi.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_installssl.xpi
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_installssl.xpi.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_installssl.xpi.pp
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_installssl.xpi.stub: /home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_installssl
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py main $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_installssl.xpi $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_installssl.xpi.pp $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_installssl.xpi.stub $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_installssl)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_installssl.zip.stub
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_installssl.zip: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_installssl.zip.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_installssl.zip
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_installssl.zip.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_installssl.zip.pp
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_installssl.zip.stub: /home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_installssl
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py main $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_installssl.zip $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_installssl.zip.pp $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_installssl.zip.stub $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_installssl)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_theme.xpi.stub
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_theme.xpi: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_theme.xpi.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_theme.xpi
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_theme.xpi.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_theme.xpi.pp
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_theme.xpi.stub: /home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_theme
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py main $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_theme.xpi $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_theme.xpi.pp $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_theme.xpi.stub $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_theme)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_theme.zip.stub
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_theme.zip: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_theme.zip.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_theme.zip
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_theme.zip.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_theme.zip.pp
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_theme.zip.stub: /home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_theme
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py main $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_theme.zip $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_theme.zip.pp $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/browser_theme.zip.stub $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/browser_theme)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/options_signed.xpi.stub
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/options_signed.xpi: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/options_signed.xpi.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/options_signed.xpi
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/options_signed.xpi.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/options_signed.xpi.pp
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/options_signed.xpi.stub: /home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/options_signed
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py main $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/options_signed.xpi $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/options_signed.xpi.pp $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/options_signed.xpi.stub $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/options_signed)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/options_signed.zip.stub
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/options_signed.zip: $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/options_signed.zip.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/options_signed.zip
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/options_signed.zip.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/options_signed.zip.pp
$(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/options_signed.zip.stub: /home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/options_signed
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/extensions/test/create_xpi.py main $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/options_signed.zip $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/options_signed.zip.pp $(TOPOBJDIR)/toolkit/mozapps/extensions/test/browser/addons/$(MDDEPDIR)/options_signed.zip.stub $(TOPSRCDIR)/toolkit/mozapps/extensions/test/browser/addons/options_signed)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/mozapps/update/updater/dep1Cert.h: $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/dep1Cert.h.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/update/updater/dep1Cert.h
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/dep1Cert.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/dep1Cert.h.pp
$(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/dep1Cert.h.stub: /home/kieran/Documents/browser/toolkit/mozapps/update/updater/gen_cert_header.py $(TOPSRCDIR)/toolkit/mozapps/update/updater/dep1.der
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/update/updater/gen_cert_header.py create_header $(TOPOBJDIR)/toolkit/mozapps/update/updater/dep1Cert.h $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/dep1Cert.h.pp $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/dep1Cert.h.stub $(TOPSRCDIR)/toolkit/mozapps/update/updater/dep1.der)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/mozapps/update/updater/dep2Cert.h: $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/dep2Cert.h.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/update/updater/dep2Cert.h
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/dep2Cert.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/dep2Cert.h.pp
$(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/dep2Cert.h.stub: /home/kieran/Documents/browser/toolkit/mozapps/update/updater/gen_cert_header.py $(TOPSRCDIR)/toolkit/mozapps/update/updater/dep2.der
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/update/updater/gen_cert_header.py create_header $(TOPOBJDIR)/toolkit/mozapps/update/updater/dep2Cert.h $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/dep2Cert.h.pp $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/dep2Cert.h.stub $(TOPSRCDIR)/toolkit/mozapps/update/updater/dep2.der)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/mozapps/update/updater/primaryCert.h: $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/primaryCert.h.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/update/updater/primaryCert.h
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/primaryCert.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/primaryCert.h.pp
$(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/primaryCert.h.stub: /home/kieran/Documents/browser/toolkit/mozapps/update/updater/gen_cert_header.py $(TOPSRCDIR)/toolkit/mozapps/update/updater/dep1.der
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/update/updater/gen_cert_header.py create_header $(TOPOBJDIR)/toolkit/mozapps/update/updater/primaryCert.h $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/primaryCert.h.pp $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/primaryCert.h.stub $(TOPSRCDIR)/toolkit/mozapps/update/updater/dep1.der)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/mozapps/update/updater/secondaryCert.h: $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/secondaryCert.h.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/update/updater/secondaryCert.h
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/secondaryCert.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/secondaryCert.h.pp
$(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/secondaryCert.h.stub: /home/kieran/Documents/browser/toolkit/mozapps/update/updater/gen_cert_header.py $(TOPSRCDIR)/toolkit/mozapps/update/updater/dep2.der
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/update/updater/gen_cert_header.py create_header $(TOPOBJDIR)/toolkit/mozapps/update/updater/secondaryCert.h $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/secondaryCert.h.pp $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/secondaryCert.h.stub $(TOPSRCDIR)/toolkit/mozapps/update/updater/dep2.der)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/mozapps/update/updater/xpcshellCert.h: $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/xpcshellCert.h.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/update/updater/xpcshellCert.h
GARBAGE += $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/xpcshellCert.h.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/xpcshellCert.h.pp
$(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/xpcshellCert.h.stub: /home/kieran/Documents/browser/toolkit/mozapps/update/updater/gen_cert_header.py $(TOPSRCDIR)/toolkit/mozapps/update/updater/xpcshellCertificate.der
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/mozapps/update/updater/gen_cert_header.py create_header $(TOPOBJDIR)/toolkit/mozapps/update/updater/xpcshellCert.h $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/xpcshellCert.h.pp $(TOPOBJDIR)/toolkit/mozapps/update/updater/$(MDDEPDIR)/xpcshellCert.h.stub $(TOPSRCDIR)/toolkit/mozapps/update/updater/xpcshellCertificate.der)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/main.development.js: $(TOPOBJDIR)/devtools/client/debugger/src/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/main.development.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/main.js: $(TOPOBJDIR)/devtools/client/debugger/src/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/main.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/vendors.js: $(TOPOBJDIR)/devtools/client/debugger/src/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/vendors.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/main.development.js $(TOPSRCDIR)/devtools/client/debugger/src/main.js $(TOPSRCDIR)/devtools/client/debugger/src/vendors.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/main.development.js $(TOPSRCDIR)/devtools/client/debugger/src/main.js $(TOPSRCDIR)/devtools/client/debugger/src/vendors.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/actions/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/actions/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/event-listeners.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/event-listeners.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/exceptions.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/exceptions.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/expressions.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/expressions.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/file-search.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/file-search.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/navigation.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/navigation.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/preview.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/preview.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/project-text-search.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/project-text-search.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/quick-open.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/quick-open.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/source-actors.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/source-actors.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/source-tree.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/source-tree.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/tabs.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/tabs.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/toolbox.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/toolbox.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/threads.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/threads.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/ui.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/ui.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/event-listeners.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/exceptions.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/expressions.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/file-search.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/index.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/navigation.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/preview.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/project-text-search.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/quick-open.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/source-actors.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/source-tree.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/tabs.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/toolbox.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/threads.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/ui.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/actions/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/actions/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/event-listeners.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/exceptions.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/expressions.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/file-search.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/index.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/navigation.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/preview.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/project-text-search.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/quick-open.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/source-actors.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/source-tree.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/tabs.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/toolbox.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/threads.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/ui.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/actions/ast/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/actions/ast/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/actions/ast/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/actions/ast/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/ast/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/ast/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/ast/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/ast/setInScopeLines.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/ast/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/ast/setInScopeLines.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/actions/ast/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/actions/ast/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/actions/ast/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/ast/index.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/ast/setInScopeLines.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/actions/ast/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/actions/ast/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/actions/ast/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/ast/index.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/ast/setInScopeLines.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/ast)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/actions/breakpoints/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/actions/breakpoints/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/actions/breakpoints/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/actions/breakpoints/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/breakpoints/breakpointPositions.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/breakpoints/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/breakpoints/breakpointPositions.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/breakpoints/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/breakpoints/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/breakpoints/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/breakpoints/modify.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/breakpoints/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/breakpoints/modify.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/breakpoints/remapLocations.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/breakpoints/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/breakpoints/remapLocations.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/breakpoints/syncBreakpoint.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/breakpoints/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/breakpoints/syncBreakpoint.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/actions/breakpoints/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/actions/breakpoints/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/actions/breakpoints/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/breakpoints/breakpointPositions.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/breakpoints/index.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/breakpoints/modify.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/breakpoints/remapLocations.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/breakpoints/syncBreakpoint.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/actions/breakpoints/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/actions/breakpoints/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/actions/breakpoints/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/breakpoints/breakpointPositions.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/breakpoints/index.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/breakpoints/modify.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/breakpoints/remapLocations.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/breakpoints/syncBreakpoint.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/breakpoints)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/breakOnNext.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/breakOnNext.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/commands.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/commands.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/continueToHere.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/continueToHere.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/expandScopes.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/expandScopes.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/fetchFrames.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/fetchFrames.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/fetchScopes.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/fetchScopes.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/inlinePreview.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/inlinePreview.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/mapDisplayNames.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/mapDisplayNames.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/mapFrames.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/mapFrames.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/mapScopes.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/mapScopes.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/paused.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/paused.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/pauseOnExceptions.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/pauseOnExceptions.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/previewPausedLocation.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/previewPausedLocation.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/resumed.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/resumed.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/selectFrame.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/selectFrame.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/highlightCalls.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/highlightCalls.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/skipPausing.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause/skipPausing.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/breakOnNext.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/commands.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/continueToHere.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/expandScopes.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/fetchFrames.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/fetchScopes.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/index.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/inlinePreview.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/mapDisplayNames.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/mapFrames.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/mapScopes.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/paused.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/pauseOnExceptions.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/previewPausedLocation.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/resumed.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/selectFrame.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/highlightCalls.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/skipPausing.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/actions/pause/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/breakOnNext.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/commands.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/continueToHere.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/expandScopes.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/fetchFrames.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/fetchScopes.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/index.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/inlinePreview.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/mapDisplayNames.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/mapFrames.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/mapScopes.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/paused.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/pauseOnExceptions.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/previewPausedLocation.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/resumed.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/selectFrame.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/highlightCalls.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/pause/skipPausing.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/pause)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/sources/blackbox.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/sources/blackbox.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/sources/breakableLines.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/sources/breakableLines.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/sources/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/sources/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/sources/loadSourceText.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/sources/loadSourceText.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/sources/newSources.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/sources/newSources.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/sources/prettyPrint.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/sources/prettyPrint.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/sources/select.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/sources/select.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/sources/symbols.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/sources/symbols.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/sources/blackbox.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/sources/breakableLines.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/sources/index.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/sources/loadSourceText.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/sources/newSources.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/sources/prettyPrint.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/sources/select.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/sources/symbols.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/actions/sources/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/sources/blackbox.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/sources/breakableLines.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/sources/index.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/sources/loadSourceText.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/sources/newSources.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/sources/prettyPrint.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/sources/select.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/sources/symbols.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/sources)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils/create-store.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils/create-store.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/utils/create-store.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/utils/create-store.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/middleware/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/middleware/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/middleware/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/middleware/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils/middleware/context.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/middleware/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils/middleware/context.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils/middleware/history.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/middleware/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils/middleware/history.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils/middleware/log.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/middleware/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils/middleware/log.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils/middleware/promise.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/middleware/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils/middleware/promise.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils/middleware/thunk.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/middleware/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils/middleware/thunk.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils/middleware/timing.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/middleware/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils/middleware/timing.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils/middleware/wait-service.js: $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/middleware/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils/middleware/wait-service.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/middleware/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/middleware/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/middleware/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/utils/middleware/context.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/utils/middleware/history.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/utils/middleware/log.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/utils/middleware/promise.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/utils/middleware/thunk.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/utils/middleware/timing.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/utils/middleware/wait-service.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/middleware/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/middleware/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/actions/utils/middleware/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/utils/middleware/context.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/utils/middleware/history.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/utils/middleware/log.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/utils/middleware/promise.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/utils/middleware/thunk.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/utils/middleware/timing.js $(TOPSRCDIR)/devtools/client/debugger/src/actions/utils/middleware/wait-service.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/actions/utils/middleware)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/client/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/client/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/client/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/client/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/client/firefox.js: $(TOPOBJDIR)/devtools/client/debugger/src/client/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/client/firefox.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/client/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/client/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/client/index.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/client/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/client/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/client/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/client/firefox.js $(TOPSRCDIR)/devtools/client/debugger/src/client/index.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/client/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/client/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/client/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/client/firefox.js $(TOPSRCDIR)/devtools/client/debugger/src/client/index.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/client)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/client/firefox/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/client/firefox/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/client/firefox/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/client/firefox/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/client/firefox/commands.js: $(TOPOBJDIR)/devtools/client/debugger/src/client/firefox/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/client/firefox/commands.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/client/firefox/create.js: $(TOPOBJDIR)/devtools/client/debugger/src/client/firefox/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/client/firefox/create.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/client/firefox/events.js: $(TOPOBJDIR)/devtools/client/debugger/src/client/firefox/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/client/firefox/events.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/client/firefox/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/client/firefox/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/client/firefox/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/client/firefox/commands.js $(TOPSRCDIR)/devtools/client/debugger/src/client/firefox/create.js $(TOPSRCDIR)/devtools/client/debugger/src/client/firefox/events.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/client/firefox/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/client/firefox/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/client/firefox/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/client/firefox/commands.js $(TOPSRCDIR)/devtools/client/debugger/src/client/firefox/create.js $(TOPSRCDIR)/devtools/client/debugger/src/client/firefox/events.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/client/firefox)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/components/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/components/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/components/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/A11yIntention.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/A11yIntention.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/App.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/App.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/ProjectSearch.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/ProjectSearch.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/QuickOpenModal.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/QuickOpenModal.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/ShortcutsModal.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/ShortcutsModal.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/WelcomeBox.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/WelcomeBox.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/components/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/components/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/A11yIntention.js $(TOPSRCDIR)/devtools/client/debugger/src/components/App.js $(TOPSRCDIR)/devtools/client/debugger/src/components/ProjectSearch.js $(TOPSRCDIR)/devtools/client/debugger/src/components/QuickOpenModal.js $(TOPSRCDIR)/devtools/client/debugger/src/components/ShortcutsModal.js $(TOPSRCDIR)/devtools/client/debugger/src/components/WelcomeBox.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/components/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/components/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/components/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/A11yIntention.js $(TOPSRCDIR)/devtools/client/debugger/src/components/App.js $(TOPSRCDIR)/devtools/client/debugger/src/components/ProjectSearch.js $(TOPSRCDIR)/devtools/client/debugger/src/components/QuickOpenModal.js $(TOPSRCDIR)/devtools/client/debugger/src/components/ShortcutsModal.js $(TOPSRCDIR)/devtools/client/debugger/src/components/WelcomeBox.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Breakpoint.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Breakpoint.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Breakpoints.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Breakpoints.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/ColumnBreakpoint.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/ColumnBreakpoint.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/ColumnBreakpoints.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/ColumnBreakpoints.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/ConditionalPanel.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/ConditionalPanel.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/DebugLine.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/DebugLine.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/EditorMenu.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/EditorMenu.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/EmptyLines.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/EmptyLines.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Exception.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Exception.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Exceptions.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Exceptions.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Footer.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Footer.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/HighlightCalls.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/HighlightCalls.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/HighlightLine.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/HighlightLine.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/HighlightLines.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/HighlightLines.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/InlinePreview.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/InlinePreview.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/InlinePreviewRow.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/InlinePreviewRow.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/InlinePreviews.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/InlinePreviews.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/SearchBar.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/SearchBar.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Tab.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Tab.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Tabs.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Tabs.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Breakpoint.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Breakpoints.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/ColumnBreakpoint.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/ColumnBreakpoints.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/ConditionalPanel.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/DebugLine.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/EditorMenu.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/EmptyLines.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Exception.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Exceptions.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Footer.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/HighlightCalls.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/HighlightLine.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/HighlightLines.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/index.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/InlinePreview.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/InlinePreviewRow.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/InlinePreviews.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/SearchBar.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Tab.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Tabs.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Breakpoint.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Breakpoints.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/ColumnBreakpoint.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/ColumnBreakpoints.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/ConditionalPanel.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/DebugLine.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/EditorMenu.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/EmptyLines.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Exception.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Exceptions.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Footer.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/HighlightCalls.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/HighlightLine.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/HighlightLines.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/index.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/InlinePreview.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/InlinePreviewRow.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/InlinePreviews.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/SearchBar.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Tab.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Tabs.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/menus/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/menus/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/menus/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/menus/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/menus/breakpoints.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/menus/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/menus/breakpoints.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/menus/editor.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/menus/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/menus/editor.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/menus/source.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/menus/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/menus/source.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/menus/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/menus/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/menus/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/menus/breakpoints.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/menus/editor.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/menus/source.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/menus/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/menus/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/menus/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/menus/breakpoints.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/menus/editor.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/menus/source.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/menus)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/Preview/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/Preview/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/Preview/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/Preview/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Preview/ExceptionPopup.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/Preview/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Preview/ExceptionPopup.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Preview/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/Preview/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Preview/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Preview/Popup.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/Preview/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Preview/Popup.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/Preview/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/Preview/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/Preview/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Preview/ExceptionPopup.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Preview/index.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Preview/Popup.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/Preview/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/Preview/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/components/Editor/Preview/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Preview/ExceptionPopup.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Preview/index.js $(TOPSRCDIR)/devtools/client/debugger/src/components/Editor/Preview/Popup.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/Editor/Preview)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/components/PrimaryPanes/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/components/PrimaryPanes/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/components/PrimaryPanes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/PrimaryPanes/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/PrimaryPanes/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/PrimaryPanes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/PrimaryPanes/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/PrimaryPanes/Outline.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/PrimaryPanes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/PrimaryPanes/Outline.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/PrimaryPanes/OutlineFilter.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/PrimaryPanes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/PrimaryPanes/OutlineFilter.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/PrimaryPanes/SourcesTree.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/PrimaryPanes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/PrimaryPanes/SourcesTree.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/PrimaryPanes/SourcesTreeItem.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/PrimaryPanes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/PrimaryPanes/SourcesTreeItem.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/PrimaryPanes/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/components/PrimaryPanes/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/components/PrimaryPanes/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/PrimaryPanes/index.js $(TOPSRCDIR)/devtools/client/debugger/src/components/PrimaryPanes/Outline.js $(TOPSRCDIR)/devtools/client/debugger/src/components/PrimaryPanes/OutlineFilter.js $(TOPSRCDIR)/devtools/client/debugger/src/components/PrimaryPanes/SourcesTree.js $(TOPSRCDIR)/devtools/client/debugger/src/components/PrimaryPanes/SourcesTreeItem.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/components/PrimaryPanes/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/components/PrimaryPanes/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/components/PrimaryPanes/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/PrimaryPanes/index.js $(TOPSRCDIR)/devtools/client/debugger/src/components/PrimaryPanes/Outline.js $(TOPSRCDIR)/devtools/client/debugger/src/components/PrimaryPanes/OutlineFilter.js $(TOPSRCDIR)/devtools/client/debugger/src/components/PrimaryPanes/SourcesTree.js $(TOPSRCDIR)/devtools/client/debugger/src/components/PrimaryPanes/SourcesTreeItem.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/PrimaryPanes)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/CommandBar.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/CommandBar.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/DOMMutationBreakpoints.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/DOMMutationBreakpoints.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/EventListeners.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/EventListeners.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Expressions.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Expressions.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Scopes.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Scopes.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Thread.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Thread.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Threads.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Threads.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/WhyPaused.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/WhyPaused.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/XHRBreakpoints.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/XHRBreakpoints.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/CommandBar.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/DOMMutationBreakpoints.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/EventListeners.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Expressions.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/index.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Scopes.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Thread.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Threads.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/WhyPaused.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/XHRBreakpoints.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/CommandBar.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/DOMMutationBreakpoints.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/EventListeners.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Expressions.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/index.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Scopes.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Thread.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Threads.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/WhyPaused.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/XHRBreakpoints.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/Breakpoint.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/Breakpoint.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/BreakpointHeading.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/BreakpointHeading.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/BreakpointHeadingsContextMenu.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/BreakpointHeadingsContextMenu.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/BreakpointsContextMenu.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/BreakpointsContextMenu.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/ExceptionOption.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/ExceptionOption.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/index.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/Breakpoint.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/BreakpointHeading.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/BreakpointHeadingsContextMenu.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/BreakpointsContextMenu.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/ExceptionOption.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/index.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/Breakpoint.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/BreakpointHeading.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/BreakpointHeadingsContextMenu.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/BreakpointsContextMenu.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/ExceptionOption.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/index.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Breakpoints)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Frames/Frame.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Frames/Frame.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Frames/FrameIndent.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Frames/FrameIndent.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Frames/FrameMenu.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Frames/FrameMenu.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Frames/Group.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Frames/Group.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Frames/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Frames/index.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/Frame.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/FrameIndent.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/FrameMenu.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/Group.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/index.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/Frame.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/FrameIndent.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/FrameMenu.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/Group.js $(TOPSRCDIR)/devtools/client/debugger/src/components/SecondaryPanes/Frames/index.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/SecondaryPanes/Frames)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/components/shared/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/AccessibleImage.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/AccessibleImage.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Accordion.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Accordion.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Badge.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Badge.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/BracketArrow.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/BracketArrow.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Dropdown.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Dropdown.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/ManagedTree.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/ManagedTree.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Modal.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Modal.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Popover.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Popover.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/PreviewFunction.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/PreviewFunction.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/ResultList.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/ResultList.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/SearchInput.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/SearchInput.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/SourceIcon.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/SourceIcon.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/SmartGap.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/SmartGap.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/AccessibleImage.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Accordion.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Badge.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/BracketArrow.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Dropdown.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/ManagedTree.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Modal.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Popover.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/PreviewFunction.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/ResultList.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/SearchInput.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/SourceIcon.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/SmartGap.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/AccessibleImage.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Accordion.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Badge.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/BracketArrow.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Dropdown.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/ManagedTree.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Modal.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Popover.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/PreviewFunction.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/ResultList.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/SearchInput.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/SourceIcon.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/SmartGap.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Button/CloseButton.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Button/CloseButton.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Button/CommandBarButton.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Button/CommandBarButton.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Button/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Button/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Button/PaneToggleButton.js: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Button/PaneToggleButton.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Button/CloseButton.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Button/CommandBarButton.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Button/index.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Button/PaneToggleButton.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Button/CloseButton.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Button/CommandBarButton.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Button/index.js $(TOPSRCDIR)/devtools/client/debugger/src/components/shared/Button/PaneToggleButton.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Button)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/styles/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/styles/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/styles/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/styles/node.stub
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/styles/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/styles/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/styles/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/styles/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/styles/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/components/shared/Button/styles/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/components/shared/Button/styles)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/reducers/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/reducers/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/ast.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/ast.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/async-requests.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/async-requests.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/breakpoints.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/breakpoints.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/event-listeners.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/event-listeners.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/exceptions.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/exceptions.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/expressions.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/expressions.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/file-search.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/file-search.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/pause.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/pause.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/pending-breakpoints.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/pending-breakpoints.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/preview.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/preview.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/project-text-search.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/project-text-search.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/quick-open.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/quick-open.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/source-actors.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/source-actors.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/source-tree.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/source-tree.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/sources.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/sources.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/tabs.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/tabs.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/threads.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/threads.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/ui.js: $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers/ui.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/ast.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/async-requests.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/breakpoints.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/event-listeners.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/exceptions.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/expressions.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/file-search.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/index.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/pause.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/pending-breakpoints.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/preview.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/project-text-search.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/quick-open.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/source-actors.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/source-tree.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/sources.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/tabs.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/threads.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/ui.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/reducers/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/reducers/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/ast.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/async-requests.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/breakpoints.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/event-listeners.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/exceptions.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/expressions.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/file-search.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/index.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/pause.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/pending-breakpoints.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/preview.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/project-text-search.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/quick-open.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/source-actors.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/source-tree.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/sources.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/tabs.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/threads.js $(TOPSRCDIR)/devtools/client/debugger/src/reducers/ui.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/reducers)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/selectors/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/selectors/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/breakpointAtLocation.js: $(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/breakpointAtLocation.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/breakpoints.js: $(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/breakpoints.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/breakpointSources.js: $(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/breakpointSources.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/getCallStackFrames.js: $(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/getCallStackFrames.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/inComponent.js: $(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/inComponent.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/isLineInScope.js: $(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/isLineInScope.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/isSelectedFrameVisible.js: $(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/isSelectedFrameVisible.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/pause.js: $(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/pause.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/visibleBreakpoints.js: $(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/visibleBreakpoints.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/visibleColumnBreakpoints.js: $(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors/visibleColumnBreakpoints.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/breakpointAtLocation.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/breakpoints.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/breakpointSources.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/getCallStackFrames.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/inComponent.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/index.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/isLineInScope.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/isSelectedFrameVisible.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/pause.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/visibleBreakpoints.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/visibleColumnBreakpoints.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/selectors/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/selectors/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/breakpointAtLocation.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/breakpoints.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/breakpointSources.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/getCallStackFrames.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/inComponent.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/index.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/isLineInScope.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/isSelectedFrameVisible.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/pause.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/visibleBreakpoints.js $(TOPSRCDIR)/devtools/client/debugger/src/selectors/visibleColumnBreakpoints.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/selectors)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/utils/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/assert.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/assert.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/ast.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/ast.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/async-value.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/async-value.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/bootstrap.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/bootstrap.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/build-query.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/build-query.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/clipboard.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/clipboard.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/connect.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/connect.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/context.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/context.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/dbg.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/dbg.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/defer.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/defer.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/DevToolsUtils.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/DevToolsUtils.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/expressions.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/expressions.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/evaluation-result.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/evaluation-result.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/function.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/function.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/indentation.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/indentation.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/isMinified.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/isMinified.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/location.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/location.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/log.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/log.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/memoize.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/memoize.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/memoizeLast.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/memoizeLast.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/memoizableAction.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/memoizableAction.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/path.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/path.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/prefs.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/prefs.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/preview.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/preview.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/project-search.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/project-search.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/quick-open.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/quick-open.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/result-list.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/result-list.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/selected-location.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/selected-location.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/source-maps.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/source-maps.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/source-queue.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/source-queue.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/source.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/source.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/tabs.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/tabs.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/task.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/task.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/telemetry.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/telemetry.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/text.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/text.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/timings.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/timings.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/threads.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/threads.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/ui.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/ui.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/url.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/url.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/utils.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/utils.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/wasm.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/wasm.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/worker.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/worker.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/assert.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/ast.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/async-value.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/bootstrap.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/build-query.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/clipboard.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/connect.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/context.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/dbg.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/defer.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/DevToolsUtils.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/expressions.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/evaluation-result.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/function.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/indentation.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/isMinified.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/location.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/log.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/memoize.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/memoizeLast.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/memoizableAction.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/path.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/prefs.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/preview.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/project-search.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/quick-open.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/result-list.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/selected-location.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/source-maps.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/source-queue.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/source.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/tabs.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/task.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/telemetry.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/text.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/timings.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/threads.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/ui.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/url.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/utils.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/wasm.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/worker.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/utils/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/utils/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/assert.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/ast.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/async-value.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/bootstrap.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/build-query.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/clipboard.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/connect.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/context.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/dbg.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/defer.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/DevToolsUtils.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/expressions.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/evaluation-result.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/function.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/indentation.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/isMinified.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/location.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/log.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/memoize.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/memoizeLast.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/memoizableAction.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/path.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/prefs.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/preview.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/project-search.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/quick-open.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/result-list.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/selected-location.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/source-maps.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/source-queue.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/source.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/tabs.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/task.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/telemetry.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/text.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/timings.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/threads.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/ui.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/url.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/utils.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/wasm.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/worker.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/utils/breakpoint/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/utils/breakpoint/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/utils/breakpoint/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/breakpoint/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/breakpoint/astBreakpointLocation.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/breakpoint/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/breakpoint/astBreakpointLocation.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/breakpoint/breakpointPositions.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/breakpoint/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/breakpoint/breakpointPositions.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/breakpoint/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/breakpoint/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/breakpoint/index.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/breakpoint/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/utils/breakpoint/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/utils/breakpoint/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/breakpoint/astBreakpointLocation.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/breakpoint/breakpointPositions.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/breakpoint/index.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/utils/breakpoint/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/utils/breakpoint/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/utils/breakpoint/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/breakpoint/astBreakpointLocation.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/breakpoint/breakpointPositions.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/breakpoint/index.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/breakpoint)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/editor/create-editor.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/editor/create-editor.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/editor/get-expression.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/editor/get-expression.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/editor/get-token-location.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/editor/get-token-location.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/editor/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/editor/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/editor/source-documents.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/editor/source-documents.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/editor/source-editor.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/editor/source-editor.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/editor/source-search.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/editor/source-search.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/editor/token-events.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/editor/token-events.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/editor/create-editor.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/editor/get-expression.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/editor/get-token-location.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/editor/index.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/editor/source-documents.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/editor/source-editor.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/editor/source-search.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/editor/token-events.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/utils/editor/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/editor/create-editor.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/editor/get-expression.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/editor/get-token-location.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/editor/index.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/editor/source-documents.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/editor/source-editor.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/editor/source-search.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/editor/token-events.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/editor)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/why.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/why.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/index.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/why.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/index.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/why.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/frames/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/frames/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/frames/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/frames/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/frames/annotateFrames.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/frames/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/frames/annotateFrames.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/frames/collapseFrames.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/frames/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/frames/collapseFrames.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/frames/displayName.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/frames/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/frames/displayName.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/frames/getFrameUrl.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/frames/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/frames/getFrameUrl.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/frames/getLibraryFromUrl.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/frames/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/frames/getLibraryFromUrl.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/frames/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/frames/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/frames/index.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/frames/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/frames/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/frames/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/frames/annotateFrames.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/frames/collapseFrames.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/frames/displayName.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/frames/getFrameUrl.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/frames/getLibraryFromUrl.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/frames/index.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/frames/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/frames/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/frames/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/frames/annotateFrames.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/frames/collapseFrames.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/frames/displayName.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/frames/getFrameUrl.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/frames/getLibraryFromUrl.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/frames/index.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/frames)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/buildGeneratedBindingList.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/buildGeneratedBindingList.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/filtering.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/filtering.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/findGeneratedBindingFromPosition.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/findGeneratedBindingFromPosition.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/getApplicableBindingsForOriginalPosition.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/getApplicableBindingsForOriginalPosition.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/locColumn.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/locColumn.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/mappingContains.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/mappingContains.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/optimizedOut.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/optimizedOut.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/positionCmp.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/positionCmp.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/rangeMetadata.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes/rangeMetadata.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/buildGeneratedBindingList.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/filtering.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/findGeneratedBindingFromPosition.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/getApplicableBindingsForOriginalPosition.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/index.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/locColumn.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/mappingContains.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/optimizedOut.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/positionCmp.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/rangeMetadata.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/mapScopes/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/buildGeneratedBindingList.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/filtering.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/findGeneratedBindingFromPosition.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/getApplicableBindingsForOriginalPosition.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/index.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/locColumn.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/mappingContains.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/optimizedOut.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/positionCmp.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/mapScopes/rangeMetadata.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/mapScopes)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/scopes/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/scopes/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/scopes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/scopes/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/scopes/getScope.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/scopes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/scopes/getScope.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/scopes/getVariables.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/scopes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/scopes/getVariables.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/scopes/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/scopes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/scopes/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/scopes/utils.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/scopes/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/scopes/utils.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/scopes/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/scopes/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/scopes/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/scopes/getScope.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/scopes/getVariables.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/scopes/index.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/scopes/utils.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/scopes/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/scopes/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/utils/pause/scopes/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/scopes/getScope.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/scopes/getVariables.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/scopes/index.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/pause/scopes/utils.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/pause/scopes)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/resource/base-query.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/resource/base-query.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/resource/compare.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/resource/compare.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/resource/core.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/resource/core.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/resource/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/resource/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/resource/memoize.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/resource/memoize.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/resource/query-cache.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/resource/query-cache.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/resource/query.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/resource/query.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/resource/selector.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/resource/selector.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/resource/base-query.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/resource/compare.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/resource/core.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/resource/index.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/resource/memoize.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/resource/query-cache.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/resource/query.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/resource/selector.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/utils/resource/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/resource/base-query.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/resource/compare.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/resource/core.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/resource/index.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/resource/memoize.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/resource/query-cache.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/resource/query.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/resource/selector.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/resource)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/addToTree.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/addToTree.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/collapseTree.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/collapseTree.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/formatTree.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/formatTree.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/getDirectories.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/getDirectories.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/getURL.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/getURL.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/index.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/sortTree.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/sortTree.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/treeOrder.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/treeOrder.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/updateTree.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/updateTree.js
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/utils.js: $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree/utils.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/addToTree.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/collapseTree.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/formatTree.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/getDirectories.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/getURL.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/index.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/sortTree.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/treeOrder.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/updateTree.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/utils.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/utils/sources-tree/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/addToTree.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/collapseTree.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/formatTree.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/getDirectories.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/getURL.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/index.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/sortTree.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/treeOrder.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/updateTree.js $(TOPSRCDIR)/devtools/client/debugger/src/utils/sources-tree/utils.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/utils/sources-tree)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/workers/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/workers/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/workers/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/workers/node.stub
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/workers/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/workers/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/workers/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/workers/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/workers/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/workers/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/workers)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/workers/parser/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/workers/parser/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/workers/parser/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/workers/parser/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/workers/parser/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/workers/parser/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/workers/parser/index.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/workers/parser/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/workers/parser/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/workers/parser/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/workers/parser/index.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/workers/parser/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/workers/parser/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/workers/parser/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/workers/parser/index.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/workers/parser)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/workers/pretty-print/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/workers/pretty-print/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/workers/pretty-print/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/workers/pretty-print/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/workers/pretty-print/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/workers/pretty-print/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/workers/pretty-print/index.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/workers/pretty-print/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/workers/pretty-print/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/workers/pretty-print/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/workers/pretty-print/index.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/workers/pretty-print/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/workers/pretty-print/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/workers/pretty-print/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/workers/pretty-print/index.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/workers/pretty-print)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/client/debugger/src/workers/search/$(MDDEPDIR)/node.stub.stub
$(TOPOBJDIR)/devtools/client/debugger/src/workers/search/node.stub: $(TOPOBJDIR)/devtools/client/debugger/src/workers/search/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/workers/search/node.stub
$(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/workers/search/index.js: $(TOPOBJDIR)/devtools/client/debugger/src/workers/search/$(MDDEPDIR)/node.stub.stub ;
GARBAGE += $(TOPOBJDIR)/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/workers/search/index.js
GARBAGE += $(TOPOBJDIR)/devtools/client/debugger/src/workers/search/$(MDDEPDIR)/node.stub.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/client/debugger/src/workers/search/$(MDDEPDIR)/node.stub.pp
$(TOPOBJDIR)/devtools/client/debugger/src/workers/search/$(MDDEPDIR)/node.stub.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/workers/search/index.js
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/node.py generate $(TOPOBJDIR)/devtools/client/debugger/src/workers/search/node.stub $(TOPOBJDIR)/devtools/client/debugger/src/workers/search/$(MDDEPDIR)/node.stub.pp $(TOPOBJDIR)/devtools/client/debugger/src/workers/search/$(MDDEPDIR)/node.stub.stub $(TOPSRCDIR)/devtools/client/shared/build/build.js $(TOPSRCDIR)/devtools/client/debugger/src/workers/search/index.js /home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin/browser/chrome/devtools/modules/devtools/client/debugger/src/workers/search)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/devtools/shared/webconsole/$(MDDEPDIR)/reserved-js-words.js.stub
$(TOPOBJDIR)/devtools/shared/webconsole/reserved-js-words.js: $(TOPOBJDIR)/devtools/shared/webconsole/$(MDDEPDIR)/reserved-js-words.js.stub ;
GARBAGE += $(TOPOBJDIR)/devtools/shared/webconsole/reserved-js-words.js
GARBAGE += $(TOPOBJDIR)/devtools/shared/webconsole/$(MDDEPDIR)/reserved-js-words.js.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/devtools/shared/webconsole/$(MDDEPDIR)/reserved-js-words.js.pp
$(TOPOBJDIR)/devtools/shared/webconsole/$(MDDEPDIR)/reserved-js-words.js.stub: /home/kieran/Documents/browser/devtools/shared/webconsole/GenerateReservedWordsJS.py $(TOPSRCDIR)/js/src/frontend/ReservedWords.h
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/devtools/shared/webconsole/GenerateReservedWordsJS.py main $(TOPOBJDIR)/devtools/shared/webconsole/reserved-js-words.js $(TOPOBJDIR)/devtools/shared/webconsole/$(MDDEPDIR)/reserved-js-words.js.pp $(TOPOBJDIR)/devtools/shared/webconsole/$(MDDEPDIR)/reserved-js-words.js.stub $(TOPSRCDIR)/js/src/frontend/ReservedWords.h)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/library/buildid.cpp: $(TOPOBJDIR)/toolkit/library/$(MDDEPDIR)/buildid.cpp.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/library/buildid.cpp
GARBAGE += $(TOPOBJDIR)/toolkit/library/$(MDDEPDIR)/buildid.cpp.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/library/$(MDDEPDIR)/buildid.cpp.pp
$(TOPOBJDIR)/toolkit/library/$(MDDEPDIR)/buildid.cpp.stub: /home/kieran/Documents/browser/toolkit/library/gen_buildid.py $(TOPOBJDIR)/toolkit/library/build/libxul_so.list
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/library/gen_buildid.py main $(TOPOBJDIR)/toolkit/library/buildid.cpp $(TOPOBJDIR)/toolkit/library/$(MDDEPDIR)/buildid.cpp.pp $(TOPOBJDIR)/toolkit/library/$(MDDEPDIR)/buildid.cpp.stub $(TOPOBJDIR)/toolkit/library/build/libxul_so.list)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/library/build/symverscript: $(TOPOBJDIR)/toolkit/library/build/$(MDDEPDIR)/symverscript.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/library/build/symverscript
GARBAGE += $(TOPOBJDIR)/toolkit/library/build/$(MDDEPDIR)/symverscript.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/library/build/$(MDDEPDIR)/symverscript.pp
$(TOPOBJDIR)/toolkit/library/build/$(MDDEPDIR)/symverscript.stub: /home/kieran/Documents/browser/build/gen_symverscript.py $(TOPSRCDIR)/toolkit/library/symverscript.in
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/build/gen_symverscript.py main $(TOPOBJDIR)/toolkit/library/build/symverscript $(TOPOBJDIR)/toolkit/library/build/$(MDDEPDIR)/symverscript.pp $(TOPOBJDIR)/toolkit/library/build/$(MDDEPDIR)/symverscript.stub $(TOPSRCDIR)/toolkit/library/symverscript.in xul80)
	@$(TOUCH) $@

$(TOPOBJDIR)/toolkit/library/gtest/symverscript: $(TOPOBJDIR)/toolkit/library/gtest/$(MDDEPDIR)/symverscript.stub ;
GARBAGE += $(TOPOBJDIR)/toolkit/library/gtest/symverscript
GARBAGE += $(TOPOBJDIR)/toolkit/library/gtest/$(MDDEPDIR)/symverscript.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/toolkit/library/gtest/$(MDDEPDIR)/symverscript.pp
$(TOPOBJDIR)/toolkit/library/gtest/$(MDDEPDIR)/symverscript.stub: /home/kieran/Documents/browser/build/gen_symverscript.py $(TOPSRCDIR)/toolkit/library/symverscript.in
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/build/gen_symverscript.py main $(TOPOBJDIR)/toolkit/library/gtest/symverscript $(TOPOBJDIR)/toolkit/library/gtest/$(MDDEPDIR)/symverscript.pp $(TOPOBJDIR)/toolkit/library/gtest/$(MDDEPDIR)/symverscript.stub $(TOPSRCDIR)/toolkit/library/symverscript.in xul80)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/browser/base/content/$(MDDEPDIR)/aboutNetErrorCodes.js.stub
$(TOPOBJDIR)/browser/base/content/aboutNetErrorCodes.js: $(TOPOBJDIR)/browser/base/content/$(MDDEPDIR)/aboutNetErrorCodes.js.stub ;
GARBAGE += $(TOPOBJDIR)/browser/base/content/aboutNetErrorCodes.js
GARBAGE += $(TOPOBJDIR)/browser/base/content/$(MDDEPDIR)/aboutNetErrorCodes.js.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/browser/base/content/$(MDDEPDIR)/aboutNetErrorCodes.js.pp
$(TOPOBJDIR)/browser/base/content/$(MDDEPDIR)/aboutNetErrorCodes.js.stub: /home/kieran/Documents/browser/browser/base/gen_aboutneterror_codes.py $(TOPSRCDIR)/browser/locales/en-US/browser/nsserrors.ftl
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/browser/base/gen_aboutneterror_codes.py main $(TOPOBJDIR)/browser/base/content/aboutNetErrorCodes.js $(TOPOBJDIR)/browser/base/content/$(MDDEPDIR)/aboutNetErrorCodes.js.pp $(TOPOBJDIR)/browser/base/content/$(MDDEPDIR)/aboutNetErrorCodes.js.stub $(TOPSRCDIR)/browser/locales/en-US/browser/nsserrors.ftl)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/browser/locales/$(MDDEPDIR)/updater.ini.stub
$(TOPOBJDIR)/browser/locales/updater.ini: $(TOPOBJDIR)/browser/locales/$(MDDEPDIR)/updater.ini.stub ;
GARBAGE += $(TOPOBJDIR)/browser/locales/updater.ini
GARBAGE += $(TOPOBJDIR)/browser/locales/$(MDDEPDIR)/updater.ini.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/browser/locales/$(MDDEPDIR)/updater.ini.pp
$(TOPOBJDIR)/browser/locales/$(MDDEPDIR)/updater.ini.stub: /home/kieran/Documents/browser/browser/locales/generate_updater_ini.py $(TOPSRCDIR)/browser/locales/en-US/updater/updater.ini $(TOPSRCDIR)/browser/installer/windows/nsis/updater_append.ini $(if $(IS_LANGUAGE_REPACK),FORCE)
	$(REPORT_BUILD)
	$(call py_action,file_generate,--locale=$(AB_CD) /home/kieran/Documents/browser/browser/locales/generate_updater_ini.py main $(TOPOBJDIR)/browser/locales/updater.ini $(TOPOBJDIR)/browser/locales/$(MDDEPDIR)/updater.ini.pp $(TOPOBJDIR)/browser/locales/$(MDDEPDIR)/updater.ini.stub $(TOPSRCDIR)/browser/locales/en-US/updater/updater.ini $(TOPSRCDIR)/browser/installer/windows/nsis/updater_append.ini)
	@$(TOUCH) $@

default: $(TOPOBJDIR)/browser/locales/$(MDDEPDIR)/bookmarks.html.stub
$(TOPOBJDIR)/browser/locales/bookmarks.html: $(TOPOBJDIR)/browser/locales/$(MDDEPDIR)/bookmarks.html.stub ;
GARBAGE += $(TOPOBJDIR)/browser/locales/bookmarks.html
GARBAGE += $(TOPOBJDIR)/browser/locales/$(MDDEPDIR)/bookmarks.html.stub
EXTRA_MDDEPEND_FILES += $(TOPOBJDIR)/browser/locales/$(MDDEPDIR)/bookmarks.html.pp
$(TOPOBJDIR)/browser/locales/$(MDDEPDIR)/bookmarks.html.stub: /home/kieran/Documents/browser/browser/locales/generate_bookmarks.py $(TOPSRCDIR)/browser/locales/generic/profile/bookmarks.html.in $(TOPSRCDIR)/browser/locales/en-US/profile/bookmarks.inc $(if $(IS_LANGUAGE_REPACK),FORCE)
	$(REPORT_BUILD)
	$(call py_action,file_generate,--locale=$(AB_CD) /home/kieran/Documents/browser/browser/locales/generate_bookmarks.py main $(TOPOBJDIR)/browser/locales/bookmarks.html $(TOPOBJDIR)/browser/locales/$(MDDEPDIR)/bookmarks.html.pp $(TOPOBJDIR)/browser/locales/$(MDDEPDIR)/bookmarks.html.stub $(TOPSRCDIR)/browser/locales/generic/profile/bookmarks.html.in $(TOPSRCDIR)/browser/locales/en-US/profile/bookmarks.inc)
	@$(TOUCH) $@

