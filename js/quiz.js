window.onload = setQuiz();

$(document).ready(function() {
    $('input[type="radio"').change(function() {
        $('label.highlighted').removeClass('highlighted');
        $(this).closest('.answer').addClass('highlighted');
    });
});
(function() {})();