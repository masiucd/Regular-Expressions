let preElement = document.querySelector('pre');
const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, (str) => `<span>${str} </span>`);
};

let string = 'Js Is the king and we know it';

let regex = /th/gi;

output(string, regex, preElement);
