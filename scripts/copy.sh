FLAGS=$1

cpx $FLAGS "./src/**/*.json" ./build && cpx $FLAGS "./src/**/test" ./build