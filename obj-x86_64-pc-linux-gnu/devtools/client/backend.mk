# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1
DIST_SUBDIR = browser
FINAL_TARGET = $(if $(XPI_NAME),$(DIST)/xpi-stage/$(XPI_NAME),$(DIST)/bin)$(DIST_SUBDIR:%=/%)
DIRS := aboutdebugging accessibility application debugger dom framework fronts inspector jsonview locales memory netmonitor performance performance-new preferences responsive shared storage styleeditor themes webconsole whats-new
