DROP DATABASE forum;
CREATE DATABASE IF NOT EXISTS forum;

USE forum;

DELIMITER $$
CREATE FUNCTION ParseToSlug(title VARCHAR(200))
RETURNS VARCHAR(200) DETERMINISTIC
BEGIN
RETURN REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(TRIM(LCASE(title)), ':', ''), '’', ''), ')', ''), '(', ''), ',', ''), '\\', ''), '\/', ''), '\"', ''), '?', ''), '\'', ''), '&', ''), '!', ''), '.', ''), ' ', '-'), '--', '-'), '--', '-');
END $$ DELIMITER ;

SELECT ParseToSlug('Qual editor de texto você prefere?');

CREATE TABLE IF NOT EXISTS postagem(
    id INT PRIMARY KEY auto_increment,
    titulo_postagem VARCHAR(150),
    slug_postagem VARCHAR(150),
    data_abertura DATETIME,
    data_modificacao DATETIME,
    status_postagem VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS categoria(
    id INT PRIMARY KEY auto_increment,
    nome VARCHAR(150)
);

CREATE TABLE IF NOT EXISTS postagem_categoria(
    postagem_id INT NOT NULL,
    categoria_id INT NOT NULL,
    FOREIGN KEY (postagem_id) REFERENCES postagem(id),
    FOREIGN KEY (categoria_id) REFERENCES categoria(id),
    PRIMARY KEY(postagem_id, categoria_id)
);

INSERT INTO categoria VALUES (1, 'Padrão');

--  EXEMPLO DE TRIGGER BEFORE INSERT
DELIMITER $$
CREATE TRIGGER trigger_postagem_before_insert
    BEFORE INSERT ON postagem
    FOR EACH ROW
BEGIN
    SET 
    NEW.slug_postagem = ParseToSlug(NEW.titulo_postagem),
    NEW.status_postagem = 'Aguardando Aprovação',
    NEW.data_abertura = NOW();
    
END;
$$ DELIMITER ;

INSERT INTO postagem (titulo_postagem) VALUES ('Qual editor de texto você prefere?');

SELECT * FROM postagem;

--  EXEMPLO DE TRIGGER AFTER INSERT
DELIMITER $$
CREATE TRIGGER trigger_postagem_after_insert
    AFTER INSERT ON postagem
    FOR EACH ROW
BEGIN
    INSERT INTO postagem_categoria VALUES (NEW.id, 1);
END;
$$ DELIMITER ;

INSERT INTO postagem (titulo_postagem) VALUES ('Qual linguagem de programação você prefere?');

SELECT * FROM postagem p
LEFT JOIN postagem_categoria p_cat ON p_cat.postagem_id=p.id
LEFT JOIN categoria cat ON p_cat.postagem_id=cat.id;

--  EXEMPLO DE TRIGGER BEFORE UPDATE
DELIMITER $$
CREATE TRIGGER trigger_postagem_before_update
    BEFORE UPDATE ON postagem
    FOR EACH ROW
BEGIN
    SET
    NEW.slug_postagem = ParseToSlug(NEW.titulo_postagem),
	  NEW.data_modificacao = NOW();
END;
$$ DELIMITER ;

UPDATE postagem SET titulo_postagem = 'Qual editor de código você prefere?' WHERE id=1;

SELECT * FROM postagem;

--  EXEMPLO DE TRIGGER BEFORE DELETE
SELECT * FROM postagem_categoria;

DELIMITER $$
CREATE TRIGGER trigger_postagem_before_delete
    BEFORE DELETE ON postagem
    FOR EACH ROW
BEGIN
    DELETE FROM postagem_categoria WHERE postagem_id=OLD.id;
END;
$$ DELIMITER ;

DELETE FROM postagem WHERE id=2;

SELECT * FROM postagem_categoria;

