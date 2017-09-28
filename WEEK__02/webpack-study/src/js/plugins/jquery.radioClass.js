import $ from 'jquery';

// jQuery Plugin Shell
// $.fn === jQuery.prototype;
$.fn.radioClass = $.fn.radioClass || function(name){
  // this === jQuery Object
  this.siblings(`.${name}`).removeClass(name);
  this.addClass(name);
  return this;
};