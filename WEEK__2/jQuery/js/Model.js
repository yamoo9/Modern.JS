"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*! Mode.js © yamoo9.net, 2017 */

// Define Model Constrcutor (Class)

///////////////////////
// Legacy JavaScript //
///////////////////////

// JavaScript Function is First Class Object
// function _Model(data) {
var _Model = function _Model(data) {
  this.data = data;
};

var toString = Object.prototype.toString;

// Static Methods
// 인스턴스를 생성하지 않고도 사용할 수 있는 메서드
// 디자인 패턴 활용: 네임스페이스 패턴
// jQuery에서는 유틸리티 메서드라고 부른다.
_Model.type = function (d) {
  return toString.call(d).slice(8, -1).toLowerCase();
};

// JavaScript Function Object는
// 반드시 .prototype 속성에 연결된 하나의 객체를 소유한다.
// CRUD
// Instance Methods
_Model.prototype = {
  constructor: _Model,
  create: function create(item) {
    this.data.push(item);
  },
  read: function read() {
    return this.data;
  },
  update: function update() {},
  delete: function _delete() {}
};

///////////////////////////////
// Modern JavaScript (ES 6+) //
///////////////////////////////

// class syntax

var Model = function () {
  function Model(data) {
    _classCallCheck(this, Model);

    this.data = data;
  }
  // instance Methods


  _createClass(Model, [{
    key: "create",
    value: function create(item) {
      this.data.push(item);
    }
  }, {
    key: "read",
    value: function read() {
      return this.data;
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "delete",
    value: function _delete() {}
  }]);

  return Model;
}();