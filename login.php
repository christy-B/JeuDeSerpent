<?php
    session_start();
    function connexion(){
        
        include('init.php');
        if (isset($_POST['connecter'])) {
            if (isset($_POST['pseudo_connect']) && isset($_POST['mdp_connect'])) {
                if (!empty($_POST['pseudo_connect']) && !empty($_POST['mdp_connect'])) {
                    $pseudo_connect = htmlspecialchars($_POST['pseudo_connect']);
                    $mdp_connect = htmlspecialchars($_POST['mdp_connect']);
                    $check = $bdd->prepare('SELECT pseudo, mdp From joueur WHERE pseudo = ?');
                    $check->execute(array($pseudo_connect));
                    $data = $check->fetch();
                    $row = $check->rowCount();
                    if ($row == 1) 
                    {
                        $mdp_connect = hash('sha256' , $mdp_connect);
                        if ($data['mdp'] === $mdp_connect) 
                        {
                            $_SESSION['user'] = $data['pseudo'];
                            header('Location:jeu.php');
                        } echo "mot de passe incorrect";
                    } else echo "pseudo inexistant";
                } else echo "veuillez renseigner toutes les informations";
            } else header('Location:index.php');
        } 
    }
    
    function inscription(){
        include('init.php');
        if (isset($_POST['inscrire'])) {
            if (isset($_POST['pseudo']) && isset($_POST['mdp']) && isset($_POST['mdp_retype'])) {
                if (!empty($_POST['pseudo']) && !empty($_POST['mdp']) && !empty($_POST['mdp_retype'])) {
                    $pseudo = htmlspecialchars($_POST['pseudo']);
                    $mdp = htmlspecialchars($_POST['mdp']);
                    $mdp_retype = htmlspecialchars($_POST['mdp_retype']);
                    $check = $bdd->prepare('SELECT pseudo, mdp From joueur WHERE pseudo = ? ');
                    $check->execute(array($pseudo));
                    $data = $check->fetch();
                    $row = $check->rowCount();
                    if ($row == 0) 
                    {
                        if (strlen($pseudo) <= 20) 
                        {
                            if ($mdp == $mdp_retype) 
                            {
                                $mdp = hash('sha256', $mdp);
                                $insert = $bdd->prepare('INSERT INTO joueur(pseudo, mdp) VALUES(:pseudo, :mdp)');
                                $insert->execute(array(
                                    'pseudo' => $pseudo,
                                    'mdp' => $mdp
                                ));
                                echo "vous ètes inscrit";
            
                            } else echo "mots de passe differents";
                        } else echo "pseudo trop long";
                    } else echo "le pseudo est déja utilisé";
                } else echo "veuillez renseigner toutes les informations";
            } else header('Location:index.php');
        } 
    }

    connexion();
    inscription();
?>