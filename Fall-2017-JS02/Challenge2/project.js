let myInt = 7;
let myString = "the number 7";
let myNumString = "7";
var first = myInt + myInt;
var second = myInt + myString;
var third = myInt + myNumString;
var fourth = myNumString + myInt;
var fifth = myInt + myNumString + myString;
var sixth = myInt + myInt + myString;
var seventh = myString + myInt + myInt;
var eigth = myInt - myString;
var ninth = myInt - myNumString;
var tenth = myString - myNumString;
var eleventh = myInt === myNumString;
var twelfth = myInt === myNumString;
/*<H1>Challenge 5: jQuery 2 - Variables and data Types</H1>

<div id="challenge5vars">
<H3>The values for this assignment</H3>
</div>

<div id="challenge5predictions">
<H3>Checking my predictions</H3>
</div>*/
console.log("Hi there!! :)");
$("table").append(`
  <tr>
    <th>myInt + mInt?</th>
  <td>
  ${first}
  </td>
  </tr>
  <tr>
    <th>myInt + myString?</th>
  <td>
  ${second}
  </td>
  </tr>
  <tr>
    <th>myInt + myNumString?</th>
  <td>
  ${third}
  </td>
  </tr>
  <tr>
    <th>myNumString + myInt?</th>
  <td>
  ${fourth}
  </td>
  </tr>
  <tr>
    <th>myInt + myNumString + myString?</th>
  <td>
  ${fifth}
  </td>
  </tr>
  <tr>
    <th>myInt + myInt + myString?</th>
  <td>
  ${sixth}
  </td>
  </tr>
  <tr>
    <th>myString + myInt + my Int?</th>
  <td>
  ${seventh}
  </td>
  </tr>
  <tr>
    <th>Subtraction</th>
  </tr>
  <tr>
    <th>myInt - myString?</th>
  <td>
  ${eigth}
  </td>
  </tr>
  <tr>
    <th>myInt - myNumString?</th>
  <td>
  ${ninth}
  </td>
  </tr>
  <tr>
    <th>myString - myNumString?</th>
  <td>
  ${tenth}
  </td>
  </tr>
  <tr>
    <th>Comparisons</th>
  </tr>
  <tr>
    <th>myInt == myNumString?</th>
  <td>
  ${eleventh}
  </td>
  </tr>
  <tr>
    <th>myInt === myNumString?</th>
  <td>
  ${twelfth}
  </td>
  </tr>`)
