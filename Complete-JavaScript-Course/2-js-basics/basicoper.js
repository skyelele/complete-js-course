var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 22;

// Math operators
yearJohn = now - 28;
yeahMark = now - 33;

console.log(yearJohn);

console.log(now + 2);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator

// boolean
console.log(typeof johnOlder);
// number
console.log(typeof ageJohn);
// string
console.log(typeof "Mark is older than John");
// undefined
console.log(typeof x);

// operator precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 -6 // 26
console.log(x, y);
// Logs the following:
// 26, 26

// More operators
x = x * 2;
// is equivalent to the following -->
x *= 2;
x *= 10; // Multiplies by 10 again

x += 1;
// is the same as
x++;
