import _ from 'lodash';
import $ from 'jquery';
import Accordion from './kipfa/ui/Accordion';

// Accordion 객체 생성 구문
const demo_acc = new Accordion( $('.demo') );

const document = global.document;
let heading_message = ['Hello', 'Webpack', ':)'];

function jq_component() {
  return $('<h1>').html( _.join(heading_message, ' ') );
}

$('body').append(jq_component);