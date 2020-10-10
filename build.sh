#!/bin/sh

setup_git() {
  git config --global user.email "$TRAVIS_EMAIL"
  git config --global user.name "$TRAVIS_NAME"
}

do_build() {
  npm run updatemodules
  npm i
  npm run deploy:ci
}

setup_git
do_build