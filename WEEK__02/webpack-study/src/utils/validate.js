// ES6 :: Default Parameter
function validate(condition, error_message = '전달 유형이 잘못되었습니다'){
  // ES5
  // error_message = error_message || '전달 유형이 잘못되었습니다';
  if (!condition) {
    throw new Error(error_message);
  }
}

// 외부에 공개(export)

// CommonJS
// module.exports = validate;

// ES6 Module
export default validate;