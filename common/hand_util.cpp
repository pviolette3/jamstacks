//
// Created by Walker Ravina on 6/17/17.
//

#include "common/hand_util.h"
#include "proto/card.pb.h"
#include <vector>
#include <algorithm>
#include <iterator>

namespace jam {
    bool compare_cards(jam::Card const& c1, jam::Card const& c2) {
        if (c1.rank() != c2.rank()) {
            return c1.rank() < c2.rank();
        }
        return c1.suit() < c1.suit();
    }


    bool is_flush(jam::Hand const& hand){
        const auto suit = hand.cards(0).suit();
        auto matches = [suit](jam::Card const& card) { return suit == card.suit(); };
        return std::all_of(hand.cards().begin(), hand.cards().end(), matches);
    }
}