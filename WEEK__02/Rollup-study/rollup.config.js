// export ES module
// rollup src/main.js -f umd > dist/bundle.js
// enrty => input          --- src/main.js
// dest  => output.file    --- dist/bundle.js
// format => output.format --- umd
export default {
    // 인풋
    input: './src/main.js',
    // 아웃풋
    output: {
        // 파일
        file: './dist/bundle.js',
        // 모듈 포멧
        // iife | cjs | amd | umd | iife
        format: 'iife'
    }
};