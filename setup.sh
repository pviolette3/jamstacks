#/bin/bash

mkdir -p prebuilt/gflags/lib
mkdir -p prebuilt/protobuf/lib

if [ $(uname -s) == "Darwin" ]; then

brew tap facebook/fb
brew install protobuf buck boost gflags

ln -s /usr/local/include/gflags prebuilt/gflags/include 
ln -s /usr/local/lib/libgflags.dylib prebuilt/gflags/lib/libgflags.dylib

ln -s /usr/local/include/google/protobuf prebuilt/protobuf/include
ln -s /usr/local/lib/libprotobuf.a prebuilt/protobuf/lib/libprotobuf.a

else

sudo apt-get update
sudo apt-get install autoconf automake libtool curl make g++ unzip default-jdk ant git

# Install proto3
git clone -b 'v3.3.1' --single-branch --depth=1 https://github.com/google/protobuf.git
cd protobuf
./autogen.sh
./configure
make
sudo make install

# Install BUCK
git clone https://github.com/facebook/buck.git
git clone -b 'v2017.10.01.01' --single-branch --depth=1 https://github.com/facebook/buck.git
cd buck
ant
./bin/buck --help

fi
