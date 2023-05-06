// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver


//showing shot options based off whether there is an opponent
function shotView(){
    let checker = document.getElementById('opponent');
    if (checker.checked == true){
       //if true check which game is chosen
        if($('#rps').is(':checked')){
            $('.moves').show();
            $('.rpslsmoves').hide();
            console.log("rps");
        } else {
            console.log("rpsls");
            $('.moves').show();
            $('.rpslsmoves').show();
        }
    } else {
        $('.moves').hide();
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
    if (r == 1){
        $('.rules').show();
        $('#show').hide();
        $('#hide').show();
    } else {
        $('.rules').hide();
        $('#show').show();
        $('#hide').hide();
    }
}