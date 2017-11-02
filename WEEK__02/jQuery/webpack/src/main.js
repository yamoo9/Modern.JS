import _         from 'lodash';
import $         from 'jquery';
import q         from './kipfa/dom/q';
import Accordion from './kipfa/ui/Accordion';

let global = window;
let document = global.document;

// Accordion 객체 생성 구문
const demo_acc = new Accordion( q('.demo'), {} );

global.demo_acc = demo_acc;

// const document = global.document;
let heading_message = ['Hello', 'Webpack', ':)'];

function jq_component() {
  return $('<h1>').html( _.join(heading_message, ' ') );
}

$('body').append(jq_component);