#include <iostream>
#include "gflags/gflags.h"
#include "card.pb.h"

DEFINE_string(foo, "", "A thing");

int main(int argc, char **argv) {
  gflags::ParseCommandLineFlags(&argc, &argv, true);
  jam::Card c;
  c.set_suit(jam::Card::CLUBS);
  return 0;
}
