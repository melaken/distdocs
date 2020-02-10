CREATE DATABASE distdocs DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE Utilisateur(id int(11) auto_increment, email VARCHAR(60) not null unique, mot_de_passe VARCHAR(56) NOT NULL, nom VARCHAR(20) NOT NULL, 
	prenom VARCHAR(20), date_creation DATETIME NOT NULL, user_type varchar(15), num_tel varchar(10),	
	PRIMARY KEY (id)
) ENGINE = INNODB;

alter table Utilisateur add constraint cons_check1 check( user_type in('EDITEUR','ADMIN','CLIENT'));

create table Editeur(id int(11), maison_edition VARCHAR(60),
	primary key(id)
)ENGINE = INNODB;

alter table Editeur add constraint cons_check2 check( doc_type in('MAGAZINE','JOURNAL','LIVRE'));
alter table Editeur add constraint fk1 FOREIGN KEY(id) REFERENCES Utilisateur(id);

create Table Document(id int(11) auto_increment, nom varchar(200) not null, date_ajout datetime not null,
	date_parution date not null, doc_type varchar(15) not null, prix float(11) not null, numero_edition varchar(30), editeur int(11) not null,
	resume varchar(255), premiere_couverture varchar(40) not null, titre varchar(100),
	primary key(id)
	)ENGINE = INNODB;

alter table Document add constraint cons_check3 check (doc_type in('MAGAZINE','JOURNAL','LIVRE'));
alter table Document add constraint fk2 FOREIGN KEY(editeur) REFERENCES Editeur(id);

create table Transaction(reference varchar(20),client_id int(11) not null, date_achat datetime, etat varchar(20) not null,
	tel_client varchar(20), moyen_paiement varchar(30), montant float(11), last_update datetime,
	primary key(reference)
	)ENGINE = INNODB;

alter table Transaction add constraint cons_check4 check(etat in('TERMINE','INITIE','ANNULE'));
alter table Transaction add constraint fk3 FOREIGN KEY(client_id) REFERENCES Utilisateur(id);

create table DocsAchetes(reference varchar(20) not null,doc_id int(11) not null, client_id int(11) not null,
	primary key(reference,doc_id, client_id)
	)ENGINE = INNODB;
	
alter table DocsAchetes add constraint fk4 FOREIGN KEY(doc_id) REFERENCES Document(id);
alter table DocsAchetes add constraint fk5 FOREIGN KEY(client_id) REFERENCES Utilisateur(id);
alter table DocsAchetes add constraint fk6 FOREIGN KEY(reference) REFERENCES Transaction(reference);

create table Token(id int(11) AUTO_INCREMENT primary key, token TEXT(1000) not null, date_jour datetime not null);
