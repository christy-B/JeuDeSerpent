<?php
    function recuperationScore(){
        include('init.php');
        include('login.php');
        if (isset($_POST['classement']) && isset($_POST['point'])) {
            $point = htmlspecialchars($_POST['point']);
            $userConnect = $_SESSION['user'];
            $insert = $bdd->prepare("INSERT INTO joueur(score) VALUES(:score)");
            $insert->execute(array(
                'score' => $point
            ));
            print_r($userConnect);    

        } 
    }
    recuperationScore();
?>