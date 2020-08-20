# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1
FINAL_TARGET = $(DEPTH)/_tests/xpcshell/security/manager/ssl/tests/unit/pkcs11testmodule
include $(topsrcdir)/config/AB_rCD.mk
libpkcs11testmodule.so.symbols: $(MDDEPDIR)/libpkcs11testmodule.so.symbols.stub ;
GARBAGE += libpkcs11testmodule.so.symbols
GARBAGE += $(MDDEPDIR)/libpkcs11testmodule.so.symbols.stub
EXTRA_MDDEPEND_FILES += $(MDDEPDIR)/libpkcs11testmodule.so.symbols.pp
$(MDDEPDIR)/libpkcs11testmodule.so.symbols.stub: /home/kieran/Documents/browser/python/mozbuild/mozbuild/action/generate_symbols_file.py $(srcdir)/pkcs11testmodule.symbols backend.mk
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/python/mozbuild/mozbuild/action/generate_symbols_file.py generate_symbols_file libpkcs11testmodule.so.symbols $(MDDEPDIR)/libpkcs11testmodule.so.symbols.pp $(MDDEPDIR)/libpkcs11testmodule.so.symbols.stub $(srcdir)/pkcs11testmodule.symbols -DNDEBUG=1 -DTRIMMED=1)
	@$(TOUCH) $@

NO_PROFILE_GUIDED_OPTIMIZE := 1
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
