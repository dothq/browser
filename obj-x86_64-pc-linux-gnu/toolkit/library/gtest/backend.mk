# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -Dtopsrcdir=/home/kieran/Documents/browser
FINAL_TARGET = $(DEPTH)/dist/bin/gtest
include $(topsrcdir)/config/AB_rCD.mk
symverscript: $(MDDEPDIR)/symverscript.stub ;
GARBAGE += symverscript
GARBAGE += $(MDDEPDIR)/symverscript.stub
EXTRA_MDDEPEND_FILES += $(MDDEPDIR)/symverscript.pp
$(MDDEPDIR)/symverscript.stub: /home/kieran/Documents/browser/build/gen_symverscript.py $(topsrcdir)/toolkit/library/symverscript.in backend.mk
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/build/gen_symverscript.py main symverscript $(MDDEPDIR)/symverscript.pp $(MDDEPDIR)/symverscript.stub $(topsrcdir)/toolkit/library/symverscript.in xul80)
	@$(TOUCH) $@

OBJDIR_0_FILES += $(topsrcdir)/toolkit/library/libxul.so-gdb.py
OBJDIR_0_DEST := $(topobjdir)/toolkit/library/build
OBJDIR_0_TARGET := misc
INSTALL_TARGETS += OBJDIR_0
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
