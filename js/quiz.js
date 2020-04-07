(function() {
    // Functions
    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label for="letter">
                <input type="radio" class="radio-custom" id="${letter}" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join('')} </div>
            </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        output.push(
            ` <div class="slide">
                <div id="results"></div>
              </div>`
        );
        quizContainer.innerHTML = output.join('');
    }

    function checkAll() {
        var a = 0;
        for (var i = 0; i < myQuestions.length; i++) {
            var radio = document.getElementsByName('question' + i);
            for (var j = 0; j < radio.length; j++)
                if (radio[j].checked) {
                    a++;
                    break;
                }
        }
        if (a == myQuestions.length) return true;
    }

    function showResults() {
        if (!checkAll()) {
            //give error
            return;
        }
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

        showNextSlide();
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 2) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }

        if (currentSlide === myQuestions.length) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'none';
            previousButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    // Variables
    const quizContainer = document.getElementById('quiz');

    const submitButton = document.getElementById('submit');

    //Questions
    const questions = [
        'Forest',
        'Lake',
        'Windmill',
        'Farm',
        'Market',
        'Hotel',
        'MrGreen',
        'Factory',
        'Station',
        'TechHouse'
    ];
    questions['Forest'] = [{
            question: 'What is deforestation? ',
            answers: {
                a: 'It is a phenomena that happens when people move forest to different areas',
                b: 'It is the permanent removal of trees to make room for something different',
                c: 'It is the natural destruction of forests'
            },
            correctAnswer: 'b'
        },
        {
            question: 'Deforestation happens most in Tropical rainforests?',
            answers: {
                a: 'True',
                b: 'False'
            },
            correctAnswer: 'a'
        },
        {
            question: 'Which area in the world is the most affected by deforestation?',
            answers: {
                a: 'The Amazon',
                b: 'The Philippines',
                c: 'Indonesia',
                d: 'The Atlantic Forest'
            },
            correctAnswer: 'a'
        },
        {
            question: 'How many animals, plants and insect species are we losing each day due to deforestation?',
            answers: {
                a: '49',
                b: '115',
                c: '135'
            },
            correctAnswer: 'c'
        }
    ];
    questions['Lake'] = [{
            question: 'How much industrial waste and waste water reach are disposed into the seas?',

            answers: {
                a: '100.000 tons',
                b: '1.000.000 tons',
                c: '2.000.000 tons'
            },
            correctAnswer: 'c'
        },
        {
            question: 'Which of the following regions produce 75% of oxygen all over our planet?',
            answers: {
                a: 'The rain forest',
                b: 'The seas',
                c: 'The North Pole'
            },
            correctAnswer: 'b'
        },
        {
            question: 'Which of the following terms is not linked to water purification?',
            answers: {
                a: 'Desalination',
                b: 'Decalcification',
                c: 'Bacterial clarification',
                d: 'Softening'
            },
            correctAnswer: 'b'
        }
    ];
    questions['Windmill'] = [{
            question: "Which of the following options doesn't represent an important resource of renewable energy?",

            answers: {
                a: 'Geothermal heat',
                b: 'Wind',
                c: 'Natural gas',
                d: 'Sun'
            },
            correctAnswer: 'c'
        },
        {
            question: 'How much CO2 is emitted per kilowatt-hour using wind energy?',
            answers: {
                a: '9,4 g',
                b: '30,1 g',
                c: '153,5 g'
            },
            correctAnswer: 'a'
        },
        {
            question: 'How much CO2 is emitted per kilowatt-hour using hard coal?',
            answers: {
                a: '8,9 g',
                b: '207,6 g',
                c: '1050 g'
            },
            correctAnswer: 'c'
        }
    ];
    questions['Farm'] = [{
            question: 'What proportion of the used farmland is used for food production?',

            answers: {
                a: '1%',
                b: '12%',
                c: '20%'
            },
            correctAnswer: 'c'
        },
        {
            question: '70% of global water consumption is used for agriculture',
            answers: {
                a: 'True',
                b: 'False'
            },
            correctAnswer: 'a'
        },
        {
            question: 'Which of the following gases is the most harmful?',
            answers: {
                a: 'Laughing gas ',
                b: 'Carbon dioxide',
                c: 'Methan'
            },
            correctAnswer: 'a'
        }
    ];
    questions['Market'] = [{
            question: 'How much more CO2 is emitted for meat compared to vegetables?',

            answers: {
                a: '2x More',
                b: '5x More',
                c: '9x more'
            },
            correctAnswer: 'c'
        },
        {
            question: 'What percentage of Germany food production is later thrown away?',
            answers: {
                a: '8%',
                b: '30%',
                c: '50%'
            },
            correctAnswer: 'a'
        },
        {
            question: 'Imagine you’ve bought some groceries. Their best before date is over. You can eat it as long as it smells and tastes still good.',
            answers: {
                a: 'True',
                b: 'False'
            },
            correctAnswer: 'a'
        }
    ];
    questions['Hotel'] = [{
            question: 'Which 1-week vacation has the highest CO_2 footprint?',
            answers: {
                a: 'Cruise',
                b: 'Safari',
                c: 'visiting another continent'
            },
            correctAnswer: 'c'
        },
        {
            question: 'Releases of pollutants to air and water by European industry have decreased during the last decade',
            answers: {
                a: 'True',
                b: 'False'
            },
            correctAnswer: 'a'
        },
        {
            question: 'If you’re traveling, what’s the best way to reduce the carbon footprint?',
            answers: {
                a: 'Don’t go sightseeing, spent as much time as possible in the hotel',
                b: 'Get a cheap and small accommodation',
                c: 'Travel to the mountains or other places in nature.',
                d: 'Choose a closer destination'
            },
            correctAnswer: 'd'
        }
    ];
    questions['MrGreen'] = [{
            question: 'According to the estimation, how much food is wasted, globally, in a year?',
            answers: {
                a: '1.3 Billion tons',
                b: '1.7 Billion tons',
                c: '2.5 Billion tons'
            },
            correctAnswer: 'a'
        },
        {
            question: 'Appliances that are turned off don’t use any electricity',
            answers: {
                a: 'True',
                b: 'False'
            },
            correctAnswer: 'b'
        },
        {
            question: 'How many liters of water per day a person use for basic needs?',
            answers: {
                a: '>20 L',
                b: '20-50 L',
                c: '<50 L'
            },
            correctAnswer: 'b'
        }
    ];
    questions['Factory'] = [{
            question: 'Which industry releases the most carbon emissions?',
            answers: {
                a: 'Transportation',
                b: 'Energy production ',
                c: 'Fashion industry'
            },
            correctAnswer: 'b'
        },
        {
            question: 'Releases of pollutants to air and water by European industry have decreased during the last decade',
            answers: {
                a: 'True',
                b: 'False'
            },
            correctAnswer: 'a'
        },
        {
            question: 'Which percentage of industrial waste is dumped to water?',
            answers: {
                a: '~ 35%',
                b: '~ 50%',
                c: '~ 70%'
            },
            correctAnswer: 'c'
        }
    ];
    questions['Station'] = [{
            question: 'Idling, or letting the engine run when parked or not in use, does which of the following ',
            answers: {
                a: 'Increases consumption of fuel',
                b: 'Causes vehicle wear and tear',
                c: 'Emits toxic pollutants into the environment',
                d: 'All of the above'
            },
            correctAnswer: 'd'
        },
        {
            question: 'Currently 95% of transport energy comes from petroleum.',
            answers: {
                a: 'True',
                b: 'False'
            },
            correctAnswer: 'a'
        },
        {
            question: 'What is the most harmful way to travel?',
            answers: {
                a: 'Large petrol car',
                b: 'Long haul flight (first class)',
                c: 'Large RoPax ferry'
            },
            correctAnswer: 'c'
        }
    ];
    questions['TechHouse'] = [{
            question: 'What is the maximum amount of people that can be supplied with the earth’s energy?',
            answers: {
                a: '10 trillion',
                b: '50 trillion',
                c: 'Infinite'
            },
            correctAnswer: 'c'
        },
        {
            question: 'What is Carbon capture and storage (CCS)?',
            answers: {
                a: 'A new way of generating energy by using the carbon of charcoal.',
                b: 'A collection of methods for capturing carbon dioxide from the air',
                c: 'An ultra-lightweight material that helps reduce transportation emissions.'
            },
            correctAnswer: 'b'
        },
        {
            question: 'A carbon sink is a natural reservoir that stores carbon-containing chemical compounds. What is the biggest carbon sink?',
            answers: {
                a: 'Forests',
                b: 'Ocean',
                c: 'Permafrost soil'
            },
            correctAnswer: 'c'
        }
    ];
    const myQuestions = questions[localStorage.getItem('quizvar')];

    // Kick things off
    buildQuiz();

    // Pagination
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
    const slides = document.querySelectorAll('.slide');

    let currentSlide = 0;

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);
})();