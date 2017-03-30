/*! Mode.js © yamoo9.net, 2017 */

// Define Model Constrcutor (Class)

///////////////////////
// Legacy JavaScript //
///////////////////////

// JavaScript Function is First Class Object
// function _Model(data) {
var _Model = function (data) {
  this.data = data;
};

var toString = Object.prototype.toString;

// Static Methods
// 인스턴스를 생성하지 않고도 사용할 수 있는 메서드
// 디자인 패턴 활용: 네임스페이스 패턴
// jQuery에서는 유틸리티 메서드라고 부른다.
_Model.type = function(d) {
  return toString.call(d).slice(8,-1).toLowerCase();
};

// JavaScript Function Object는
// 반드시 .prototype 속성에 연결된 하나의 객체를 소유한다.
// CRUD
// Instance Methods
_Model.prototype = {
  constructor: _Model,
  create: function(item) {
    this.data.push(item);
  },
  read: function() {
    return this.data;
  },
  update: function() {

  },
  delete: function() {

  },
}


///////////////////////////////
// Modern JavaScript (ES 6+) //
///////////////////////////////

// class syntax
class Model {
  constructor(data) {
    this.data = data;
  }
  // instance Methods
  create(item) {
    this.data.push(item);
  }
  read() {
    return this.data;
  }
  update() {}
  delete() {}
}
