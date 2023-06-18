
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe</title>
    <!-- CSS -->
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <form class="container" action="game.php" method="POST">
        <h1>TIC-TAC-TOE</h1>
        <div class="mid-container">
            <div id="player1" class="player your-time">
                <div class="player-symbol"><p class="symbol">X</p></div>
                <div class="name"><input type="text" name="player1" class="input-name" placeholder="Jogador 1"></div>
            </div>
            <div class="vs">
                <h1>VS</h1>
            </div>
            <div id="player2" class="player your-time">
                <div class="player-symbol"><p class="symbol">O</p></div>
                <div class="name"><input type="text" name="player2" class="input-name" placeholder="Jogador 2"></div>
            </div>
        </div>
        <button type="submit" class="play">Jogar</button>
    </form>
    <script src="js/main.js"></script>
</body>
</html>