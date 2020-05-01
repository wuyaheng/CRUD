CREATE DATABASE contacts;
USE contacts;
CREATE TABLE contact (
  id Int( 11 ) AUTO_INCREMENT NOT NULL,
  name VARCHAR( 255) NOT NULL,
  email VARCHAR( 255 ) NOT NULL,
  message VARCHAR( 255 ) ,
  created_at DATETIME NOT NULL,
  PRIMARY KEY ( `id` ) 
);