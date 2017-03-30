"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*! Mode.js © yamoo9.net, 2017 */

///////////////////////////////
// Modern JavaScript (ES 6+) //
///////////////////////////////

// class syntax
var Model = function () {

  // Constructor
  function Model(data) {
    _classCallCheck(this, Model);

    this.data = data;
  }

  // Static Methods


  _createClass(Model, [{
    key: "create",


    // Instance Methods
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
  }], [{
    key: "type",
    value: function type(d) {
      return Object.prototype.toString.call(d).slice(8, -1).toLowerCase();
    }
  }]);

  return Model;
}();