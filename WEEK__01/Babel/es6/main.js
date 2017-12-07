// ES6 -> Babel -> ES5

// let, const
const o = ['object', 'class', 'template string'];
// 비구조화 destructuring
let [obj, cls, tst] = o;
let markup = `
    <div>
      <ul>
`;
for (let i=0, l=10; i<l; ++i) {
  console.log('i:', i);
  data.push(1, 3, 5, 7);
  console.log('data:', data);
  // templat + data binding
  markup += `
        <li>${i}</li>
  `;
}

markup += `
  </ul>
</div>
`;

console.log(markup);

// console.log('i:', i);
// console.log('data:', data);
