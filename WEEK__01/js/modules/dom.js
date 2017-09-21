function dom(el){
  this.el = el;
  // return this;
}

dom.prototype = {
  constructor: dom,
  init: function(){
    console.log('initialization');
  },
  bind: function(){
    console.log('bind events');
  },
  update: function(){
    console.log('update content');
  }
};
