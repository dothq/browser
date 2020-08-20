# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1
rusttests:: force-cargo-test-run
MOZBUILD_NON_DEFAULT_TARGETS += force-cargo-test-run
CARGO_FILE := $(srcdir)/Cargo.toml
RUST_TESTS := selectors servo_arc stylo_tests glean malloc_size_of_derive
RUST_TEST_FEATURES := quantum_render webgpu cubeb-remoting moz_places gecko_profiler gecko_profiler_parse_elf new_cert_storage webrtc with_dbus
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
