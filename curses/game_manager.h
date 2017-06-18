#pragma once

#include <array>
#include <memory>
#include <vector>
#include <string>
#include <stdint.h>

namespace jam {
// Thread-safe game state
class GameManager {
public:
  GameManager() {}
  class Handler {
    GameManager *gameManager_;

  protected:
    Handler(GameManager &gameManager) noexcept : gameManager_(&gameManager) {
      gameManager_->registerHandler(*this);
    }
    GameManager const &gameManager() { return *gameManager_; }

  public:
    virtual ~Handler() noexcept {}
    // Show cards, small blind, big blind, dealer token
    virtual void onHandStart() noexcept = 0;
    virtual void onHandComplete() noexcept = 0;
    /// @returns 0 for check/fold (context dependent) or the bet.
    virtual uint64_t onPlayersAction() noexcept = 0;
    virtual void onOthersAction(size_t player) noexcept = 0;
    virtual void onFlop() noexcept = 0;
    virtual void onTurn() noexcept = 0;
    virtual void onRiver() noexcept = 0;
  };

private:
  void registerHandler(Handler &handler) { handlers_.push_back(&handler); }

  std::vector<Handler *> handlers_;
};
}
