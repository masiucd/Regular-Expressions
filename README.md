# Regular expression with Javascript ⚛️🚀🤙🏻🦋

## Working with strings

This is just a simple example on how you can match simple string with javascript. Both with the Contructor Method or with *2* forward slashes (/*value to match*/)

``` javascript
  let str = 'Hello World';

  let reg = new RegExp(str);
  let re = /llo/;
  /* console.log(str, reg); */
  /* console.log(reg.test(str)); */

  console.log(re.exec(str));
  /* [ 'llo', index: 2, input: 'Hello World', groups: undefined ]*/
```

You can also add flags to your regular expression. Most common used is g wish stands for a global search and i wish stands for case ingestive.

This will match World even if our regex is all lowercase just because of the I flag

``` javascript
  let str = 'Hello World';

  let re = /world/gi;
  console.log(re.exec(str));
```

We can also match our string to our Regular expression 💪🏻
wish will give us a array with all matches in our string.

``` js
  let str = 'Hello World';

  let re = /world/gi;
  str.match(re)
  /* [ 'World' ] */
```

Also a common method to work with is the *replace method*

``` js
let str = 'Hello World';

let re = /world/gi;

console.log(str.replace(re, (str) => 'XXX'));
/* Hello XXX */
```
