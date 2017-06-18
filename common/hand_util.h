//
// Created by Walker Ravina on 6/17/17.
//

#ifndef JAMSTACKS_HAND_UTIL_H_H
#define JAMSTACKS_HAND_UTIL_H_H

#endif //JAMSTACKS_HAND_UTIL_H_H

#include "proto/card.pb.h"

namespace jam {
    bool compare_cards(jam::Card const& c1, jam::Card const& c2);
    bool is_flush(jam::Hand const& hand);
}