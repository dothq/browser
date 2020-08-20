recurse_check: config/check ipc/ipdl/test/ipdl/check
accessible/xpcom/export:
browser/export:
browser/app/export: browser/export
browser/locales/export: browser/export
browser/tools/mozscreenshots/mozscreenshots/extension/export: browser/export
build/export:
config/export:
dom/base/export:
dom/bindings/export:
dom/bindings/test/export: dom/bindings/export
intl/locale/export:
ipc/app/export:
ipc/ipdl/export:
ipc/ipdl/test/ipdl/export: ipc/ipdl/export
js/src/tests/export:
layout/generic/export:
layout/style/export:
layout/style/test/gtest/export: layout/style/export
memory/build/export:
modules/libpref/export:
mozglue/build/export:
testing/specialpowers/export:
toolkit/components/telemetry/export:
toolkit/crashreporter/export:
toolkit/crashreporter/client/export: toolkit/crashreporter/export
toolkit/library/build/export:
toolkit/locales/export:
toolkit/mozapps/update/tests/export:
toolkit/mozapps/update/updater/export:
toolkit/mozapps/update/updater/updater-xpcshell/export: toolkit/mozapps/update/updater/export
tools/quitter/export:
xpcom/export:
xpcom/base/export: xpcom/export
xpcom/build/export: xpcom/export
xpcom/ds/export: xpcom/export
xpcom/idl-parser/xpidl/export: xpcom/export
xpcom/xpidl/export:
recurse_export: accessible/xpcom/export browser/export browser/app/export browser/locales/export browser/tools/mozscreenshots/mozscreenshots/extension/export build/export config/export dom/base/export dom/bindings/test/export intl/locale/export ipc/app/export ipc/ipdl/test/ipdl/export js/src/tests/export layout/generic/export layout/style/test/gtest/export memory/build/export modules/libpref/export mozglue/build/export testing/specialpowers/export toolkit/components/telemetry/export toolkit/crashreporter/export toolkit/crashreporter/client/export toolkit/library/build/export toolkit/locales/export toolkit/mozapps/update/tests/export toolkit/mozapps/update/updater/export toolkit/mozapps/update/updater/updater-xpcshell/export tools/quitter/export xpcom/export xpcom/base/export xpcom/build/export xpcom/ds/export xpcom/idl-parser/xpidl/export xpcom/xpidl/export
browser/libs: tools/quitter/libs
browser/app/libs: browser/locales/libs
browser/locales/libs: browser/libs
browser/tools/mozscreenshots/mozscreenshots/extension/libs: browser/app/libs
dom/bindings/libs: testing/specialpowers/libs
dom/bindings/test/libs: dom/bindings/libs
ipc/app/libs: xpcom/xpidl/libs
ipc/ipdl/libs: ipc/app/libs
ipc/ipdl/test/ipdl/libs: ipc/ipdl/libs
js/src/tests/libs: config/libs
memory/build/libs: js/src/tests/libs
mozglue/build/libs: memory/build/libs
testing/specialpowers/libs: ipc/ipdl/test/ipdl/libs
toolkit/components/telemetry/libs: dom/bindings/test/libs
toolkit/crashreporter/client/libs: toolkit/components/telemetry/libs
toolkit/library/build/libs: toolkit/mozapps/update/tests/libs
toolkit/locales/libs: toolkit/crashreporter/client/libs
toolkit/mozapps/update/tests/libs: toolkit/mozapps/update/updater/updater-xpcshell/libs
toolkit/mozapps/update/updater/libs: toolkit/locales/libs
toolkit/mozapps/update/updater/updater-xpcshell/libs: toolkit/mozapps/update/updater/libs
tools/quitter/libs: toolkit/library/build/libs
xpcom/xpidl/libs: mozglue/build/libs
recurse_libs: browser/tools/mozscreenshots/mozscreenshots/extension/libs
browser/base/misc:
browser/locales/misc:
build/misc:
devtools/client/debugger/src/misc:
devtools/client/debugger/src/actions/misc: devtools/client/debugger/src/misc
devtools/client/debugger/src/actions/ast/misc: devtools/client/debugger/src/actions/misc
devtools/client/debugger/src/actions/breakpoints/misc: devtools/client/debugger/src/actions/misc
devtools/client/debugger/src/actions/pause/misc: devtools/client/debugger/src/actions/misc
devtools/client/debugger/src/actions/sources/misc: devtools/client/debugger/src/actions/misc
devtools/client/debugger/src/actions/utils/misc: devtools/client/debugger/src/actions/misc
devtools/client/debugger/src/actions/utils/middleware/misc: devtools/client/debugger/src/actions/utils/misc
devtools/client/debugger/src/client/misc: devtools/client/debugger/src/misc
devtools/client/debugger/src/client/firefox/misc: devtools/client/debugger/src/client/misc
devtools/client/debugger/src/components/misc: devtools/client/debugger/src/misc
devtools/client/debugger/src/components/Editor/misc: devtools/client/debugger/src/components/misc
devtools/client/debugger/src/components/Editor/Preview/misc: devtools/client/debugger/src/components/Editor/misc
devtools/client/debugger/src/components/Editor/menus/misc: devtools/client/debugger/src/components/Editor/misc
devtools/client/debugger/src/components/PrimaryPanes/misc: devtools/client/debugger/src/components/misc
devtools/client/debugger/src/components/SecondaryPanes/misc: devtools/client/debugger/src/components/misc
devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/misc: devtools/client/debugger/src/components/SecondaryPanes/misc
devtools/client/debugger/src/components/SecondaryPanes/Frames/misc: devtools/client/debugger/src/components/SecondaryPanes/misc
devtools/client/debugger/src/components/shared/misc: devtools/client/debugger/src/components/misc
devtools/client/debugger/src/components/shared/Button/misc: devtools/client/debugger/src/components/shared/misc
devtools/client/debugger/src/components/shared/Button/styles/misc: devtools/client/debugger/src/components/shared/Button/misc
devtools/client/debugger/src/reducers/misc: devtools/client/debugger/src/misc
devtools/client/debugger/src/selectors/misc: devtools/client/debugger/src/misc
devtools/client/debugger/src/utils/misc: devtools/client/debugger/src/misc
devtools/client/debugger/src/utils/breakpoint/misc: devtools/client/debugger/src/utils/misc
devtools/client/debugger/src/utils/editor/misc: devtools/client/debugger/src/utils/misc
devtools/client/debugger/src/utils/pause/misc: devtools/client/debugger/src/utils/misc
devtools/client/debugger/src/utils/pause/frames/misc: devtools/client/debugger/src/utils/pause/misc
devtools/client/debugger/src/utils/pause/mapScopes/misc: devtools/client/debugger/src/utils/pause/misc
devtools/client/debugger/src/utils/pause/scopes/misc: devtools/client/debugger/src/utils/pause/misc
devtools/client/debugger/src/utils/resource/misc: devtools/client/debugger/src/utils/misc
devtools/client/debugger/src/utils/sources-tree/misc: devtools/client/debugger/src/utils/misc
devtools/client/debugger/src/workers/misc: devtools/client/debugger/src/misc
devtools/client/debugger/src/workers/parser/misc: devtools/client/debugger/src/workers/misc
devtools/client/debugger/src/workers/pretty-print/misc: devtools/client/debugger/src/workers/misc
devtools/client/debugger/src/workers/search/misc: devtools/client/debugger/src/workers/misc
devtools/shared/webconsole/misc:
layout/tools/reftest/misc:
netwerk/dns/tests/unit/data/misc:
toolkit/components/featuregates/misc:
toolkit/components/normandy/test/browser/misc:
toolkit/components/telemetry/misc:
toolkit/library/build/misc:
toolkit/library/gtest/misc:
toolkit/locales/misc:
toolkit/mozapps/extensions/misc:
toolkit/mozapps/extensions/test/browser/misc: toolkit/mozapps/extensions/misc
toolkit/mozapps/update/tests/misc:
recurse_misc: browser/base/misc browser/locales/misc build/misc devtools/client/debugger/src/actions/ast/misc devtools/client/debugger/src/actions/breakpoints/misc devtools/client/debugger/src/actions/pause/misc devtools/client/debugger/src/actions/sources/misc devtools/client/debugger/src/actions/utils/middleware/misc devtools/client/debugger/src/client/firefox/misc devtools/client/debugger/src/components/Editor/Preview/misc devtools/client/debugger/src/components/Editor/menus/misc devtools/client/debugger/src/components/PrimaryPanes/misc devtools/client/debugger/src/components/SecondaryPanes/Breakpoints/misc devtools/client/debugger/src/components/SecondaryPanes/Frames/misc devtools/client/debugger/src/components/shared/Button/styles/misc devtools/client/debugger/src/reducers/misc devtools/client/debugger/src/selectors/misc devtools/client/debugger/src/utils/breakpoint/misc devtools/client/debugger/src/utils/editor/misc devtools/client/debugger/src/utils/pause/frames/misc devtools/client/debugger/src/utils/pause/mapScopes/misc devtools/client/debugger/src/utils/pause/scopes/misc devtools/client/debugger/src/utils/resource/misc devtools/client/debugger/src/utils/sources-tree/misc devtools/client/debugger/src/workers/parser/misc devtools/client/debugger/src/workers/pretty-print/misc devtools/client/debugger/src/workers/search/misc devtools/shared/webconsole/misc layout/tools/reftest/misc netwerk/dns/tests/unit/data/misc toolkit/components/featuregates/misc toolkit/components/normandy/test/browser/misc toolkit/components/telemetry/misc toolkit/library/build/misc toolkit/library/gtest/misc toolkit/locales/misc toolkit/mozapps/extensions/misc toolkit/mozapps/extensions/test/browser/misc toolkit/mozapps/update/tests/misc
browser/app/tools: tools/quitter/tools
browser/tools/mozscreenshots/mozscreenshots/extension/tools: browser/app/tools
toolkit/mozapps/update/updater/updater-xpcshell/tools: testing/specialpowers/tools
tools/quitter/tools: toolkit/mozapps/update/updater/updater-xpcshell/tools
recurse_tools: browser/tools/mozscreenshots/mozscreenshots/extension/tools
recurse_pre-compile: netwerk/dns/pre-compile security/apps/pre-compile security/manager/ssl/pre-compile security/manager/ssl/tests/unit/pkcs11testmodule/pre-compile toolkit/components/telemetry/pre-compile toolkit/library/pre-compile toolkit/library/build/pre-compile toolkit/library/gtest/pre-compile xpcom/build/pre-compile xpcom/tests/gtest/pre-compile
netwerk/dns/target-objects: netwerk/dns/pre-compile
toolkit/components/telemetry/target-objects: toolkit/components/telemetry/pre-compile
toolkit/library/target-objects: toolkit/library/pre-compile
xpcom/build/target-objects: xpcom/build/pre-compile
xpcom/tests/gtest/target-objects: xpcom/tests/gtest/pre-compile
recurse_compile: accessible/atk/target-objects accessible/ipc/other/target-objects accessible/xpcom/target-objects browser/app/target-objects browser/components/about/target-objects browser/components/dirprovider/target-objects browser/components/shell/target-objects caps/target-objects config/external/icu/common/target-objects config/external/icu/data/target-objects config/external/icu/i18n/target-objects config/host-objects devtools/platform/target-objects devtools/shared/heapsnapshot/target-objects docshell/build/target-objects dom/base/target-objects dom/battery/target-objects dom/canvas/target-objects dom/events/target-objects dom/events/unix/target-objects dom/geolocation/target-objects dom/html/target-objects dom/indexedDB/target-objects dom/indexedDB/test/gtest/target-objects dom/ipc/target-objects dom/media/bridge/target-objects dom/media/fake-cdm/target-objects dom/media/gmp-plugin-openh264/target-objects dom/media/gmp/widevine-adapter/target-objects dom/media/gtest/mp4_demuxer/target-objects dom/media/ipc/target-objects dom/media/platforms/ffmpeg/ffvpx/target-objects dom/media/target-objects dom/media/webaudio/target-objects dom/media/webrtc/target-objects dom/plugins/base/target-objects dom/plugins/ipc/target-objects dom/prototype/target-objects editor/txmgr/tests/target-objects extensions/auth/target-objects gfx/2d/target-objects gfx/angle/targets/angle_common/target-objects gfx/angle/targets/preprocessor/target-objects gfx/angle/targets/translator/target-objects gfx/cairo/cairo/src/target-objects gfx/cairo/libpixman/src/target-objects gfx/gl/target-objects gfx/ipc/target-objects gfx/layers/target-objects gfx/qcms/target-objects gfx/skia/target-objects gfx/src/target-objects gfx/tests/gtest/target-objects gfx/thebes/target-objects gfx/vr/service/openvr/target-objects gfx/vr/service/target-objects gfx/vr/target-objects gfx/webrender_bindings/target-objects gfx/ycbcr/target-objects hal/target-objects image/build/target-objects image/decoders/icon/gtk/target-objects image/encoders/bmp/target-objects image/encoders/ico/target-objects image/encoders/jpeg/target-objects image/encoders/png/target-objects image/test/gtest/target-objects intl/locale/gtk/target-objects intl/lwbrk/target-objects ipc/app/target-objects ipc/chromium/target-objects ipc/glue/target-objects ipc/gtest/target-objects ipc/ipdl/target-objects ipc/testshell/target-objects js/ductwork/debugger/target-objects js/xpconnect/loader/target-objects js/xpconnect/shell/target-objects js/xpconnect/wrappers/target-objects layout/base/target-objects layout/generic/target-objects layout/ipc/target-objects layout/style/test/host-objects media/mtransport/test/target-objects memory/mozalloc/target-objects mfbt/target-objects mfbt/tests/gtest/target-objects mfbt/tests/target-objects modules/fdlibm/src/target-objects modules/libmar/src/host-objects modules/libmar/tool/host-objects modules/libmar/tool/target-objects modules/zlib/src/target-objects mozglue/baseprofiler/target-objects mozglue/build/target-objects mozglue/misc/target-objects mozglue/tests/target-objects netwerk/base/mozurl/target-objects netwerk/base/target-objects netwerk/build/target-objects netwerk/cache2/target-objects netwerk/dns/target-objects netwerk/mime/target-objects netwerk/protocol/gio/target-objects netwerk/protocol/http/target-objects netwerk/sctp/datachannel/target-objects netwerk/sctp/src/target-objects netwerk/streamconv/target-objects netwerk/system/linux/target-objects netwerk/system/netlink/target-objects other-licenses/bsdiff/host-objects parser/expat/lib/target-objects security/certverifier/tests/gtest/target-objects security/manager/ssl/tests/gtest/target-objects security/manager/ssl/tests/unit/tlsserver/cmd/target-objects security/sandbox/linux/glue/target-objects security/sandbox/linux/target-objects services/crypto/component/target-objects storage/target-objects testing/gtest/benchmark/target-objects testing/gtest/mozilla/target-objects testing/gtest/target-objects testing/mochitest/ssltunnel/target-objects testing/tools/fileid/target-objects testing/tools/screenshot/target-objects toolkit/components/build/target-objects toolkit/components/cascade_bloom_filter/target-objects toolkit/components/commandlines/target-objects toolkit/components/ctypes/target-objects toolkit/components/downloads/target-objects toolkit/components/finalizationwitness/target-objects toolkit/components/find/target-objects toolkit/components/fuzzyfox/target-objects toolkit/components/lz4/target-objects toolkit/components/mozintl/target-objects toolkit/components/osfile/target-objects toolkit/components/parentalcontrols/target-objects toolkit/components/protobuf/target-objects toolkit/components/reflect/target-objects toolkit/components/remote/target-objects toolkit/components/satchel/target-objects toolkit/components/statusfilter/target-objects toolkit/components/telemetry/target-objects toolkit/components/telemetry/tests/target-objects toolkit/components/terminator/target-objects toolkit/components/typeaheadfind/target-objects toolkit/components/url-classifier/target-objects toolkit/crashreporter/breakpad-client/target-objects toolkit/crashreporter/google-breakpad/src/common/dwarf/host-objects toolkit/crashreporter/google-breakpad/src/common/host-objects toolkit/crashreporter/google-breakpad/src/common/linux/host-objects toolkit/crashreporter/google-breakpad/src/common/linux/target-objects toolkit/crashreporter/google-breakpad/src/processor/target-objects toolkit/crashreporter/google-breakpad/src/tools/linux/dump_syms/host-objects toolkit/crashreporter/test/target-objects toolkit/library/target-objects toolkit/mozapps/update/common/target-objects toolkit/mozapps/update/tests/target-objects toolkit/mozapps/update/updater/bspatch/target-objects toolkit/mozapps/update/updater/target-objects toolkit/mozapps/update/updater/updater-dep/target-objects toolkit/mozapps/update/updater/updater-xpcshell/target-objects toolkit/system/gnome/target-objects toolkit/system/unixproxy/target-objects toolkit/xre/target-objects tools/power/target-objects tools/profiler/target-objects uriloader/exthandler/target-objects uriloader/exthandler/tests/target-objects widget/gtk/mozgtk/gtk2/target-objects widget/gtk/mozgtk/gtk3/target-objects widget/gtk/mozgtk/stub/target-objects widget/gtk/mozwayland/target-objects widget/gtk/target-objects widget/gtk/wayland/target-objects widget/target-objects widget/x11/target-objects xpcom/base/target-objects xpcom/build/target-objects xpcom/components/target-objects xpcom/glue/standalone/target-objects xpcom/io/target-objects xpcom/reflect/xptcall/md/unix/target-objects xpcom/reflect/xptcall/target-objects xpcom/reflect/xptinfo/target-objects xpcom/tests/gtest/target-objects xpcom/tests/target-objects xpcom/threads/target-objects
recurse_rusttests: toolkit/library/rust/rusttests
