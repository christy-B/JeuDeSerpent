<?php 
    include('login.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion/Inscription</title>
</head>
<body>
    <form action="" method="post" class="inscription">
        <input type="text" name="pseudo" placeholder="Pseudo"> <br> <br>
        <input type="password" name="mdp" id="" placeholder="Entrer un mot de passe"><br> <br>
        <input type="password" name="mdp_retype" id="" placeholder="confirmer le mot de passe"><br> <br>
        <input type="submit" name="inscrire" value="s'inscrire"><br> <br>
    </form>

    <form action="" method="post" class="connexion">
        <input type="text" name="pseudo_connect" placeholder ="Pseudo" autocomplete ="off"> <br> <br>
        <input type="password" name="mdp_connect" id="" placeholder="Entrer un mot de passe" autocomplete ="off"><br> <br>
        <input type="submit" name="connecter" value="se connecter"><br> <br>
    </form>
</body>
</html>