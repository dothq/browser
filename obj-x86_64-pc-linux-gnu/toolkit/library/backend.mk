# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1
DIRS := build gtest
include $(topsrcdir)/config/AB_rCD.mk
buildid.cpp: $(MDDEPDIR)/buildid.cpp.stub ;
GARBAGE += buildid.cpp
GARBAGE += $(MDDEPDIR)/buildid.cpp.stub
EXTRA_MDDEPEND_FILES += $(MDDEPDIR)/buildid.cpp.pp
$(MDDEPDIR)/buildid.cpp.stub: /home/kieran/Documents/browser/toolkit/library/gen_buildid.py build/libxul_so.list
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/library/gen_buildid.py main buildid.cpp $(MDDEPDIR)/buildid.cpp.pp $(MDDEPDIR)/buildid.cpp.stub build/libxul_so.list)
	@$(TOUCH) $@

LOCAL_INCLUDES += -I$(topsrcdir)/config
LOCAL_INCLUDES += -I$(topsrcdir)/widget/windows
CPPSRCS += buildid.cpp
GARBAGE += buildid.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
