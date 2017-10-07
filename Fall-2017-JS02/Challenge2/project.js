
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
    $("table").append(`<th><td>${first}</td></th><tr><th><td>${second}</td></th></tr><tr><th><td>${third}</td></th></tr><tr><th><td>${fourth}</td></th></tr><tr><th><td>${fifth}</td></th></tr><tr><th><td>${sixth}</td></th></tr><tr><th><td>${seventh}</td></th></tr><tr><th><td>${eigth}</td></th></tr><tr><th><td>${ninth}</td></th></tr><tr><th><td>${tenth}</td></th></tr><tr><th><td>${eleventh}</td></th></tr><tr><th><td>${twelfth}</td></th></tr>`)
