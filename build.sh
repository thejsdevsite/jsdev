#!/bin/sh

setup_git() {
  git config --global user.email "$TRAVIS_EMAIL"
  git config --global user.name "$TRAVIS_NAME"
}

do_build() {
  gatsby build
  gh-pages -d public master -r https://$TRAVIS_EMAIL:$GH_TOKEN@github.com/thejsdevsite/jsdev.git
}

setup_git
do_build