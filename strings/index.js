let str = 'Hello World';

let reg = new RegExp(str);
// let re = /llo/;
let re = /world/gi;
// console.log(str, reg);
// console.log(reg.test(str));

// console.log(re.exec(str));
// [ 'llo', index: 2, input: 'Hello World', groups: undefined ]

// console.log(str.match(re));
// [ 'World' ]

console.log(str.replace(re, (str) => 'XXX'));
