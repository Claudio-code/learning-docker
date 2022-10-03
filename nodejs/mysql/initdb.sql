CREATE DATABASE IF NOT EXISTS fullcicle;

CREATE TABLE IF NOT EXISTS names_list (
    id INT AUTO_INCREMENT PRIMARY KEY,
    names VARCHAR(255) NOT NULL
) ENGINE=INNODB;


INSERT INTO `names_list` (names) VALUES ("claudio");
INSERT INTO `names_list` (names) VALUES ("silva");
INSERT INTO `names_list` (names) VALUES ("junior");
INSERT INTO `names_list` (names) VALUES ("bruno");
INSERT INTO `names_list` (names) VALUES ("henrique");
INSERT INTO `names_list` (names) VALUES ("silva");
