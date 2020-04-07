function selectQuiz(id) {
    localStorage.setItem('quizvar', id);
}

function setQuiz() {
    document.title = localStorage.getItem('quizvar');
    const back = document.getElementById('back');
    back.style.backgroundImage = 'url(images/' + localStorage.getItem('quizvar') + '.jpg)';
}

function home() {
    window.location = 'index.html';
}