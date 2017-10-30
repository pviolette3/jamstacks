#/bin/bash
# Install proto3
git clone -b 'v3.3.1' --single-branch --depth=1 https://github.com/google/protobuf.git
cd protobuf
sudo apt-get install autoconf automake libtool curl make g++ unzip
./autogen.sh
make
sudo make install

# Install BUCK
git clone https://github.com/facebook/buck.git
sudo apt-get update
sudo apt-get install default-jdk ant git
git clone -b 'v2017.10.01.01' --single-branch --depth=1 https://github.com/facebook/buck.git
cd buck
ant
./bin/buck --help

# Install BOOST
https://dl.bintray.com/boostorg/release/1.65.1/source/boost_1_65_1.tar.gz
tar xzvf boost_1_65_1.tar.gz
cd boost_1_65_1
./bootstrap.sh
./b2

# Install BEAST
git clone -b 'v124' --single-branch --depth=1  https://github.com/boostorg/beast.git

# It still doesn't build -- give up..?
