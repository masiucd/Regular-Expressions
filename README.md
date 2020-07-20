# Regular expression with Javascript ⚛️🚀🤙🏻🦋

<br />
<hr />

## Working with strings 🏖🥓

This is just a simple example on how you can match simple string with javascript. Both with the Constructor Method or with _2_ forward slashes (/_value to match_/)

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
str.match(re);
/* [ 'World' ] */
```

Also a common method to work with is the _replace method_

``` js
let str = 'Hello World';

let re = /world/gi;

console.log(str.replace(re, (str) => 'XXX'));
/* Hello XXX */
```

Another handful string match pattern is to us the **.** wish will match letter digit or dash, any character that comes before the pattern itself. I will not match a line break.

``` js
let string = 'Cat Sat On A Hat.';
regex = /.at/gi;
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
let str = 'Heloooooooo.';
let re = /o{3}/g;
```

This will match **o** = ooo 🔁

We could also give it a range and match from 3 to 5 **o's**. (At least 3 and max 5)

``` js
let str = 'helooooooooo';
str.match(/o{3,5}/g);
// ooooo
```

At least 3 and rest can be infinity. 🤠

``` js
let str = 'helooooooooo';
str.match(/o{3,}/g);
// ooooo
```

To make it to a infinity match there is a short cut with + operator

``` js
let str = 'helooooooooollloooo';
str.match(/o+/g); // ooooooooo
// Will match all o that comes in a row

str.match(/{1,}/g); // ooooooooo oooo
/* Or you can write it like this ,
   difference is that
    str.match(/{1,}/g) will match all o even if they are not in a row
  */
```

To make a optional match. 🍌

``` js
let str = 'helloooooooo';
str.match(/o{0,1}/g);
// Or we can write with a shortcut operator
str.match(/o?/g);
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

<br />
<hr />

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
let regex = /[a-z]/g; // all lowercase letters from a to z
regex = /[A-Z]/g; // all uppercase letters from A to Z
regex = /[a-zA-Z]/g; // all uppercase and lowercase letters from A to Z a to z
regex = /[0-9]/g; // all digits from 0 - 9
```

A short cut for using character classes with both lowercase and uppercase letters [a-zA-Z] is to use \w.
**\w** will match all letters , if using **\W** then it is the opposite, all non letters and empty space.
if you only to match digits then **\d** , the negate to **\d** is **\D**, same goes for white space with **\s** and **\S**.

``` js
let string = 'Hello world!!! How Are you ?';
let regex = /\w/g;
/*'Hello world How Are you   */

regex = /\w/g;
/* !!! ? */
```

<br />
<hr />

### Capture groups

We can also group our regular expressions in so called _Capture groups_ 🥨.
To match a given pattern in a string.
For example.

``` js
let string = `
  foo
  foobar
  foobaz
  fooobooo

`;

let regex = /foo/g;
// will match foo

regex = /foo(bar)/g;
// foobar
```

We grouped our pattern to match **just** foobar! 🎸

We can also make optional patterns with the pipe operator (|).

``` js
let string = `
  foo
  foobar
  foobaz
  fooobooo

`;

regex = /foo(bar|baz)/g;
// foobar and foobaz
```

We can also match only foo the ends with _bar_ ore _baz_ like this.

``` js
let string = `
  foo
  foobar
  foobaz
  fooobooo

`;

regex = /foo(?=bar|baz)/g;
// foo and foo
```

We can also negate it with _(?!bar|baz)_.
This will match that not has _bar_ or _baz_.

``` js
let string = `
  foo
  foobar
  foobaz
  fooobooo

`;

regex = /foo(?!bar|baz)/g;
```

Let's match some phone numbers 😎

``` js
let string = `
  800-000-7621

  (555) 456-2120

  0987620278
`;

let regex = /\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;

console.log(string.replace(regex, 'area code $1'));
/*

  area code 800

  area code 555

  area code 098
*/
```

The regex wrap the first 3 digits in a group and then escape those parentheses, we also make them optional because we have 3 different patterns to match.
Then we watch either a empty space or a dash and also make it optional, **(2 times)**.
finally we match our last pattern with 4 digits. λ🚀🌸.

<br />
<hr />

### Word Boundaries

Word Boundaries Are very useful when we want to match a specific pattern in out string. _This is my favorite dish and yes I love it so much, it is my favorite dish_
we want to match is but not all **is** patterns at once.

``` js
let string = `This is my favorite dish and yes I love it so much, it is my favorite dish` ;
let regex = /is/g;
// match all is

regex = /\bis/g; // starts with is

regex = /\bis\b/g; // only is
// we got 2 is
regex = /is\b/g; // end's with is
// we got 3 is
```

<br />
<hr />

### Back references

Back references is a good use when you want find the match 2 ore more times.

``` js
let string = 'It was the the thing';
let regex = /(the)\s?\1/g;
```

What we doing here is that we group (the) and follow up with a optional whitespace, then we index our group. Because we just have one group , the index will be 1.
To just match the first the we could write our regular expression like this instead.

``` js
let string = 'It was the the thing';
let regex = /(the)\s?(?=\1)/g;
```

Will only match the first _the_.

<br />
<hr />

### Cheat Sheet

**Flags**

* i = case sensitive
* g = global match
* m = multiline flag

### Char classes 🦄

| Syntax      | Description |
| ----------- | ----------- |
| .      | matches any single character except \n  , exp: /.y/ matches "my" and "ay"      |
| \d   | all digits        |
| \D   | all NON digits        |
| \w   | alphanumeric character from the basic Latin alphabet, including the underscore        |
| \W   | Matches any character that is not a word character        |
| \s   | single white space character, including space, tab.        |
| \S   | Non Whitespace        |
| \   | Indicates that the following character should be treated specially, or "escaped". It behaves one of two ways.        |

### Assertions ⚽️

| Syntax      | Description |
| ----------- | ----------- |
| ^      |  Matches the beginning of input. If the multiline flag is set to true, also matches immediately after a line break character. For example, /^A/ does not match the "A" in "an A", but does match the first "A" in "An A".   |
| $   | matches end of the input  |
