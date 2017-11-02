class Accordion {
  constructor(element, options){
    this.el = element;
    this.options = options;
    this._init(); // 초기화
  }
  _init(){
    console.log('initialization Accordion Component');
    this.el.classList.add('initialized');
  }
}

// 정의한 클래스(설계)를 내보낸다.
export default Accordion;