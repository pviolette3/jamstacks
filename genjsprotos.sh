#!/bin/bash
# See if pbjs compiler is installed.
command -v pbjs 2>&1 > /dev/null || npm install -g protobufjs@6.8.0

# Add a call to factory(protobuf) to get the lib in protobuf.roots.default.jam.
pbjs proto/card.proto proto/hand_state.proto proto/game_state.proto -t static-module \
| sed 's%factory(require("protobufjs/minimal"));%1;\nfactory(protobuf);\n%g' > web/proto/jam.proto.js && echo 'Generated protos.'