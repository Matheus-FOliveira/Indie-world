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
 email varchar (50),
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
 (null, 'Binding of Isaac', 'Roguelike'),
 (null, 'Celeste', 'Plataforma'),
 (null, 'Cuphead', 'Run and Gun'),
 (null, 'Darkest Dungeon', 'RPG'),
 (null, 'Hades', 'Roguelike'),
 (null, 'Hollow Knight', 'Metroidvania'),
 (null, 'Inside', 'Puzzle'),
 (null, 'Limbo', 'Puzzle'),
 (null, 'Ori and the Blind Forest', 'Plataforma'),
 (null, 'Ori and the Will of the Wisps', 'Plataforma'),
 (null, 'Skullgirls', 'Luta'),
 (null, 'Stardew Valey', 'Simulador'),
 (null, 'Undertale', 'RPG');
 
 select * from jogos;
 insert into usuario values
 (null, 'Manoel', 'manoel@sptech', 'Mano', '121212@', 4),
 (null, 'Fernanda', 'fernanda@sptech', 'Fefe', 'fefefe!', 6),
 (null, 'Carlos', 'carlito@gmail.com', 'El_carlito', '12345@@', 13),
 (null, 'Gabi', 'gabriele@spgtech.school','Love2', '00000!#@', 8),
 (null, 'Mário', 'weeee@gmail.com', 'Wario', '454545455#@', 4),
 (null, 'Miranha', 'spetacular@spiderman', 'Spider-man', 'Pspsps!!', 4),
 (null, 'Matheus', 'matheus@sptech.school', 'Supimpa', '12345@#', 4),
 (null, 'Lucas', 'lucas@sptech.school', 'ElLuquita', '77777%', 1),
 (null, 'Peter', 'peter@sptech.school', 'Peter', '731985@', 1);
 
 select * from usuario order by id;
 select * from jogos;
 
 select jogos.id, jogos.nome, count(usuario.fk_jogos) as 'QuantVotos' from usuario join jogos
 on usuario.fk_jogos = jogos.id 
 group by jogos.id order by jogos.id;
 
 