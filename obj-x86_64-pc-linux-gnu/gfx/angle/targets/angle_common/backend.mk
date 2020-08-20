# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -D__NDK_FPABI__= -DANGLE_SKIP_DXGI_1_2_CHECK -DANGLE_ENABLE_KEYEDMUTEX '-DCR_CLANG_REVISION="n332890-c2443155-1"' -DDYNAMIC_ANNOTATIONS_ENABLED=0 -DNOMINMAX -DNTDDI_VERSION=NTDDI_WIN10_RS2 -DUNICODE -DWINVER=0x0A00 -D_ATL_NO_OPENGL -D_CRT_RAND_S -D_CRT_SECURE_NO_DEPRECATE -D_HAS_EXCEPTIONS=0 -D_SCL_SECURE_NO_DEPRECATE -D_SECURE_ATL -D_UNICODE
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/angle/checkout/include
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/angle/checkout/out/gen/angle
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/angle/checkout/src
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/angle/checkout/src/common/third_party/base
CSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/third_party/xxhash/xxhash.c
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/Float16ToFloat32.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/MemoryBuffer.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/PackedEGLEnums_autogen.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/PackedEnums.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/PackedGLEnums_autogen.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/PoolAlloc.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/aligned_memory.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/android_util.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/angleutils.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/debug.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/event_tracer.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/mathutil.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/matrix_utils.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/string_utils.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/system_utils.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/system_utils_linux.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/system_utils_posix.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/third_party/base/anglebase/sha1.cc
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/third_party/smhasher/src/PMurHash.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/tls.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/uniform_type_info_autogen.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/common/utilities.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
