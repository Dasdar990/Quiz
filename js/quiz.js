window.onload = setQuiz();
$(document).ready(function() {
    $('input[type="radio"]').click(function() {
        $this = $(this);
        $label = $this.parent();
        // first make ALL labels normal
        $label.parent().parent().find('label').css('background', '#ccdde7');
        // then color just THIS one
        $label.css('background', '#e6812f');
    });
});
(function() {})();