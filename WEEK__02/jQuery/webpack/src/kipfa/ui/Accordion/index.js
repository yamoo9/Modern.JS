import each from '../../utils/each';

class Accordion {
  constructor(element, options){
    this.options = options;
    this.el = element;
    this.items = [];
    this.headers = [];
    this.panels = [];
    this._init(); // 초기화
  }
  _init(){
    this._setup();
    this._bind();
  }
  _setup(){
    let el = this.el;
    el.classList.add('accordion');

    let children = this.items = el.children;
    each(children, (child, index) => {
      this.headers.push(child.firstElementChild);
      this.panels.push(child.lastElementChild);
      child.classList.add('accordion__item');
      this._setup_headings();
      this._setup_panels();
    });
  }
  _setup_headings(){
    let headers = this.headers;
    each(headers, (header, index) => {
      header.classList.add('accordion__header');
    });
  }
  _setup_panels(){
    let panels = this.panels;
    each(panels, (panel, index) => {
      panel.classList.add('accordion__panel');
    });
  }
  _bind(){
    each(this.headers, (header, index) => {
      header.querySelector('a').addEventListener('click', e => {
        e.preventDefault();
        this.panels[index].classList.add('toggle');
      });
    });
  }
}

// 정의한 클래스(설계)를 내보낸다.
export default Accordion;