-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Dim 29 Mai 2022 à 22:05
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `jeu`
--

-- --------------------------------------------------------

--
-- Structure de la table `joueur`
--

CREATE TABLE IF NOT EXISTS `joueur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(100) NOT NULL,
  `mdp` varchar(100) NOT NULL,
  `score` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Contenu de la table `joueur`
--

INSERT INTO `joueur` (`id`, `pseudo`, `mdp`, `score`) VALUES
(1, 'koro', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', ''),
(2, 'poipoi', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', ''),
(3, 'momo', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', ''),
(4, 'popo', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
