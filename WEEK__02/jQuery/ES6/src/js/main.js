'use strict';

var _Accordion = require('./kipfa/ui/Accordion');

var _Accordion2 = _interopRequireDefault(_Accordion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var body = document.querySelector('body'); // 모듈 로드

var options = { container: 'accordion' };

new _Accordion2.default(body, options);

// BabelJS ES2015 Modules Loader Plugin
// https://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/
