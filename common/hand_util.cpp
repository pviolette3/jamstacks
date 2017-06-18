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

    void assign_hand_type(jam::Hand* hand) {
        if (is_four_of_a_kind(*hand)) {
            hand->set_type(jam::Hand_Type_FOUR_OF_A_KIND);
        }
    }

    bool is_k_of_kind(jam::Hand const& hand, int k) {
        for (const auto& c1 : hand.cards()) {
            int count = 0;
            for (const auto& c2 : hand.cards()) {
                count += c1.rank() == c2.rank() ? 1 : 0;
            }
            if (count >= k) {
                return true;
            }
        }
        return false;
    }

    bool is_straight_flush(jam::Hand const& hand) {
        return is_flush(hand) && is_straight(hand);
    }

    bool is_four_of_a_kind(jam::Hand const& hand) {
        return is_k_of_kind(hand, 4);
    }

    bool is_full_house(jam::Hand const& hand) {
        std::vector<Card> cards = sorted_hand(hand);
        bool res = (cards[0].rank() == cards[1].rank()) && (cards[2].rank() == cards[3].rank()) &&
                (cards[2].rank() == cards[4].rank());
        return res || ((cards[0].rank()== cards[1].rank()) && (cards[1].rank() == cards[2].rank()) &&
                (cards[3].rank() == cards[4].rank()));
    }

    bool is_flush(jam::Hand const& hand){
        const auto suit = hand.cards(0).suit();
        auto matches = [suit](jam::Card const& card) { return suit == card.suit(); };
        return std::all_of(hand.cards().begin(), hand.cards().end(), matches);
    }

    bool is_straight(jam::Hand const& hand) {
        std::vector<jam::Card> cards = sorted_hand(hand);
        auto last_rank = Card_Rank_UNUSED;
        bool consecutive = true;
        for (const auto& card : cards) {
            consecutive &= last_rank == Card_Rank_UNUSED || card.rank() == last_rank + 1;
            last_rank = card.rank();
        }
        if (consecutive) {
            return true;
        }
        // Special case for Ace as first straight card.
        if (cards[4].rank() == Card_Rank_ACE) {
            last_rank = static_cast<Card_Rank>(1);
        } else {
            return false;
        }
        consecutive = true;
        for (int i = 1; i < cards.size(); ++i) {
            const auto& card = cards[i];
            consecutive &= card.rank() == last_rank + 1;
            last_rank = card.rank();
        }
        return consecutive;
    }

    bool is_three_of_a_kind(jam::Hand const& hand) {
        return is_k_of_kind(hand, 3);
    }

    bool is_two_pair(jam::Hand const& hand) {
        int rank_1 = Card_Rank_UNUSED;
        for (const auto c1 : hand.cards()) {
            for (const auto c2: hand.cards()) {
                if (c2.rank() == c1.rank()) {
                    rank_1 = c1.rank();
                    break;
                }
            }
            if (rank_1 != Card_Rank_UNUSED) {
                break;
            }
        }
        if (rank_1 == Card_Rank_UNUSED) {
            return false;
        }
        for (const auto c1 : hand.cards()) {
            for (const auto c2: hand.cards()) {
                if (c1.rank() != rank_1 && c1.rank() == c2.rank()) {
                    return true;
                }
            }
        }
        return false;
    }

    bool is_pair(jam::Hand const& hand) {
        return is_k_of_kind(hand, 2);
    }

    bool is_high_card(jam::Hand const& hand) {
        return true;
    }

    std::vector<jam::Card> sorted_hand(jam::Hand const& hand){
        std::vector<Card> cards;
        std::copy(hand.cards().begin(), hand.cards().end(), std::back_inserter(cards));
        std::sort(cards.begin(), cards.end(), compare_cards);
        return cards;
    }
}
