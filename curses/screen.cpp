#include "curses/screen.h"
#include "curses/game_window.h"
#include <curses.h>
#include <mutex>

namespace jam {

Screen::Screen() noexcept {
  // Initialize the ncurses screen
  initscr();
  // Tell ncurses we wan to recieve one character at a time
  cbreak();
  // Initialize colors
  CHECK(has_colors());
  start_color();
  init_pair(Screen::RED, COLOR_RED, COLOR_BLACK);
  init_pair(Screen::GREEN, COLOR_GREEN, COLOR_BLACK);
  init_pair(Screen::BLUE, COLOR_BLUE, COLOR_BLACK);
  init_pair(Screen::BLACK, COLOR_BLACK, COLOR_BLACK);
  init_pair(Screen::WHITE, COLOR_WHITE, COLOR_BLACK);
}

void Screen::registerGameWindow(std::unique_ptr<GameWindow> window) noexcept {
  CHECK_NOTNULL(window.get());
  gameWindows_.push_back(std::move(window));
}

void Screen::run() noexcept {
  while (true) {
    int c = wgetch(currentGameWindow()->window());
    if (c == 'q') {
      break;
    }
  }
}

GameWindow *Screen::currentGameWindow() const noexcept {
  if (currentGameWindow_ >= gameWindows_.size()) {
    return nullptr;
  }
  return gameWindows_[currentGameWindow_].get();
}

void Screen::nextGameWindow() noexcept {
  auto *window = currentGameWindow();
  if (!window) {
    return;
  }
  currentGameWindow_ = (currentGameWindow_ + 1) % gameWindows_.size();
  if (window->active()) {
    window->deactivate();
    currentGameWindow()->activate();
  }
}

void Screen::prevGameWindow() noexcept {
  auto *window = currentGameWindow();
  if (!window) {
    return;
  }
  currentGameWindow_ = (currentGameWindow_ + gameWindows_.size() - 1) % gameWindows_.size();
  if (window->active()) {
    window->deactivate();
    currentGameWindow()->activate();
  }
}

Screen::~Screen() noexcept { endwin(); }
}
