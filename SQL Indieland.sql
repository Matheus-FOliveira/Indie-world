create database indieland;
use indieland;

create table jogos(
id int auto_increment,
nome varchar(100),
estilo varchar(50),
Primary key(id)
 );
 
 create table usuario(
 id int auto_increment,
 nome varchar(100),
 username varchar(50),
 senha varchar(100),
 fk_jogos int,
 primary key (id),
 foreign key (fk_jogos) references jogos(id)
 ) auto_increment = 1000;
 
 create table mensagens (
 id int auto_increment,
 titulo varchar(50),
 conteudo varchar(200),
 fk_usuario int,
 primary key (id),
 foreign key(fk_usuario) references usuario(id)
 );
 
 insert into jogos values
 (null, 'Hollow Knight', 'Metroidvania'),
 (null, 'Skullgirls', 'Luta'),
 (null, 'Celeste', 'Plataforma'),
 (null, 'Binding of Isaac', 'Roguelike'),
 (null, 'Rogue Legacy', 'Roguelike'),
 (null, 'Darkest Dungeon', 'RPG'),
 (null, 'Stardew Valey', 'Simulador'),
 (null, 'Ori and the Blind Forest', 'Plataforma'),
 (null, 'Ori and the Will of the Wisps', 'Plataforma'),
 (null, 'Limbo', 'Puzzle'),
 (null, 'Inside', 'Puzzle'),
 (null, 'Hades', 'Roguelike'),
 (null, 'Cuphead', 'Run and Gun'),
 (null, 'Minecraft', 'Simulador'),
 (null, 'Slay the Spire', 'Roguelike'),
 (null, 'Shovel Knight', 'Plataforma');