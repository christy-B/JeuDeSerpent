<?php
    function verification(){
        
        if(isset($_SESSION['user'])){
            echo $_SESSION['user'];
        }
        else header('Location:index.php');
    }
    function recuperationScore(){
        include('init.php');
        include('login.php');
        if (isset($_POST['classement']) && isset($_POST['point'])) {
            $point = htmlspecialchars($_POST['point']);
            $userConnect = $_SESSION['user'];
            $check = $bdd->prepare("SELECT pseudo, score, rang From classement WHERE pseudo = ?");
            $check->execute(array($pseudo));
                $data = $check->fetch();
                $row = $check->rowCount();
            
            if ($row == 0) 
                {
                    $insert = $bdd->prepare('INSERT INTO joueur(pseudo, mdp) VALUES(:pseudo, :mdp)');
                    $insert->execute(array(
                        'pseudo' => $pseudo,
                        'mdp' => $mdp
                        ));
                    } else echo "le pseudo est déja utilisé";  

        } 
    }
    recuperationScore();
?>
