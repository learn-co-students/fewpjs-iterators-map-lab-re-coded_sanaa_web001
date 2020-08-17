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

let capitalizeWord = function(word) {
    let capWord = word.split('');
    capWord[0] = capWord[0].toUpperCase();
    return capWord.join('');
}

const titleCased = () => tutorials.map((element) => {
    return element.split(' ').map(word => capitalizeWord(word)).join(' ');
});

console.log(Array.isArray(titleCased()));
