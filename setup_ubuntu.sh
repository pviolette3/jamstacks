#/bin/bash
# Install proto3
git clone -b 'v3.3.1' --single-branch --depth=1 https://github.com/google/protobuf.git
cd protobuf
sudo apt-get install autoconf automake libtool curl make g++ unzip
./autogen.sh
make
sudo make install
