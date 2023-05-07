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
        } else {
            $('.moves').show();
            $('.rpslsmoves').show();
        }
    } else {
        $('.moves').hide();
    }
}

function showResults(){
    $('.results').show();
    $('#gamePlay').hide();
}
function hideResults(){
    $('.results').hide();
    $('#gamePlay').show();
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
function resetPage(){
    shotView();
    showRules(0);
    hideResults();

}
async function playGame(){
    try {
    let game = $('input[type=radio][name=gameStyle]:checked').val();
    let shot = $('input[type=radio][name=shot]:checked').val();
    let baseurl = window.location.href + '/app/';
    console.log(baseurl);
    console.log(game);
    let url = '/app/'+ game + '/play/';
    
    if($('#opponent').is(':checked')){
        url = url + shot;
    }
   
    
    console.log(url);
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);

    let str = "";

    if($('#opponent').is(':checked')){
        $('#opponentImage').attr("src", `.img/${result.opponent}.jpg`)
        $('#playerImage').attr("src", `.img/${result.player}.jpg`)
        str = `You: ${result.player}

        Your opponent: ${result.opponent}

        Result: ${result.result}`;
    } else {
        str = `player: ${result.player}`;
    }
    $('.resultText').text(str);
    showResults();
    } catch {
        window.log("uh oh! there seems to be an error");
    }

}