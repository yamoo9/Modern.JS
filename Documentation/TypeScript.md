# TypeScript

타입스크립트(TypeScript)는 자바스크립트(JavaScript)로 컴파일되는 언어.

## TypeScript 설치

```bash
# 글로벌 설치
$ npm install --global typescript

# 로컬 설치
$ npm install --save-dev typescript
```

## CLI 환경에서 TypeScript 실행

NPM `init` 명령 실행. (`-y` 옵션 사용)

```bash
$ npm init -y
```

`package.json` 파일 내부에 스크립트 추가

```json
"scripts": {
    "ts": "tsc"
}
```

TypeScript 설치 버전 확인

> NPM 실행(run) 명령 뒤에 붙는 `--`은 옵션을 추가하고자 할 경우 사용

```bash
$ npm run ts -- -V
```

`.ts` 파일 컴파일

```bash
$ npm run ts <file.ts>
```

## TypeScript 초기화(Initialization)

`tsconfig.json` 파일 생성

```bash
$ npm run ts -- --init
```

`tsconfig.json` 파일 생성이 생성된 이후는 `npm run ts` 명령만 실행하면 자동 처리.

```bash
$ npm run ts
```

## TypeScript 관찰(Watch)

프로젝트 디렉토리 내부의 모든 `.ts` 파일을 관찰 후, 변경 감지 시 컴파일 처리.

```bash
$ npm run ts -- --watch # npm run ts -- -w
```

`package.json` 파일의 스크립트에 관찰 명령을 추가.

```json
"scripts": {
    "ts": "tsc",
    "ts:w": "tsc --watch"
},
```

명령을 추가한 이후는 `npm run ts:w`로 관찰 명령 실행 가능.

```bash
$ npm run ts:w
```

## tslint 설치

tslint 개발 모듈 로컬 설치

```bash
$ npm i -D tslint # install --save-dev
```

`package.json` 파일을 열어 `tslint` 명령어 추가

```json
"scripts": {
    "ts": "tsc",
    "ts:w": "tsc --watch",
    "tslint": "tslint"
},
```

## tslinst 초기화(Initialization)

`--init` 명령을 사용하여 `tslint.json` 파일 생성

```bash
$ npm run tslint -- -i # -i, --init
```

## Visual Studio Code 익스텐션(Extension) 설치

빠른 실행(아래 단축키 참고) 명령을 통해 [`tslint` 익스텐션](https://github.com/Microsoft/vscode-tslint) 검색 및 설치

- `⌘ + P` (OSX)
- `Ctrl + P` (Windows)

```bash
ext install tslint
```

## tslint 규칙(Rules) 설정

[tslint Rules](https://palantir.github.io/tslint/rules/)을 참고하여 설정

```json
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "no-console": false,
        "member-ordering": false,
        "quotemark": [
            "single"
        ],
        "variable-name": [
            "allow-snake-case"
        ],
        "member-access": [
            "no-public"
        ],
        "one-line": [
            "check-open-brace"
        ],
        "typedef-whitespace": [
            true,
            {
                "parameter": "nospace"
            }
        ]
    },
    "rulesDirectory": []
}
```