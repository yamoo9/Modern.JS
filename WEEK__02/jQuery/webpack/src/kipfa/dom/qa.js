const global = window;

export default function(s){
  return global.document.querySelectorAll(s);
};