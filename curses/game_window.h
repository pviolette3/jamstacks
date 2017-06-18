#pragma once

#include <glog/logging.h>
#include "game_manager.h"

typedef struct _win_st WINDOW;

namespace jam {

class GameWindow : public GameManager::Handler {
public:
  GameWindow(GameManager &gameManager) noexcept;
  ~GameWindow() noexcept override;

  WINDOW *window() const noexcept;
  bool active() noexcept;
  void activate() noexcept;
  void deactivate() noexcept;
  void draw() const noexcept;

  void onHandStart() noexcept override;
  void onHandComplete() noexcept override;
  /// @returns 0 for check/fold (context dependent) or the bet.
  uint64_t onPlayersAction() noexcept override;
  void onOthersAction(size_t player) noexcept override;
  void onFlop() noexcept override;
  void onTurn() noexcept override;
  void onRiver() noexcept override;

private:
  WINDOW *window_;
  bool active_{false};
};
}
