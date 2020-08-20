# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1
DIST_SUBDIR = browser
FINAL_TARGET = $(if $(XPI_NAME),$(DIST)/xpi-stage/$(XPI_NAME),$(DIST)/bin)$(DIST_SUBDIR:%=/%)
include $(topsrcdir)/config/AB_rCD.mk
misc:: $(MDDEPDIR)/updater.ini.stub
updater.ini: $(MDDEPDIR)/updater.ini.stub ;
GARBAGE += updater.ini
GARBAGE += $(MDDEPDIR)/updater.ini.stub
EXTRA_MDDEPEND_FILES += $(MDDEPDIR)/updater.ini.pp
$(MDDEPDIR)/updater.ini.stub: /home/kieran/Documents/browser/browser/locales/generate_updater_ini.py $(call MERGE_FILE,updater/updater.ini) $(topsrcdir)/browser/installer/windows/nsis/updater_append.ini $(if $(IS_LANGUAGE_REPACK),FORCE)
	$(REPORT_BUILD)
	$(call py_action,file_generate,--locale=$(AB_CD) /home/kieran/Documents/browser/browser/locales/generate_updater_ini.py main updater.ini $(MDDEPDIR)/updater.ini.pp $(MDDEPDIR)/updater.ini.stub $(call MERGE_FILE,updater/updater.ini) $(topsrcdir)/browser/installer/windows/nsis/updater_append.ini)
	@$(TOUCH) $@

misc:: $(MDDEPDIR)/bookmarks.html.stub
bookmarks.html: $(MDDEPDIR)/bookmarks.html.stub ;
GARBAGE += bookmarks.html
GARBAGE += $(MDDEPDIR)/bookmarks.html.stub
EXTRA_MDDEPEND_FILES += $(MDDEPDIR)/bookmarks.html.pp
$(MDDEPDIR)/bookmarks.html.stub: /home/kieran/Documents/browser/browser/locales/generate_bookmarks.py $(srcdir)/generic/profile/bookmarks.html.in $(call MERGE_FILE,profile/bookmarks.inc) $(if $(IS_LANGUAGE_REPACK),FORCE)
	$(REPORT_BUILD)
	$(call py_action,file_generate,--locale=$(AB_CD) /home/kieran/Documents/browser/browser/locales/generate_bookmarks.py main bookmarks.html $(MDDEPDIR)/bookmarks.html.pp $(MDDEPDIR)/bookmarks.html.stub $(srcdir)/generic/profile/bookmarks.html.in $(call MERGE_FILE,profile/bookmarks.inc))
	@$(TOUCH) $@

