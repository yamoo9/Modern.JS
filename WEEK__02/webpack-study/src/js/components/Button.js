import './Button.sass';

import $ from 'jquery';
import '../plugins/jquery.radioClass';

let type = 'button';

function toggleButtonMode(e){
  e.preventDefault();
  let $this = $(this);

  $this.parent().radioClass('button-parent');

  $this
    .toggleClass('pressed')
    .attr('aria-pressed', true);

}

// JavaScript OOP
// Prototype
// public
// private
// protected
class Button {
  constructor($el){
    this.$el = $el;
    this._init();
  }
  _init(){
    this.$el.addClass('our-company-button');
    this.$el.attr('role', 'button');
    this.$el.attr('aria-pressed', false);
    this._bindEvents();
  }
  _bindEvents(){
    this.$el.on('click', toggleButtonMode);
  }
}

window.Button = Button;

export default Button;