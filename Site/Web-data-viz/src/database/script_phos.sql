USE PHOS; 

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    celular int);
    
insert into usuario (idUsuario, nome, email, senha, celular) values 
(default, 'caca', 'camila@gmail', 'caca123', 1234567895
);
select * from usuario;
select * from formulario;

CREATE TABLE formulario (
    idFormulario INT PRIMARY KEY AUTO_INCREMENT,
    perguntasUm INT,
    perguntasDois INT,
    perguntasTres INT,
    perguntasQuatro INT,
    perguntasCinco INT,
    perguntasSeis INT
);

INSERT INTO formulario (
    perguntasUm, 
    perguntasDois, 
    perguntasTres, 
    perguntasQuatro, 
    perguntasCinco, 
    perguntasSeis
) VALUES (
    5, 4, 3, 2, 1, 5
);

CREATE TABLE resultado (
    idResultado INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    fkFormulario INT,
    dataRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fkFormulario) REFERENCES formulario(idFormulario)
);

select*from resultado;

select*from formulario;

select*from usuario;

DELIMITER //

CREATE TRIGGER preencher_fkFormulario
BEFORE INSERT ON resultado
FOR EACH ROW
BEGIN
    DECLARE ultimoFormulario INT;

    SELECT idFormulario INTO ultimoFormulario
    FROM formulario
    ORDER BY idFormulario DESC
    LIMIT 1;

    SET NEW.fkFormulario = ultimoFormulario;
END;
//

DELIMITER ;

SHOW TRIGGERS;

INSERT INTO resultado (fkUsuario) VALUES (1);

SELECT * FROM resultado;

SELECT AVG(semana.perguntasUm) AS indicador1 FROM (
        SELECT formulario.perguntasUm FROM resultado
        JOIN formulario ON resultado.fkFormulario = formulario.idFormulario
        ORDER BY dataRegistro DESC
        LIMIT 7) AS semana;
    
    SELECT AVG(semana.perguntasQuatro) AS indicador2 FROM (
        SELECT formulario.perguntasDois FROM resultado
        JOIN formulario ON resultado.fkFormulario = formulario.idFormulario
        ORDER BY dataRegistro DESC
        LIMIT 7) AS semana;
        
            SELECT AVG(semana.perguntasDois) AS indicador2 FROM (
        SELECT formulario.perguntasDois FROM resultado
        JOIN formulario ON resultado.fkFormulario = formulario.idFormulario
        ORDER BY dataRegistro DESC
        LIMIT 7) AS semana;
        
            SELECT AVG(semana.perguntasTres) AS indicador2 FROM (
        SELECT formulario.perguntasTres FROM resultado
        JOIN formulario ON resultado.fkFormulario = formulario.idFormulario
        ORDER BY dataRegistro DESC
        LIMIT 7) AS semana;
        
        