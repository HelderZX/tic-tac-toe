const buttonPlay = document.getElementById('btn-play');

if(buttonPlay)
buttonPlay.addEventListener('click', function(event) {
    event.preventDefault();
    let $player1 = document.getElementById('input-player1');
    let $player2 = document.getElementById('input-player2');

    let player1Name = $player1.value == "" ? "jogador1" : $player1.value;
    let player2Name = $player2.value == "" ? "jogador2" : $player2.value;
    
    sessionStorage.setItem('player1', player1Name);
    sessionStorage.setItem('player2', player2Name);

    window.location.href = 'game.html';
});

document.addEventListener('DOMContentLoaded', function(event) {
    let player1 = sessionStorage.getItem('player1');
    let player2 = sessionStorage.getItem('player2');

    if(player1 != null && player2 != null){
        document.getElementById('input-player1').value = player1 ?? "player1";
        document.getElementById('input-player2').value = player2 ?? "player2";
    }
});