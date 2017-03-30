/*! Mode.js © yamoo9.net, 2017 */

///////////////////////////////
// Modern JavaScript (ES 6+) //
///////////////////////////////

// class syntax
class Model {

  // Constructor
  constructor(data) {
    this.data = data;
  }

  // Static Methods
  static type(d) {
    return Object.prototype.toString.call(d).slice(8,-1).toLowerCase();
  }

  // Instance Methods
  create(item) {
    this.data.push(item);
  }
  read() {
    return this.data;
  }
  update() {

  }
  delete() {

  }

}
