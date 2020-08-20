# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -DOS_POSIX=1 -DOS_LINUX=1 '-DMOZ_APP_VERSION="80.0"'
DIRS := pingsender geckoview/gtest tests/gtest tests
include $(topsrcdir)/config/AB_rCD.mk
TelemetryHistogramData.inc: $(MDDEPDIR)/TelemetryHistogramData.inc.stub ;
GARBAGE += TelemetryHistogramData.inc
GARBAGE += $(MDDEPDIR)/TelemetryHistogramData.inc.stub
EXTRA_MDDEPEND_FILES += $(MDDEPDIR)/TelemetryHistogramData.inc.pp
$(MDDEPDIR)/TelemetryHistogramData.inc.stub: /home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_histogram_data.py $(srcdir)/Histograms.json $(topsrcdir)/dom/base/UseCounters.conf $(topsrcdir)/dom/base/nsDeprecatedOperationList.h $(DEPTH)/layout/style/ServoCSSPropList.py $(topsrcdir)/servo/components/style/properties/counted_unknown_properties.py $(topsrcdir)/dom/base/UseCountersWorker.conf
	$(REPORT_BUILD)
	$(call py_action,file_generate,/home/kieran/Documents/browser/toolkit/components/telemetry/build_scripts/gen_histogram_data.py main TelemetryHistogramData.inc $(MDDEPDIR)/TelemetryHistogramData.inc.pp $(MDDEPDIR)/TelemetryHistogramData.inc.stub $(srcdir)/Histograms.json $(topsrcdir)/dom/base/UseCounters.conf $(topsrcdir)/dom/base/nsDeprecatedOperationList.h $(DEPTH)/layout/style/ServoCSSPropList.py $(topsrcdir)/servo/components/style/properties/counted_unknown_properties.py $(topsrcdir)/dom/base/UseCountersWorker.conf)
	@$(TOUCH) $@

LOCAL_INCLUDES += -I$(topobjdir)/ipc/ipdl/_ipdlheaders
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/chromium/src
LOCAL_INCLUDES += -I$(topsrcdir)/ipc/glue
LOCAL_INCLUDES += -I$(topsrcdir)/xpcom/build
LOCAL_INCLUDES += -I$(topsrcdir)/xpcom/threads
CPPSRCS += $(srcdir)/core/Stopwatch.cpp
CPPSRCS += $(srcdir)/core/Telemetry.cpp
CPPSRCS += $(srcdir)/core/TelemetryCommon.cpp
CPPSRCS += $(srcdir)/core/TelemetryEvent.cpp
CPPSRCS += $(srcdir)/core/TelemetryHistogram.cpp
CPPSRCS += $(srcdir)/core/TelemetryOrigin.cpp
CPPSRCS += $(srcdir)/core/TelemetryScalar.cpp
CPPSRCS += $(srcdir)/core/ipc/TelemetryIPC.cpp
CPPSRCS += $(srcdir)/core/ipc/TelemetryIPCAccumulator.cpp
CPPSRCS += $(srcdir)/geckoview/streaming/GeckoViewStreamingTelemetry.cpp
CPPSRCS += $(srcdir)/other/CombinedStacks.cpp
CPPSRCS += $(srcdir)/other/KeyedStackCapturer.cpp
CPPSRCS += $(srcdir)/other/ProcessedStack.cpp
CPPSRCS += $(srcdir)/other/TelemetryIOInterposeObserver.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
NONRECURSIVE_TARGETS += export
NONRECURSIVE_TARGETS_export += xpidl
NONRECURSIVE_TARGETS_export_xpidl_DIRECTORY = $(DEPTH)/xpcom/xpidl
NONRECURSIVE_TARGETS_export_xpidl_TARGETS += export
