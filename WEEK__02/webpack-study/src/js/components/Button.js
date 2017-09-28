import $ from 'jquery';

class Button {
  constructor($el){
    this.$el = $el;
    this._init();
  }
  _init(){
    this.$el.addClass('jquery-our-company-button')
    this._bindEvents();
  }
  _bindEvents(){
    this.$el.on('click', this._toggleButtonMode);
  }
  _toggleButtonMode(e){
    e.preventDefault();
    $(this).css('background', 'yellow');
  }
}

export default Button;