//---javascript logic---
// 1.create an array of possible answers(classic + fun sacrastic)
const answers = [
    "It is certain.",
    "Without a doubt.",
    "You may rely on it.",
    "Ask again later.",
    "Don't count on it.",
    "My sources say no.",
    "Absolutely!",
    "The stars say yes.",
    "Yeah, right.",
    "In your dreams.",
    "Sure, why not?",
    "Not a chance.",
    "Definitely yes!",
    "Absolutely not!",
    "The future is unclear.",
    "Yes, in due time.",
    "No way!",
    "The outlook is good.",
    "Very doubtful.",
    "Signs point to yes."  ,
    "chances are great. ",
     
];
// 2.select the important html elements
const getanswerbutton = document.querySelector("#get-answer-btn");
const answerDisplay = document.querySelector("#answer");

//3.the function that runs on click
function showAnswer() {
    const randomindex = Math.floor(Math.random() * answers.length);
    const randomanswer = answers[randomindex];
    answerDisplay.textContent = randomanswer;

}
//4. WE USE VARIABLE 'getanswerbutton' WE DEFINED ABOVE
getanswerbutton.addEventListener("click", showAnswer);
