var playing = true;
var player = 1;
var result = document.getElementById('result');

const buttonHome = document.getElementById('btn-home');

if(buttonHome){
    buttonHome.addEventListener('click', function(event) {
        window.location.href = 'index.html';
    });
}

document.addEventListener('DOMContentLoaded', function(event) {
    let player1 = sessionStorage.getItem('player1');
    let player2 = sessionStorage.getItem('player2');

    if(player1 != null && player2 != null){
        //#player1 > .name
        document.getElementById('player1').querySelector('h2').innerHTML = player1;
        document.getElementById('player2').querySelector('h2').innerHTML = player2;
    }
});

document.querySelectorAll('.box').forEach((element) =>{
    element.addEventListener('click', function(box){
        if(box.target.tagName == 'DIV' && playing == true){
            let text = box.target.querySelector('p');
            if(text.innerHTML == ' '){
                text.innerHTML = mark();
                checkWin();
            }  
        }
    })
});

function mark() {
    if(player == 1){
        symbol = 'o';
        return 'x'
    }else if(player == 2){
        symbol = 'x';
        return 'o'
    }else{
        return 'batota';
    }
}

function switchSide(){
    if(player == 1){
        document.getElementById('player1').classList.remove('your-time');
        document.getElementById('player2').classList.add('your-time');
        player = 2;
    }
    else if(player == 2){
        document.getElementById('player2').classList.remove('your-time');
        document.getElementById('player1').classList.add('your-time');
        player = 1;
    }
} 

function checkWin(){
    let win = false;
    
    let one_box =   document.getElementById('one').querySelector('p');
    let two_box =   document.getElementById('two').querySelector('p');
    let three_box = document.getElementById('three').querySelector('p');
    let four_box =  document.getElementById('four').querySelector('p');
    let five_box =  document.getElementById('five').querySelector('p');
    let six_box =   document.getElementById('six').querySelector('p');
    let seven_box = document.getElementById('seven').querySelector('p');
    let eight_box = document.getElementById('eight').querySelector('p');
    let nine_box =  document.getElementById('nine').querySelector('p');

    let one =   document.getElementById('one').querySelector('p').innerHTML;
    let two =   document.getElementById('two').querySelector('p').innerHTML;
    let three = document.getElementById('three').querySelector('p').innerHTML;
    let four =  document.getElementById('four').querySelector('p').innerHTML;
    let five =  document.getElementById('five').querySelector('p').innerHTML;
    let six =   document.getElementById('six').querySelector('p').innerHTML;
    let seven = document.getElementById('seven').querySelector('p').innerHTML;
    let eight = document.getElementById('eight').querySelector('p').innerHTML;
    let nine =  document.getElementById('nine').querySelector('p').innerHTML;

    //Detetar Vitória
    //horizontal
    if(one == two && two == three && one != ' '){
        paint(one_box, two_box, three_box);
    } 
    else if(four == five && five == six && four != ' '){
        paint(four_box, five_box, six_box);
    }
    else if(seven == eight && eight == nine && seven != ' '){
        paint(seven_box, eight_box, nine_box);
    }

    //vertical
    if(one == four && four == seven && one != ' '){
        paint(one_box, four_box, seven_box);
    } 
    else if(two == five && five == eight && two != ' '){
        paint(two_box, five_box, eight_box);
    }
    else if(three == six && six == nine && three != ' '){
        paint(three_box, six_box, nine_box);
    }

    //diagonal
    if(one == five && five == nine && one != ' '){
        paint(one_box, five_box, nine_box);
    } 
    else if(three == five && five == seven && three != ' '){
        paint(three_box, five_box, seven_box);
    }

    function paint(one, two, three){
        if(playing){
            one.parentElement.classList.add('win');
            two.parentElement.classList.add('win');
            three.parentElement.classList.add('win');
            if(player == 1) showResult(sessionStorage.getItem('player1')+" venceu");
            else if(player == 2) showResult(sessionStorage.getItem('player2')+" venceu");
            playing = false;
            win = true;
        }
    }
    if(!win) switchSide();

    //Detetar Empate
    let completed = true;
    const values = [one, two, three, four, five, six, seven, eight, nine];
    for(var i = 0; i < values.length; i++){
        if(values[i] == ' ') completed = false;
    }
    if(completed){
        draw("Empate");
    }
}

function showResult(msg) {
    this.result.removeAttribute('hidden');
    this.result.innerHTML = msg;
}

function draw(){
    showResult('Empate');
    document.getElementById('player1').classList.remove('your-time');
    document.getElementById('player2').classList.remove('your-time');
} 

function restart(){
    document.querySelectorAll('.box').forEach((element) =>{
        element.classList.remove('win');
        element.querySelector('p').innerHTML= ' ';
        result.innerHTML= "";
        result.setAttribute('hidden', true);
        playing = true;
    })
} 