#include "curses/game_window.h"
#include "curses/game_manager.h"
#include "screen.h"

using namespace jam;

int main(int argc, char** argv) {
  Screen screen;
  GameManager gameManager;
  auto window = std::make_unique<GameWindow>(gameManager);
  auto & windowRef = *window;
  screen.registerGameWindow(std::move(window));

  screen.run();
}
