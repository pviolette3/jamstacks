
################################################################################
# Shared Flags
################################################################################
JAM_CPPFLAGS := -I. $(CPPFLAGS)
JAM_CXXFLAGS := -std=c++14 $(CXXFLAGS)
JAM_LDFLAGS  := $(LDFLAGS)

# NOTE: All variables will be expanded on every use (= not :=).
JAM_FLAGS = $(JAM_CPPFLAGS) $(JAM_CXXFLAGS) $(JAM_LDFLAGS)

JAM_LIBS :=
JAM_HEADERS :=
JAM_SRCS :=
JAM_OBJS = $(patsubst %.cc,%.o,$(patsubst %.cpp,%.o,$(JAM_SRCS)))

################################################################################
# Protobufs
################################################################################
PROTO_PROTOS := $(wildcard proto/*.proto)
PROTO_HEADERS := $(patsubst %.proto,%.pb.h,$(PROTO_PROTOS))
PROTO_SRCS := $(patsubst %.proto,%.pb.cc,$(PROTO_PROTOS))

JAM_LIBS += -lprotobuf
JAM_HEADERS += $(PROTO_HEADERS)
JAM_SRCS += $(PROTO_SRCS)

JAM_CPPFLAGS += `pkg-config --cflags protobuf`
JAM_LDFLAGS += `pkg-config --libs-only-L protobuf`

PROTOC ?= protoc
PROTOC_FLAGS := -Iproto/

.PRECIOUS: $(PROTO_HEADERS) $(PROTO_SRCS)
%.pb.h %.pb.cc: %.proto
	$(PROTOC) --cpp_out proto $(PROTOC_FLAGS) $^

################################################################################
# Common
################################################################################

JAM_LIBS +=
JAM_HEADERS += $(wildcard common/*.h)
JAM_SRCS += $(wildcard common/*.cpp)

################################################################################
# Jam Curses Library
################################################################################

JAM_LIBS += -lcurses -lglog
JAM_HEADERS += $(wildcard curses/*.h)
JAM_SRCS += curses/game_manager.cpp curses/screen.cpp curses/game_window.cpp

################################################################################
# Googletest Library
################################################################################

JAM_LDFLAGS += -L googletest/build/googlemock/gtest
JAM_CPPFLAGS += -isystem googletest/googletest/include

# HACK: Download googletest once and build it
googletest:
googletest:
	@$(RM) -rf googletest
	@git clone https://github.com/google/googletest
	@mkdir -p googletest/build
	@cd googletest/build && cmake -DCMAKE_CXX_FLAGS="-fPIC $(JAM_CXXFLAGS)" .. && $(MAKE)

################################################################################
# Shared Build Rules
################################################################################

# HACK: Make all object file builds depend on ALL headers
#       We will overbuild, but it won't be incorrect.
%.o: %.cpp $(JAM_HEADERS)
	$(CXX) $(JAM_CPPFLAGS) $(JAM_CXXFLAGS) -c -o $@ $(patsubst %.o,%.cpp,$@)

%.o: %.cc $(JAM_HEADERS)
	$(CXX) $(JAM_CPPFLAGS) $(JAM_CXXFLAGS) -c -o $@ $(patsubst %.o,%.cc,$@)

.PHONY:
clean:
	rm -f $(JAM_OBJS) $(PROTO_HEADERS) $(PROTO_SRCS)
	rm -f jam-curses
	rm -rf googletest/

################################################################################
# Jam Curses Binary
################################################################################

jam-curses: $(JAM_OBJS) curses/main.o
	$(CXX) $(JAM_FLAGS) $^ $(JAM_LIBS) -o $@

################################################################################
# Tests
################################################################################

TEST_LIBS := -lgtest -lgtest_main

tests/%: tests/%.cpp $(JAM_OBJS) $(JAM_HEADERS) googletest
	$(CXX) $(JAM_FLAGS) $(patsubst %,%.cpp,$@) $(JAM_OBJS) $(JAM_LIBS) $(TEST_LIBS) -o $@
