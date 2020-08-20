# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1
DIST_SUBDIR = browser
FINAL_TARGET = $(if $(XPI_NAME),$(DIST)/xpi-stage/$(XPI_NAME),$(DIST)/bin)$(DIST_SUBDIR:%=/%)
DIRS := acorn compatibility css discovery heapsnapshot inspector jsbeautify layout locales node-properties performance performance-new platform protocol qrcode resources screenshot security sprintfjs specs storage transport webconsole worker
