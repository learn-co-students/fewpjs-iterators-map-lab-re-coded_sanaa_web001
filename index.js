const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  
  for (let i = 0; i < tutorials.length; i++) {

  let mystring = tutorials[i].toString();
  let str = mystring.split(" ");

  for (var j = 0; j < str.length; j++) {
      str[j] = str[j][0].toUpperCase() + str[j].substr(1);
  }

  let tn = str.join(" ")

  //console.log(tn)
  tutorials[i] = tn;

}
  return tutorials
}


console.log(titleCased());

let myArrMap = tutorials.map(titleCased);
console.log(myArrMap);
