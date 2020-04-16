function selectQuiz(id) {
    var x = document.getElementById(id).querySelectorAll('*');

    localStorage.setItem('title', x[2].innerText);
    localStorage.setItem('icon', x[1].src);
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