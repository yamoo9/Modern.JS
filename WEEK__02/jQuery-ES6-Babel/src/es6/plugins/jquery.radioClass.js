// jQuery Plugin Shell
(($ = window.jQuery) => {
  try {
    // radioClass 플러그인을 이미 지원하는가?
    if (!$.fn.radioClass) {
      // 지원하지 않는다면 추가
      $.fn.radioClass = function (name, cb = () => {}) {
        // 메서드가 할 일(Logic)
        // this는 누구?
        // jQuery 객체 자신
        // 주의!
        // 화살표 함수를 사용하면
        // this는 jQuery 객체가 아니게 된다.
        // console.log(this);
        // 형제를 찾아야 한다.
        const siblings = this.siblings();
        // 형제 중 name에 해당하는 대상을 찾아
        // name에 해당하는 클래스를 제거
        // .find() vs .filter()
        // `p :nth-child(2)` vs `p:nth-child(2)`
        siblings.filter(`.${name}`).removeClass(name);
        // 자신에게는 name에 해당하는 클래스를 추가
        this.addClass(name);

        // 플러그인 공정이 모두 끝나면 콜백 함수를 실행하라.
        // typeof cb === 'function' && cb();
        cb();

        // Method Chaining
        return this;
      };
    }
  } catch (error) {
    console.error(error);
  }
})();