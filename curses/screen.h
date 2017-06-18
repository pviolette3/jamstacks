#pragma once

#include <vector>
#include <memory>

namespace jam {

class GameWindow;

class Screen {
  std::vector<std::unique_ptr<GameWindow>> gameWindows_{};
  size_t currentGameWindow_{0};

  GameWindow *currentGameWindow() const noexcept;
  void nextGameWindow() noexcept;
  void prevGameWindow() noexcept;

public:
  enum Colors {
    RED = 1,
    GREEN,
    BLUE,
    BLACK,
    WHITE,
  };
  Screen() noexcept;
  ~Screen() noexcept;

  // TODO: Probably doesn't belong here...
  void registerGameWindow(std::unique_ptr<GameWindow> window) noexcept;

  // Runs until SIGINT
  void run() noexcept;
};
}
