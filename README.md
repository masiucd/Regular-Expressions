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

Another handful string match pattern is to us the **.** wish will match letter digit or dash, any character that comes before the pattern itself. I will not match a line break.

``` js
let string = 'Cat Sat On A Hat.';
regex = /.at/gi
// Cat Sat Hat
```

will match Cat Sat Hat, make notice it will match all this because we added the global and case ingestive flag.

We can also escape characters with a backslash just before

``` js
  let string = 'Cat Sat On A Hat.';
  regex = /\./g;
  // .
```

Sometimes we want to match a repeated pattern with

``` js
  let str = 'Heloooooooo.'
  let re = /o{3}/g
```

This will match **o** = ooo 🔁

We could also give it a range and match from 3 to 5 **o's**. (At least 3 and max 5)

``` js
  let str = 'helooooooooo';
  str.match(/o{3,5}/g)
  // ooooo
```

At least 3 and rest can be infinity. 🤠

``` js
  let str = 'helooooooooo';
  str.match(/o{3,}/g)
  // ooooo
```

To make it to a infinity match there is a short cut with + operator

``` js
  let str = 'helooooooooollloooo';
  str.match(/o+/g) // ooooooooo
  // Will match all o that comes in a row

  str.match(/{1,}/g) // ooooooooo oooo
  /* Or you can write it like this ,
   difference is that
    str.match(/{1,}/g) will match all o even if they are not in a row
  */
```

To make a optional match. 🍌

``` js
  let str = 'helloooooooo'
  str.match(/o{0,1}/g)
  // Or we can write with a shortcut operator
  str.match(/o?/g)
  // Will give us the same result
```

How we could match a simple URL path 🦕

``` js
string = `
https://marcellable.com

http://marcellable.com

WILL NOT BE MATCHED
http://

https://www.marcellable.com
`;

regex = /https?:\/\/.+/g;
```

First we match either https or http , we the escape those forward slashes and put a wild card as the . operator, finally we match the rest and put the global flag.
All will be match except the **http://** 🤪

### Characters classes

Characters classes will help us to group our matches , we use [char] to group our character class, followed up with res of the patterns.

Order is not important!

``` js
  let string = 'cat mat bat Hat ?at 9at.';
  regex = /[cb]at/g; // either match c-at or b-at
  // cat , mat
```

We can also negate the char class and not match those characters.
This will not match Cat ore Mat ! 🎱

``` js
let string = 'cat mat bat Hat ?at 9at.';
regex = /[^cb]at/g; // will not match cat ore mat !
```

We can also match ranges, digits , letters , both lowercase and capital.

``` js
let string = 'cat mat bat Hat ?at 9at.';
let regex = /[a-z]/g // all lowercase letters from a to z
regex = /[A-Z]/g // all uppercase letters from A to Z
regex = /[a-zA-Z]/g // all uppercase and lowercase letters from A to Z a to z
regex = /[0-9]/g // all digits from 0 - 9
```
