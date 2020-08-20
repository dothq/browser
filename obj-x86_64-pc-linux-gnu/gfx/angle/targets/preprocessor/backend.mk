# THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT.

DEFINES += -DNDEBUG=1 -DTRIMMED=1 -D__NDK_FPABI__= -DANGLE_SKIP_DXGI_1_2_CHECK -DANGLE_ENABLE_KEYEDMUTEX '-DCR_CLANG_REVISION="n332890-c2443155-1"' -DDYNAMIC_ANNOTATIONS_ENABLED=0 -DNOMINMAX -DNTDDI_VERSION=NTDDI_WIN10_RS2 -DUNICODE -DWINVER=0x0A00 -D_ATL_NO_OPENGL -D_CRT_RAND_S -D_CRT_SECURE_NO_DEPRECATE -D_HAS_EXCEPTIONS=0 -D_SCL_SECURE_NO_DEPRECATE -D_SECURE_ATL -D_UNICODE
DIRS := ../angle_common
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/angle/checkout/include
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/angle/checkout/out/gen/angle
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/angle/checkout/src
LOCAL_INCLUDES += -I$(topsrcdir)/gfx/angle/checkout/src/common/third_party/base
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/compiler/preprocessor/DiagnosticsBase.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/compiler/preprocessor/DirectiveHandlerBase.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/compiler/preprocessor/DirectiveParser.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/compiler/preprocessor/ExpressionParser.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/compiler/preprocessor/Input.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/compiler/preprocessor/Lexer.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/compiler/preprocessor/Macro.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/compiler/preprocessor/MacroExpander.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/compiler/preprocessor/Preprocessor.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/compiler/preprocessor/Token.cpp
CPPSRCS += $(topsrcdir)/gfx/angle/checkout/src/compiler/preprocessor/Tokenizer.cpp
COMPUTED_LDFLAGS += -Wl,-rpath-link,/home/kieran/Documents/browser/obj-x86_64-pc-linux-gnu/dist/bin -Wl,-rpath-link,/usr/local/lib
