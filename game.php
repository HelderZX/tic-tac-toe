<?php
    $player1 = 'Jogador 1';
    $player2 = 'Jogador 2';
    if(isset($_POST['player1']) && isset($_POST['player2'])){
        if($_POST['player1'] != '') $player1 = $_POST['player1']; 
        if($_POST['player2'] != '') $player2 = $_POST['player2'];
    }
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe</title>
    <!-- CSS -->
    <link rel="stylesheet" href="css/main.css">

    <!-- FontAwesome -->
    <script src="https://kit.fontawesome.com/26acf264ae.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container">
        <h1>TIC-TAC-TOE</h1>
        <button class="play" onclick="window.location.href='index.php'"><i class="fa-sharp fa-solid fa-house"></i></button>
        <div class="mid-container">
            <div id="player1" class="player your-time">
                <div class="player-symbol"><p class="symbol">X</p></div>
                <div class="name" name="<?php echo $player1; ?>">
                    <h2> <?php echo $player1; ?> </h2>
                </div>
            </div>
            <div class="game">
                <div id="result" class="play result" hidden></div>
                <div class="grid">
                    <div id="one" class="box one">      <p class="symbol"> </p> </div>
                    <div id="two" class="box two">      <p class="symbol"> </p> </div>
                    <div id="three" class="box three">  <p class="symbol"> </p> </div>
                    <div id="four" class="box four">    <p class="symbol"> </p> </div>
                    <div id="five" class="box five">    <p class="symbol"> </p> </div>
                    <div id="six" class="box six">      <p class="symbol"> </p> </div>
                    <div id="seven" class="box seven">  <p class="symbol"> </p> </div>
                    <div id="eight" class="box eight">  <p class="symbol"> </p> </div>
                    <div id="nine" class="box nine">    <p class="symbol"> </p> </div>
                </div>
            </div>
            <div id="player2" class="player">
                <div class="player-symbol"><p class="symbol">O</p></div>
                <div class="name" name="<?php echo $player2; ?>">
                    <h2><?php echo $player2; ?></h2>
                </div>
            </div>
        </div>
        <button class="play" onclick="restart()">Recomeçar</button>
    </div>
    <script src="js/main.js"></script>
</body>
</html>