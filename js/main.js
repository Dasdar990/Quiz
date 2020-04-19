(function() {
    const locations = document.querySelectorAll('.quiz-location');
    for (i = 0; i < locations.length; i++) locations[i].addEventListener('click', selectQuiz);
})();

function selectQuiz() {
    localStorage.setItem('title', this.innerText);
    localStorage.setItem('icon', $(this).children('.quiz-icon').children('img')[0].src);
    window.location = 'quiz.html';
}

function setQuiz() {
    document.title = localStorage.getItem('title');
    document.getElementById('title').innerHTML = localStorage.getItem('title');
    document.getElementById('icon').src = localStorage.getItem('icon');
}

function home() {
    window.location = 'index.html';
}