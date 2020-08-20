# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1
DIST_SUBDIR = browser
FINAL_TARGET = $(if $(XPI_NAME),$(DIST)/xpi-stage/$(XPI_NAME),$(DIST)/bin)$(DIST_SUBDIR:%=/%)
DIRS := about aboutconfig aboutlogins attribution contextualidentity customizableui dirprovider doh downloads enterprisepolicies extensions fxmonitor migration newtab originattributes pioneer places pocket preferences privatebrowsing prompts protections protocolhandler resistfingerprinting search sessionstore shell ssb syncedtabs uitour urlbar translation build
NONRECURSIVE_TARGETS += export
NONRECURSIVE_TARGETS_export += xpidl
NONRECURSIVE_TARGETS_export_xpidl_DIRECTORY = $(DEPTH)/xpcom/xpidl
NONRECURSIVE_TARGETS_export_xpidl_TARGETS += export
