# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DOS_POSIX=1 -DOS_LINUX=1
LOCAL_INCLUDES += -I$(topsrcdir)/accessible/base
LOCAL_INCLUDES += -I$(topsrcdir)/accessible/generic
LOCAL_INCLUDES += -I$(topsrcdir)/accessible/html
LOCAL_INCLUDES += -I$(topsrcdir)/accessible/ipc
LOCAL_INCLUDES += -I$(topsrcdir)/accessible/ipc/other
LOCAL_INCLUDES += -I$(topsrcdir)/accessible/xpcom
LOCAL_INCLUDES += -I$(topsrcdir)/accessible/xul
LOCAL_INCLUDES += -I$(topsrcdir)/other-licenses/atk-1.0
LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
CPPSRCS += $(srcdir)/AccessibleWrap.cpp
CPPSRCS += $(srcdir)/ApplicationAccessibleWrap.cpp
CPPSRCS += $(srcdir)/AtkSocketAccessible.cpp
CPPSRCS += $(srcdir)/DOMtoATK.cpp
CPPSRCS += $(srcdir)/DocAccessibleWrap.cpp
CPPSRCS += $(srcdir)/Platform.cpp
CPPSRCS += $(srcdir)/RootAccessibleWrap.cpp
CPPSRCS += $(srcdir)/UtilInterface.cpp
CPPSRCS += $(srcdir)/nsMaiHyperlink.cpp
CPPSRCS += $(srcdir)/nsMaiInterfaceAction.cpp
CPPSRCS += $(srcdir)/nsMaiInterfaceComponent.cpp
CPPSRCS += $(srcdir)/nsMaiInterfaceDocument.cpp
CPPSRCS += $(srcdir)/nsMaiInterfaceEditableText.cpp
CPPSRCS += $(srcdir)/nsMaiInterfaceHyperlinkImpl.cpp
CPPSRCS += $(srcdir)/nsMaiInterfaceHypertext.cpp
CPPSRCS += $(srcdir)/nsMaiInterfaceImage.cpp
CPPSRCS += $(srcdir)/nsMaiInterfaceSelection.cpp
CPPSRCS += $(srcdir)/nsMaiInterfaceTable.cpp
CPPSRCS += $(srcdir)/nsMaiInterfaceTableCell.cpp
CPPSRCS += $(srcdir)/nsMaiInterfaceText.cpp
CPPSRCS += $(srcdir)/nsMaiInterfaceValue.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
