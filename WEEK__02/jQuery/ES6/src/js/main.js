'use strict';

var _Accordion = require('./kipfa/ui/Accordion');

var _Accordion2 = _interopRequireDefault(_Accordion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var body = document.querySelector('body'); // ?? ??

var options = { container: 'accordion' };

var body_acc = new _Accordion2.default(body, options);

// --------------------------------------------------------------------
// BabelJS ES2015 Modules Loader Plugin
// https://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/
// https://goo.gl/uglJ3y
// --------------------------------------------------------------------
