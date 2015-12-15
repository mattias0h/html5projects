/**
 * Created by Mattias on 15.12.2015.
 */

var score = 0; //Set score to 0
var total = 5; //Number of q's
var point = 2; //Points per answer
var highest = total * point;

//Initializer
function init() {
    //Correct answers
    sessionStorage.setItem('a1','b')
    sessionStorage.setItem('a2','d')
    sessionStorage.setItem('a3','c')
    sessionStorage.setItem('a4','a')
    sessionStorage.setItem('a5','d')
}

$(document).ready(function() {
    $('.questionForm').hide(); //Hide all questions

    $('#q1').show(); //Show first q

    $('.questionForm #submit').click(function() {
       //Get data attr
        current = $(this).parents('form:first').data('question');
        next = $(this).parents('form:first').data('question')+1;
        //Hide q
        $('.questionForm').hide();
        //Show next q
        $('#q'+next+'').fadeIn(300);
        process(''+current+'');
        return false;
    });
});

//Process the answers
function process(n) {
    //Get value
    var submitted = $('input[name=q'+n+']:checked').val();
    if(submitted == sessionStorage.getItem('a'+n+'')) {
        score = score + point;
    }
    if(n == total) {
        $('#results').html('<h3>Your final score is: '+score+' out of '+highest+'</h3><a href="index.html">Take Quiz Again</a>');
        if(score == highest) {
            $('#results').append('<p>You are an HTML5 master!</p>');
        } else if(score == highest - point || score == highest - point - point) {
            $('#results').append('<p>Good job!</p>');
        }
    }
    return false;
}

//Add eventlistener
window.addEventListener('load', init, false);