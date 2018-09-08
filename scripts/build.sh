# ZOME=$1
FLAGS=$1
# SRC="src"

# cp _tsconfig.json $SRC/tsconfig.json

npx tslint --fix -p src/tsconfig.json src/**/*.ts \
&& tsc $FLAGS -p src --rootDir src --outDir build/ \
# && rm $SRC/tsconfig.json
