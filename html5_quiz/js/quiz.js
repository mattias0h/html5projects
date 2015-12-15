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
        $('#q2').fadeIn(300);
        return false;
    });

    $('#q2 #submit').click(function() {
        $('.questionForm').hide();
        $('#q3').fadeIn(300);
        return false;
    });

    $('#q3 #submit').click(function() {
        $('.questionForm').hide();
        $('#q4').fadeIn(300);
        return false;
    });

    $('#q4 #submit').click(function() {
        $('.questionForm').hide();
        $('#q5').fadeIn(300);
        return false;
    });

    $('#q15 #submit').click(function() {
        $('.questionForm').hide();
        $('#results').fadeIn(300);
        return false;
    });
});

//Add eventlistener
window.addEventListener('load', init, false);