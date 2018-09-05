ZOME=$1
FLAGS=$2
SRC="src/dna/$ZOME"

cp _tsconfig.json $SRC/tsconfig.json

npx tslint --fix -p $SRC/tsconfig.json $SRC/**/*.ts \
&& tsc $FLAGS -p $SRC --rootDir src --outDir build/ \
&& rm $SRC/tsconfig.json
