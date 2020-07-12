let preElement = document.querySelector('pre');
/**
 *
 * @param {string} str
 * @param {RegExp} regex
 * @param {HTMLElement} target
 */
const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, (str) => `<span>${str} </span>`);
};

let string = 'Js Is the king and we know it';
string = 'Cat Sat On A Hat.';
string = 'helllooooooolllooo';

let regex = /at/g;
regex = /.at/gi;
regex = /\./g;
regex = /o{3}/;
regex = /o+/;
regex = /o{1,}/g;
regex = /o{0,1}/g;
regex = /o?/g;

string = `
https://marcellable.com

http://marcellable.com

http://

https://www.marcellable.com
`;

regex = /https?:\/\/.+/g;

string = 'cat mat bat Hat ?at 9at.';
regex = /[cb]at/g;
regex = /[^cb]at/g;
regex = /[a-z]/g;
regex = /[a-zA-Z]/g;
regex = /[0-9?]at\./g;

string = 'Hello world!!! How Are you ?';
regex = /\w/g;
regex = /\W/g;
string = '031-gbg';
regex = /\d{0,3}\S-/g;

string = `
  foo
  foobar
  foobaz
  fooobooo
`;

regex = /foo/g;
regex = /foo(bar)/g;
regex = /foo(bar|baz)/g;

string = `
  800-000-7621

  (555) 456-2120

  0987620278
`;

regex = /\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;

output(string, regex, preElement);

console.log(string.replace(regex, 'area code $1'));
