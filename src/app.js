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

string = `
  foo
  foobar
  foobaz
  fooobooo
`;

regex = /foo(?=bar|baz)/g;
regex = /foo(?!bar|baz)/g;

string = `
  031 52-98-31
  031529831
  (031) 52-98-31
`;

regex = /\(?(\d{3})\)?[\s-]?\d{2}[\s-]?\d{2}[\s-]?\d{2}/g;

string = `This island is his, it is!`;
string = `This is my favorite dish and yes I love it so much, it is my favorite dish`;

regex = /\bis/g;

regex = /\bis\b/g;
regex = /is\b/g;

string = 'It was the the thing';
regex = /(the)\s?\1/g;
regex = /(the)\s?(?=\1)/g;

string = `<h1>Hello</h1>`;

// regex = /<(\w+|\d+)>/g;
// console.log(string.match(regex));

string = `
  12/04/21
  12-04-21
  10-12-08
  12-12-2009
`;

regex = /12[-?/?]\d{2}[-?/?]\d{2}[\d]?[\d]?/gm;

output(string, regex, preElement);

// console.log(string.replace(regex, 'area code $1'));
