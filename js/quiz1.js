function buildQuiz() {
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for (letter in currentQuestion.answers) {
            // ...add an HTML radio button
            answers.push(
                `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
            );
        }

        // add this question and its answers to the output
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
        );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
        } else {
            // if answer is wrong or blank
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [{
        question: 'What is deforestation?',
        answers: {
            a: 'When people cut down trees',
            b: 'When people cut down whole forest areas and other types of ecosystems to make room for something besides forest',
            c: 'When people move forest to different areas'
        },
        correctAnswer: 'b'
    },
    {
        question: 'Deforestation happens most in Tropical rainforests',
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Which area in the world is the most affected by deforestation? ',
        answers: {
            a: 'The Amazon',
            b: 'The Philippines',
            c: 'Indonesia'
        },
        correctAnswer: 'a'
    },
    {
        question: 'How many animals, plants and insect species are we losing each day due to deforestation?',
        answers: {
            a: '190',
            b: '115',
            c: '135',
            d: '160'
        },
        correctAnswer: 'c'
    }
];

buildQuiz();

submitButton.addEventListener('click', showResults);