
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
JAM_OBJS :=

################################################################################
# Protobufs
################################################################################
PROTO_PROTOS := $(wildcard proto/*.proto)

JAM_LIBS += -lprotobuf
JAM_HEADERS += $(patsubst %.proto,%.pb.h,$(PROTO_PROTOS))
JAM_OBJS += $(patsubst %.proto,%.pb.o,$(PROTO_PROTOS))

JAM_CPPFLAGS += `pkg-config --cflags protobuf`
JAM_LDFLAGS += `pkg-config --libs-only-L protobuf`

PROTOC ?= protoc
PROTOC_FLAGS := -Iproto/

%.pb.h %.pb.cc: %.proto
	$(PROTOC) --cpp_out proto $(PROTOC_FLAGS) $^

################################################################################
# Common
################################################################################

JAM_LIBS +=
JAM_HEADERS += $(wildcard common/*.h)
JAM_OBJS += $(wildcard common/*.o)

################################################################################
# Jam Curses Library
################################################################################

JAM_LIBS += -lcurses -lglog
JAM_HEADERS += $(wildcard curses/*.h)
JAM_OBJS += curses/game_manager.o curses/screen.o curses/game_window.o

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
	@rm -f **/*.o **/*.pb.h **/*.pb.cc
	@rm -f jam-curses

################################################################################
# Jam Curses Binary
################################################################################

jam-curses: $(JAM_OBJS) curses/main.o
	$(CXX) $(JAM_FLAGS) $^ $(JAM_LIBS) -o $@
