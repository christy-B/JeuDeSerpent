<?php 
    include('login.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Jeu de serpent</title>
</head>
<body class="start">
    <div class="login">
        <form action="" method="post" class="inscription" id="inscription">
            <input type="text" name="pseudo" placeholder="Pseudo"> <br> <br>
            <input type="password" name="mdp" id="" placeholder="Entrer un mot de passe"><br> <br>
            <input type="password" name="mdp_retype" id="" placeholder="confirmer le mot de passe"><br> <br>
            <input type="submit" name="inscrire" value="s'inscrire" class="btn" ><br> <br>
            <a href="#" onclick="showConnect()">Se connecter</a>
        </form>

        <form action="" method="post" class="connexion" id="connexion">
            <input type="text" name="pseudo_connect" placeholder ="Pseudo" autocomplete ="off"> <br> <br>
            <input type="password" name="mdp_connect" id="" placeholder="Entrer un mot de passe" autocomplete ="off"><br> <br>
            <input type="submit" name="connecter" value="se connecter" class="btn"><br> <br>
            <a href="#" onclick="hideConnect()">S'inscrire</a>
            <br> <br>
        </form>
        </div>
        <script>
            function showConnect() {
                document.getElementById("inscription").style.display = "none";
                document.getElementById("connexion").style.display = "block";
            }
            function hideConnect() {
                document.getElementById("inscription").style.display = "block";
                document.getElementById("connexion").style.display = "none";
            }
        </script>
    <style>
        .start{
            background-image: url('assets/image/bg.jpg');
            background-size: cover;
        }
    </style>
    <script type="module" src="assets/js/main.js"></script>
</body>
</html>