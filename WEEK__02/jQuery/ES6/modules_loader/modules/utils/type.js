let toString = Object.prototype.toString;

function type(d) {
  return toString.call(d).toLowerCase().slice(8,-1);
}

// CommonJS Export
// module.exports = data;
// exports = { data };
// module.exports = type;

// ES2015 Export
// export default type;