// DOM 수집
var links = document.querySelectorAll('.demo a');

var data = 'one two three four'.split(' ');

function linkClick(i){
  console.log('i:', i);
  console.log('data[i]:', data[i]);
  function innerLinkClick(e) {
    e.preventDefault();
    console.log('clicked: i:', i);
    console.log('clicked: data[i]:', data[i]);
  }

  return innerLinkClick;
};

// linkClick();

for (let i=0, l=links.length; i<l; ++i) {
  let link = links.item(i);
  link.onclick = function (e) {
    e.preventDefault();
    console.log('clicked: i:', i);
    console.log('clicked: data[i]:', data[i]);
  }
  // JavaSCript Closure
  // link.onclick = linkClick(i);
}

// console.log(i); // 4