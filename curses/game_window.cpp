#include "game_window.h"
#include <curses.h>

namespace jam {

GameWindow::GameWindow(GameManager &gameManager) noexcept
    : GameManager::Handler(gameManager),
      window_(newwin(LINES, COLS, 0, 0)) {
  CHECK_NOTNULL(window_);
  keypad(window_, true);
}

GameWindow::~GameWindow() noexcept { delwin(window_); }

WINDOW *GameWindow::window() const noexcept { return window_; }
bool GameWindow::active() noexcept { return active_; }
void GameWindow::activate() noexcept {
  active_ = true;
  draw();
}
void GameWindow::deactivate() noexcept { active_ = false; }
void GameWindow::draw() const noexcept {
  if (active_) {
    wrefresh(window_);
  }
}

void GameWindow::onHandStart() noexcept {}
void GameWindow::onHandComplete() noexcept {}
/// @returns 0 for check/fold (context dependent) or the bet.
uint64_t GameWindow::onPlayersAction() noexcept { return 0; }
void GameWindow::onOthersAction(size_t player) noexcept {}
void GameWindow::onFlop() noexcept {}
void GameWindow::onTurn() noexcept {}
void GameWindow::onRiver() noexcept {}
}
