###### Modern JavaScript

# [Babel](http://babeljs.io) JavaScript 컴파일러(Compiler)

### 0. [Babel CLI](http://babeljs.io/docs/usage/cli/)

#### 0.1.1 babel-cli 설치

NPM 또는 [yarn](./Yarn.md) 명령을 사용하여 babel-cli 모듈을 로컬 설치한다.

```sh
# NPM
$ npm install --save-dev babel-cli

# yarn
$ yarn add --dev babel-cli
```

설치가 완료되면 `package.json` 파일에 `devDependencies`가 추가된다.

```json
{
  "devDependencies": {
    "babel-cli": "^6.0.0"
  }
}
```

#### 0.1.2 babel-preset-env 모듈 설치

Babel은 문법 변환기(Syntax Transformers)를 통해 최신 버전의 ECMAScript를 지원한다.
이 [플러그인](https://babeljs.io/docs/plugins/)을 사용하면 [최신 ECMAScript 문법](./ECMAScript2015.md)을
모든 브라우저에서 사용할 수 있다.

```sh
# NPM
$ npm i -D babel-preset-env

# yarn
$ yarn add --dev babel-preset-env
```

#### 0.1.3 `.babelrc` 파일 생성

```json
{
  "presets": ["env"]
}
```

아래와 같이 [특정 브라우저에 맞는 설정도 가능](http://babeljs.io/docs/plugins/preset-env/)하다.

```json
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      }
    }]
  ]
}
```

#### 0.2 babel-cli 사용법

##### 파일 컴파일

```sh
# 기본 사용 방법
$ babel <file.js>

# 출력 파일 설정 방법
# 옵션: -o, --out-file
$ babel <input.js> -o <output.js>

# 워치(Watch, 변경사항 관찰) 설정
# 옵션: -w, --watch
$ babel <input.js> -w -o <output.js>

# 소스맵 설정
# 옵션: -s, --source-maps true
$ babel <input.js> -o <output.js> -s # [true, false, inline]

# 인라인 소스맵 설정
# 옵션: --source-maps inline
$ babel <input.js> -o <ouput.js> --source-maps inline
```

##### 디렉토리 컴파일

```sh
# 디렉토리 설정
# 옵션: -d, --output-dir
$ babel <input_dir> -d <output_dir>

# 디렉토리 파일을 한 개의 파일로 컴파일 설정
$ babel <input_dir> -o <output.js> -s
```

##### 파일 무시 설정

```sh
# 옵션: --ignore
$ babel <input_dir> -d <output_dir> --ignore specs.js,test.js
```

##### 플러그인 설정

```sh
# 옵션: --plugins=
$ babel <input.js> -o <output.js> --plugins=es2015
```

##### 프리셋(Presets) 설정

```sh
# 옵션: --presets=
$ babel <input.js> -o <output.js> --presets=add-module-exports,transform-es2015-modules-amd
```

###### Babel Help

```sh
Usage: babel [options] <files ...>

Options:

  -h, --help                           output usage information
  -f, --filename [filename]            filename to use when reading from stdin - this will be used in source-maps, errors etc
  --retain-lines                       retain line numbers - will result in really ugly code
  --no-highlight-code                  enable/disable ANSI syntax highlighting of code frames (on by default)
  --presets [list]
  --plugins [list]
  --ignore [list]                      list of glob paths to **not** compile
  --only [list]                        list of glob paths to **only** compile
  --no-comments                        write comments to generated output (true by default)
  --compact [booleanString]            do not include superfluous whitespace characters and line terminators [true|false|auto]
  --minified                           save as much bytes when printing [true|false]
  -s, --source-maps [booleanString]    [true|false|inline]
  --source-map-target [string]         set `file` on returned source map
  --source-file-name [string]          set `sources[0]` on returned source map
  --source-root [filename]             the root from which all sources are relative
  --no-babelrc                         Whether or not to look up .babelrc and .babelignore files
  --source-type [string]
  --auxiliary-comment-before [string]  print a comment before any injected non-user code
  --auxiliary-comment-after [string]   print a comment after any injected non-user code
  --module-root [filename]             optional prefix for the AMD module formatter that will be prepend to the filename on module definitions
  -M, --module-ids                     insert an explicit id for modules
  --module-id [string]                 specify a custom name for module ids
  --parser-opts [string]               Options to pass into the parser, or to change parsers (parserOpts.parser)
  --generator-opts [string]            Options to pass into the generator, or to change generators (generatorOpts.generator)
  -x, --extensions [extensions]        List of extensions to compile when a directory has been input [.es6,.js,.es,.jsx]
  -w, --watch                          Recompile files on changes
  --skip-initial-build                 Do not compile files before watching
  -o, --out-file [out]                 Compile all input files into a single file
  -d, --out-dir [out]                  Compile an input directory of modules into an output directory
  -D, --copy-files                     When compiling a directory copy over non-compilable files
  -q, --quiet                          Don't log anything
  -V, --version                        output the version number
```

---

##### babel polyfill 설치

애플리케이션에서 ECMAScript 2015+ 환경을 에뮬레이션할 때 사용합니다. polyfill은 babel-node 사용 시 자동으로 로드됩니다.
즉, `Promise` 또는 `WeakMap`, `Array.from` 또는 `Object.assign`과 같은 정적 메서드, `Array.prototype.includes`와 같은
인스턴스 메서드 및 생성자 함수(`regenerator` 플러그인을 사용하는 경우)와 같은 새로운 내장 함수를 사용할 수 있음을 의미합니다.
polyfill은 이를 수행하기 위해 `String`과 같은 원시 프로토 타입뿐만 아니라 전역 범위에 추가합니다.

```sh
# babel.core 소스 코드보다 먼저 실행해야 하기에 devDependency가 아닌, dependency로 설치해야 합니다.
$ npm install --save babel-polyfill
```

##### Node.js, Webpack에서의 사용법

```sh
require('babel-polyfill');
```

```sh
import 'babel-polyfill';
```

```sh
module.exports = { entry: ['babel-polyfill', 'app/js'] };
```

##### 웹 브라우저 환경에서의 사용법

`babel.js` 코드 앞에 먼저 호출되어야 합니다.

```sh
<script src="babel-polyfill.js"></script>
```