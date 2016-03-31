CREATE TABLE IF NOT EXISTS merek(
     nama_merek CHAR(255) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS model(
     nama_merek CHAR(255) REFERENCES merek,
     model CHAR(255)
);

CREATE TABLE IF NOT EXISTS aksesoris(
     id_aksesoris INT(10) PRIMARY KEY AUTO_INCREMENT,
     nama_merek CHAR(255) REFERENCES merek,
     model CHAR(255) REFERENCES model,
     nama_aksesoris CHAR(255),
     harga INT(10),
     image_path VARCHAR(260)
);

CREATE TABLE IF NOT EXISTS aksesoris_pilihan(
     id_aksesoris INT (10) REFERENCES aksesoris,
     pilihan CHAR(255)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON merek TO 'dokushop_node' IDENTIFIED BY 'Aepuu5zu';
GRANT SELECT, INSERT, UPDATE, DELETE ON model TO 'dokushop_node'IDENTIFIED BY 'Aepuu5zu';
GRANT SELECT, INSERT, UPDATE, DELETE ON aksesoris TO 'dokushop_node'IDENTIFIED BY 'Aepuu5zu';
GRANT SELECT, INSERT, UPDATE, DELETE ON aksesoris_pilihan TO 'dokushop_node'IDENTIFIED BY 'Aepuu5zu';
