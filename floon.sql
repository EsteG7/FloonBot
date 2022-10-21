-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 21 oct. 2022 à 18:58
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `floon`
--

-- --------------------------------------------------------

--
-- Structure de la table `bans`
--

CREATE TABLE `bans` (
  `guild` varchar(255) NOT NULL,
  `guildId` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `authorId` varchar(255) NOT NULL,
  `ban` varchar(255) NOT NULL,
  `reason` varchar(2000) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `goodbyes`
--

CREATE TABLE `goodbyes` (
  `guildId` varchar(255) NOT NULL,
  `goodbye` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `goodbyes`
--

INSERT INTO `goodbyes` (`guildId`, `goodbye`) VALUES
('1010538184251289691', '1010538184729432167');

-- --------------------------------------------------------

--
-- Structure de la table `kicks`
--

CREATE TABLE `kicks` (
  `guild` varchar(255) NOT NULL,
  `guildId` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `authorId` varchar(255) NOT NULL,
  `kick` varchar(255) NOT NULL,
  `reason` varchar(2000) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `mutes`
--

CREATE TABLE `mutes` (
  `guild` varchar(255) NOT NULL,
  `guildId` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `authorId` varchar(255) NOT NULL,
  `mute` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `reason` varchar(2000) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `mutes`
--

INSERT INTO `mutes` (`guild`, `guildId`, `user`, `userId`, `author`, `authorId`, `mute`, `time`, `reason`, `date`) VALUES
('Fortnite', '972195723988852776', 'Hardpick#1800', '1005425086486040650', 'Floon#4109', '426866286304428034', 'MUTE-BZAJ30CZ5R', '1d', 'test', '1665856113877');

-- --------------------------------------------------------

--
-- Structure de la table `server`
--

CREATE TABLE `server` (
  `guild` varchar(255) NOT NULL,
  `captcha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `server`
--

INSERT INTO `server` (`guild`, `captcha`) VALUES
('1010538184251289691', 'false'),
('1011333004767014963', 'false'),
('1019687284100050984', 'false'),
('972195723988852776', 'false');

-- --------------------------------------------------------

--
-- Structure de la table `unwarns`
--

CREATE TABLE `unwarns` (
  `guild` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `unwarn` varchar(255) NOT NULL,
  `reason` varchar(2000) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `warns`
--

CREATE TABLE `warns` (
  `guild` varchar(255) NOT NULL,
  `guildId` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `authorId` varchar(255) NOT NULL,
  `warn` varchar(255) NOT NULL,
  `reason` varchar(2000) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `welcomes`
--

CREATE TABLE `welcomes` (
  `guildId` varchar(255) NOT NULL,
  `welcome` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `welcomes`
--

INSERT INTO `welcomes` (`guildId`, `welcome`) VALUES
('1010538184251289691', '1010538184729432167'),
('972195723988852776', '972786095446167572');

-- --------------------------------------------------------

--
-- Structure de la table `xp`
--

CREATE TABLE `xp` (
  `guild` varchar(255) NOT NULL,
  `guildId` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `xp` varchar(255) NOT NULL,
  `level` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `xp`
--

INSERT INTO `xp` (`guild`, `guildId`, `user`, `userId`, `xp`, `level`) VALUES
('Fortnite', '972195723988852776', 'Floon#4109', '426866286304428034', '1200', '7'),
('Fortnite', '972195723988852776', 'Hardpick#1800', '1005425086486040650', '637', '0'),
('Fortnite', '972195723988852776', 'LazerMat#3743', '432523387286585344', '78', '0'),
('Serveur de Hardpick', '1010538184251289691', 'Hardpick#1800', '1005425086486040650', '130', '0'),
('Serveur de Hardpick', '1011333004767014963', 'Floon#4109', '426866286304428034', '46', '0'),
('Serveur de Hardpick', '1010538184251289691', 'Floon#4109', '426866286304428034', '746', '0'),
('Ile de zikerlo', '1019687284100050984', 'Raddoth#5079', '843730013709664288', '28', '0'),
('Ile de zikerlo', '1019687284100050984', 'zik#0462', '1018829040687267850', '100', '0'),
('Ile de zikerlo', '1019687284100050984', 'Floon#4109', '426866286304428034', '71', '0'),
('Fortnite', '972195723988852776', 'annoying#5825', '856937132178014230', '8', '0'),
('Fortnite', '972195723988852776', 'COUCOU#9220', '1003594363537993760', '24', '0'),
('Fortnite', '972195723988852776', 'sk_dédé#1415', '694147197775773716', '0', '0'),
('Serveur de Hardpick', '1011333004767014963', 'Hardpick#1800', '1005425086486040650', '0', '0'),
('Fortnite', '972195723988852776', 'fathChiken end#9473', '663348160978092064', '16', '0');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `bans`
--
ALTER TABLE `bans`
  ADD PRIMARY KEY (`ban`);

--
-- Index pour la table `goodbyes`
--
ALTER TABLE `goodbyes`
  ADD PRIMARY KEY (`guildId`);

--
-- Index pour la table `kicks`
--
ALTER TABLE `kicks`
  ADD PRIMARY KEY (`kick`);

--
-- Index pour la table `mutes`
--
ALTER TABLE `mutes`
  ADD PRIMARY KEY (`mute`);

--
-- Index pour la table `server`
--
ALTER TABLE `server`
  ADD PRIMARY KEY (`guild`);

--
-- Index pour la table `unwarns`
--
ALTER TABLE `unwarns`
  ADD PRIMARY KEY (`unwarn`);

--
-- Index pour la table `warns`
--
ALTER TABLE `warns`
  ADD PRIMARY KEY (`warn`);

--
-- Index pour la table `welcomes`
--
ALTER TABLE `welcomes`
  ADD PRIMARY KEY (`guildId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
