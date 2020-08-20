# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1
XPI_NAME = reftest
FINAL_TARGET = $(if $(XPI_NAME),$(DIST)/xpi-stage/$(XPI_NAME),$(DIST)/bin)$(DIST_SUBDIR:%=/%)
JAR_MANIFEST := /home/kieran/Documents/browser/layout/tools/reftest/jar.mn
USE_EXTENSION_MANIFEST := 1
