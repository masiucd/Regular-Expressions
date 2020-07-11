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

output(string, regex, preElement);
