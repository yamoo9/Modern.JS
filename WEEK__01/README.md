###### WEEK 01

<img src="../ASSETS/survey.png" alt="Survey" align="right" width="165" height="165">

# Pre Survey

수업 시작 전, __사전 조사/레벨 테스트__입니다. 아래 링크 글을 따라가 설문 및 질문에 응답해주세요.<br>

[How much do you know about JavaScript?](https://goo.gl/forms/ksQlGF767PZmMmEA3)

※ 본 과정은 과정 시작 전, 수강생 수준 테스트 후 평균 학습 능력에 따라 커리큘럼이 변동될 수 있습니다.<br>
요컨대 수강생 수준이 부족하다 판단될 경우 JavaScript 기본기를 다지는 교육으로 변경 진행합니다.

<br>
<br>

<img src="../ASSETS/js-jquery-vue.jpg" alt="JS jQuery Vue" align="right" width="130" height="360">

# Agenda

#### WEEK 01. JavaScript DAY
첫째 주, JavaScript 언어에 초점을 두고 다양한 이야기를 나눠 봅니다.

#### WEEK 02. jQuery DAY
둘째 주, jQuery 라이브러리 활용 방법에 대해 이야기 나눠 봅니다.

#### WEEK 03. Vue DAY
셋째 주, Vue JS 프레임워크에 대해 이야기 나눠 봅니다.

<br>
<br>

## 01 × JavaScript DAY

첫째 주는 JavaScript 언어에 대해 이야기해보는 시간입니다.<br>
언어적 특성 또는 설계 패턴, ECMAScript 2015 컴파일 등 흥미롭고 다양한 주제를 다뤄봅니다.

1. [JavaScript Core](https://developer.mozilla.org/ko/docs/Web/JavaScript)
1. [JavaScript Anti/Good Pattern](http://bonsaiden.github.io/JavaScript-Garden/)
1. [JavaScript Design Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
1. [ECMAScript 2015(ES 6)](http://babeljs.io/learn-es2015/) & [Babel CLI](http://babeljs.io/)

<br>

<img src="../ASSETS/ecmascript-version.png" alt="ECMAScript" width="476" height="223">

<br>
<br>

<img src="../ASSETS/beginner.jpg" alt="나는 초보" width="250" height="146" align="right">

## JavaScript 기초 학습은 여기서<i>!</i>

언어에 대한 기초 지식이 부족한 분들은 공개 강의를 통해 실력을 __UPGRADE__ 해보세요.

글 읽는 것을 싫어하는 분들은 영상 강의가 좋겠죠?<br>
[JavaScript × opentutorials.org](https://opentutorials.org/course/743)

글 읽는 것을 좋아하는 분들은 여기서 공부해보세요<i>!</i><br>
[JavaScript × poiemaweb.com](http://poiemaweb.com/)

## JavaScript 중/고급 학습은 여기서<i>!</i>

[JavaScript × BSIDESOFT](http://www.bsidesoft.com/?cat=5)

---

### 수업 진행을 위한 준비

#### 버전관리 도구

Git을 설치하고, GitHub 서비스 계정을 생성합니다.

- [Git for Windows](https://git-for-windows.github.io/)
- [GitHub](https://github.com)
- [누구나 쉽게 이해할 수 있는 Git 입문](https://backlog.com/git-tutorial/kr/)

#### 브라우저 & 익스텐션

수업에서 사용할 브라우저와 익스텐션입니다. 설치해주세요.

- 브라우저 [Chrome](https://www.google.co.kr/chrome/browser/desktop/index.html)
- 익스텐션 [GitZip for github](https://chrome.google.com/webstore/detail/gitzip-for-github/ffabmkklhbepgcgfonabamgnfafbdlkn)
- 익스텐션 [Octotree](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc)

#### CLI 도구

Windows 기본 명령어 도구는 불편하죠. 보다 편리한 사용을 도와주는 도구를 설치해보세요. (택 1)

- [cmder](http://cmder.net/)([사용법](http://javaworld.co.kr/82))
- [conemu](http://conemu.github.io/)([사용법](http://programmingsummaries.tistory.com/352))

#### 서버 환경 도구

- [NodeJS](https://nodejs.org)
- [live-server](https://www.npmjs.com/package/live-server)

<br>

## GitHub 서비스

GitHub 계정 등록 및 저장소를 관리하는 방법을 공부해 봅니다.

1. Git 설치
1. GitHub 계정 생성 및 저장소 생성
1. Git Bash 및 CLI 도구 설정 및 명령어 활용
1. GitHub 프로젝트 웹 호스팅

<br>

### GitHub 원격저장소 클론

생성한 저장소 인터페이스 오른쪽에 있는 __Clone or download 버튼을 클릭__ 한 후, https 주소를 클립보드에 저장합니다.

<img src="https://raw.githubusercontent.com/yamoo9/DDP/master/_/git-clone-copy.jpg" alt="">

명령어 도구를 열어 원격저장소를 복사할 위치로 이동합니다.

```sh
# 데스크톱으로 이동할 경우
$ cd ~/Deskop

# 도큐멘트로 이동할 경우
$ cd ~/Document
```


`git clone` 명령을 사용하면 원격저장소의 데이터를 로컬 컴퓨터로 다운로드 받습니다.

```sh
$ git clone https://github.com/<계정이름>/<저장소이름>.git
```