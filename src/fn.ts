type Foo = string | Array<string> | null;
function removeCc(input: string) {
  let re = /([A-Z])/g;
  return input.replace(re, ' $1');
}
// Capturing Parenthesis
// /([A-Z])/
// Access Saved Value  $1

let camelCaseString = 'javaScript';

let foo: Foo = removeCc(camelCaseString);

function removeCapitalLetters(input: string) {
  let re = /[A-Z]/g;
  return input.replace(re, (x) => x.toLowerCase());
}

foo = removeCapitalLetters('Hello There MY FRienD!!!');

function capitalizeFirstLetter(input: string) {
  let re = /^\w/i;
  return input.replace(re, (x) => x.toUpperCase());
}

foo = capitalizeFirstLetter('hello world!');

function wordToHashtag(input: string) {
  let re = /(\s.)/g;
  let word = input.replace(re, (x) => x.toUpperCase());
  re = /\s/g;
  word = word.replace(re, '');
  re = /(^\w)/;

  return word.replace(re, '#$1');
}

foo = wordToHashtag('make me into a hashtag please');
