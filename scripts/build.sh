ZOME=$1

cp _tsconfig.json src/dna/$ZOME/tsconfig.json

tsc -p src/dna/$ZOME --rootDir src --outDir build/ \
&& rm src/dna/$ZOME/tsconfig.json
