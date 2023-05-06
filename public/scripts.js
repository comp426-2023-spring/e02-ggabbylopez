// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

import { rps } from "../lib/rpsls";

//showing shot options based off whether there is an opponent
function shotView(){
    const checker = document.getElementById('opponent');
    if (checker.checked){
       //if true check which game is chosen
        checker = document.getElementById('rps');
        if(checker.checked){
            $('.rps').show();
            $('.rpsls').hide();
        } else {
            $('.shot').show();
        }
    }
}

function showResults(){
    $('results').show();
    document.getElementById('gamePlay').hidden=true;
}
function hideResults(){
    $('results').hide();
    document.getElementById('gamePlay').hidden=false
}
function showRules(r){
    if (r){
        $('rules').show();
        document.getElementById('show').hidden = true;
        document.getElementById('hide').hidden = false;
    } else {
        $('rules').hide();
        document.getElementById('show').hidden = false;
        document.getElementById('hide').hidden = true;
    }
}