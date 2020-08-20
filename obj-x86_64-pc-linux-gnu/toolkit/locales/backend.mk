# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DMOZ_GTK
include $(topsrcdir)/config/AB_rCD.mk
misc:: $(MDDEPDIR)/update.locale.stub
update.locale: $(MDDEPDIR)/update.locale.stub ;
GARBAGE += update.locale
GARBAGE += $(MDDEPDIR)/update.locale.stub
EXTRA_MDDEPEND_FILES += $(MDDEPDIR)/update.locale.pp
$(MDDEPDIR)/update.locale.stub: /home/kieran/Documents/browser/toolkit/locales/generate_update_locale.py $(if $(IS_LANGUAGE_REPACK),FORCE)
	$(REPORT_BUILD)
	$(call py_action,file_generate,--locale=$(AB_CD) /home/kieran/Documents/browser/toolkit/locales/generate_update_locale.py main update.locale $(MDDEPDIR)/update.locale.pp $(MDDEPDIR)/update.locale.stub)
	@$(TOUCH) $@

misc:: $(MDDEPDIR)/locale.ini.stub
locale.ini: $(MDDEPDIR)/locale.ini.stub ;
GARBAGE += locale.ini
GARBAGE += $(MDDEPDIR)/locale.ini.stub
EXTRA_MDDEPEND_FILES += $(MDDEPDIR)/locale.ini.pp
$(MDDEPDIR)/locale.ini.stub: /home/kieran/Documents/browser/toolkit/locales/generate_locale_ini.py $(if $(IS_LANGUAGE_REPACK),FORCE)
	$(REPORT_BUILD)
	$(call py_action,file_generate,--locale=$(AB_CD) /home/kieran/Documents/browser/toolkit/locales/generate_locale_ini.py main locale.ini $(MDDEPDIR)/locale.ini.pp $(MDDEPDIR)/locale.ini.stub)
	@$(TOUCH) $@

