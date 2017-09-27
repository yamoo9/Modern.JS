/*! simple-memo-application.js @ 2017, yamoo9.net */
;(function(global, $){
  'use strict';

  // 현재 개발 영역 내에서 참조 가능한 지역 변수를 선언
  let app, memo_container, memo, memo_buttons, input, textarea;

  // 서버 API 주소
  let rest_api = '/memo-app';

  // 애플리케이션 초기화 함수
  // 화살표 함수
  let init = () => {
    app            = $('.app');
    memo           = $('.memo', app);
    memo_buttons   = $('.button', memo);
    memo_container = $('.memo-item-container', app);
    input          = memo.find('#memo-title');
    textarea       = memo.find('#memo-content');
    // 사용자에게 UI를 렌더링
    render();
    // 이벤트 바인딩
    bind();
  };
  // 애플리케이션 UI를 그리는 함수
  let render = () => {
    // Server로부터 데이터 로드(GET)
    $.get(rest_api, data => {
      // 데이터를 순환처리하여 화면에 그린다.
      // 템플릿 코드를 정리할 변수
      let memo_template = '';
      $.each(data, (index, memo) => {
        // 데이터를 순환처리하여 템플릿에 바인딩 (데이터 바인딩)
        // ES6: string template `backtic`
        // ES6: ${표현식 | 변수 | 함수}
        memo_template += `
          <article class="memo-item column is-3 message is-primary">
            <div class="message-header">
              <h5 class="memo-item-title">${memo.title}</h5>
              <button
                data-remove-id="${memo.id}"
                type="button"
                class="delete"
                aria-label="메모 아이템 제거"></button>
            </div>
            <div class="message-body">
              <p class="memo-item-content">${memo.content}</p>
            </div>
          </article>
        `;
      });
      memo_container.html(memo_template);
    });
  };
  // DOM 객체에 이벤트 연결
  let bind = () => {
    $.each(memo_buttons, function(index){
      let button = memo_buttons.eq(index);
      button.on('click', $.proxy(detectButton, button));
    });
    // 메모 아이템을 제거하는 이벤트를 처리하기 위한 상위 요소에
    // 이벤트 위임(Delegation)
    memo_container.on('click', 'button.delete', removeMemo);
  };
  // 사용자가 메모 입력 버튼, 입력 취소 버튼을 눌렀을 때 감지되는 함수
  let detectButton = function() {
    this.hasClass('is-save') ? saveMemo.call(this) : cancelInput.call(this);
  };
  // 사용자 입력 내용을 검증하는 함수
  let validateInput = (input_content, textarea_content) => {
    // input 검증
    if ( $.trim(input_content) === '' ) {
      global.alert('메모 제목을 올바르게 입력해주세요.');
      input.focus(); // 사용자에게 입력을 요하는 영역으로 포커스 이동
      return false; // 오류이기에 거짓을 반환
    }
    // textaerea 검증
    if ( $.trim(textarea_content) === '' ) {
      global.alert('메모 내용을 올바르게 입력해주세요.');
      textarea.focus(); // 사용자에게 입력을 요하는 영역으로 포커스 이동
      return false; // 오류이기에 거짓을 반환
    }
    // 결과 반환
    return true;
  };
  // 사용자 입력한 메모 값인 객체를 서버에 전송 (문자화)
  let saveMemo = function() {
    let title   = input.val();
    let content = textarea.val();
    // 유효성 검사를 통과하지 못하면 함수 종료 (사용자에게 요구사항을 알림)
    if ( !validateInput(title, content) ) { return; }
    // 사용자 입력 데이터를 객체화
    // 향상된 객체 표기 방법 (ES6)
    const memo_item = { title, content };
    // 사용자 입력 내용을 객체화 -> 문자화
    // Native
    // console.log('Native:', global.JSON.stringify(memo_item));
    // jQuery Ajax(비동기 통신)
    $.post(rest_api, $.param(memo_item), (data, status)=>{
      // POST 통신이 성공했으니까 사용자 화면을 업데이트
      render();
      // POST 통신이 성공하면, 사용자가 입력한 내용을 지웁니다.
      cancelInput();
    });
  };
  // 메모를 제거하는 함수
  let removeMemo = (e) => {
    var remove_id = e.target.dataset.removeId;
    // 서버에 DELETE 메서드를 사용하여 메모 제거 요청
    // $.delete() 형태로 jQuery 확장
    $.delete(`${rest_api}/${remove_id}`, () => render());
  };
  // 사용자가 입력한 내용을 지움
  let cancelInput = function() {
    input.val('');
    textarea.val('');
  };

  // 함수 실행
  init();

})(window, window.jQuery);