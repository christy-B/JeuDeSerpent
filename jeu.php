<?php
    include('classement.php');
    verification();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>jeu de serpent</title>
</head>
<body>
    <div class="zoneJeu">
        <div class="rang">
            <h1>classement</h1>
        </div>
        <canvas id="canvas" class="canvas"></canvas>
        <form action="" method="post" id="reload">
            <input type="text" placeholder="valeur" id="in" name="point">
            <input type="submit" id="btn-reload" name="classement" value="Rejouer">
        </form>
        <div>
            <p class="score">Score <span id="compteur"></span></p>
            <p class="aide">Aide: <br><br>Touches de direction <br> pour diriger le serpent <br><br>Touche d'espace 
        pour <br> marquer la pause</p>
            
        </div>
    </div>
    <style>
        .rang{
    background-color: red;
    width:200px;
    height: 480px;
    color: white;
}
        body{
            margin: 0;
            background-image: url("assets/image/bg.jpg");
            background-size: cover;
        }
    </style>

    <script type="module" src="assets/js/main.js"></script>
</body>
</html>