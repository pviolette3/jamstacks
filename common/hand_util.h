//
// Created by Walker Ravina on 6/17/17.
//

#ifndef JAMSTACKS_HAND_UTIL_H_H
#define JAMSTACKS_HAND_UTIL_H_H

#endif //JAMSTACKS_HAND_UTIL_H_H

#include "proto/card.pb.h"

namespace jam {
    void assign_hand_type(jam::Hand* hand);
    bool is_straight_flush(jam::Hand const& hand);
    bool is_four_of_a_kind(jam::Hand const& hand);
    bool is_full_house(jam::Hand const& hand);
    bool is_flush(jam::Hand const& hand);
    bool is_straight(jam::Hand const& hand);
    bool is_three_of_a_kind(jam::Hand const& hand);
    bool is_two_pair(jam::Hand const& hand);
    bool is_high_card(jam::Hand const& hand);
    std::vector<jam::Card> sorted_hand(jam::Hand const& hand);
}