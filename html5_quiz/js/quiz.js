/**
 * Created by Mattias on 15.12.2015.
 */

var score = 0; //Set score to 0
var total = 5; //Number of q's
var point = 1; //Points per answer
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

    $('#q1 #submit').click(function() {
        $('.questionForm').hide();
        process('q1');
        $('#q2').fadeIn(300);
        return false;
    });

    $('#q2 #submit').click(function() {
        $('.questionForm').hide();
        process('q2');
        $('#q3').fadeIn(300);
        return false;
    });

    $('#q3 #submit').click(function() {
        $('.questionForm').hide();
        process('q3');
        $('#q4').fadeIn(300);
        return false;
    });

    $('#q4 #submit').click(function() {
        $('.questionForm').hide();
        process('q4');
        $('#q5').fadeIn(300);
        return false;
    });

    $('#q15 #submit').click(function() {
        $('.questionForm').hide();
        process('q5');
        $('#results').fadeIn(300);
        return false;
    });
});

//Process the answers
function process(q) {
    if(q == "q1") {
        var submitted = $('input[name=q1]:checked').val();
        if(submitted == sessionStorage.a1) {
            score++;
        }
    }
    if(q == "q2") {
        var submitted = $('input[name=q2]:checked').val();
        if(submitted == sessionStorage.a2) {
            score++;
        }
    }
    if(q == "q3") {
        var submitted = $('input[name=q3]:checked').val();
        if(submitted == sessionStorage.a3) {
            score++;
        }
    }
    if(q == "q4") {
        var submitted = $('input[name=q4]:checked').val();
        if(submitted == sessionStorage.a4) {
            score++;
        }
    }
    if(q == "q5") {
        var submitted = $('input[name=q5]:checked').val();
        if(submitted == sessionStorage.a5) {
            score++;
        }
        $('#results').html('<h3>Your final score is: '+score+' out of 5</h3><a href="index.html">Take Quiz Again</a>');
    }
    return false;
}

//Add eventlistener
window.addEventListener('load', init, false);