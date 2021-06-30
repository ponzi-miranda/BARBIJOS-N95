-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: n95database
-- ------------------------------------------------------
-- Server version	8.0.25-0ubuntu0.20.04.1


--
-- Table structure for table `entregas`
--

DROP TABLE IF EXISTS `entregas`;
CREATE TABLE `entregas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idPersona` int DEFAULT NULL,
  `fechaRetiro` datetime DEFAULT NULL,
  `observaciones` varchar(100) DEFAULT NULL,
  `idServicio` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `entregas`
--

LOCK TABLES `entregas` WRITE;
INSERT INTO `entregas` VALUES (1,1,NULL,'Retiro personal',1),(2,1,NULL,'Retiro personal 2',5);
UNLOCK TABLES;

--
-- Table structure for table `personas`
--

DROP TABLE IF EXISTS `personas`;
CREATE TABLE `personas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(65) DEFAULT NULL,
  `dni` int DEFAULT NULL,
  `idRol` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `personas`
--

LOCK TABLES `personas` WRITE;
INSERT INTO `personas` VALUES (1,'Lucas',40247328,2);
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
INSERT INTO `roles` VALUES (1,'Dr/Dra'),(2,'Tecnico/a'),(3,'Auxiliar'),(4,'Enfermero/a'),(5,'Camillero/a'),(6,'Administrativo/a'),(7,'Licenciado/a'),(8,'Otro');
UNLOCK TABLES;

--
-- Table structure for table `servicios`
--

DROP TABLE IF EXISTS `servicios`;
CREATE TABLE `servicios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `servicios`
--

LOCK TABLES `servicios` WRITE;
INSERT INTO `servicios` VALUES (1,'VARIOS'),(2,'ALERGIA'),(3,'ANESTESIA'),(4,'CARDIOLOGIA'),(5,'CIRUGIA GENERAL'),(6,'CIRUGIA'),(7,'CLINICA MEDICA'),(8,'CLINICA QUIRURGICA'),(9,'CONSULTORIOS EXTERNOS'),(10,'DERMATOLOGIA'),(11,'DIABETES'),(12,'DIAG POR IMAGEN'),(13,'DIALISIS'),(14,'ELECTROMEDICINA'),(15,'GUARDIA PEDIATRIA'),(16,'GASTROENTEROLOGIA'),(17,'GINECO-OBSTETRICIA'),(18,'GUARDIA CENTRAL'),(19,'GUARDIA DE OBSTETRICIA'),(20,'HEMOTERAPIA'),(21,'INFECTOLOGIA'),(22,'KINESIOLOGIA'),(23,'LABORATORIO'),(24,'LACTARIO'),(25,'LAVADERO'),(26,'LIMPIEZA'),(27,'MEDICINA FAMILIAR'),(28,'NEONATOLOGIA'),(29,'NEUROCIRUGIA'),(30,'NUTRICION'),(31,'OBSTETRICIA'),(32,'ODONTOLOGIA'),(33,'OFTALMOLOGIA'),(34,'QUIROFANO CENTRAL'),(35,'REHABILITACION'),(36,'UCI COVID'),(37,'UCI COVID 2'),(38,'UTI ADULTOS'),(39,'UTI COVID'),(40,'UTI COVID 2'),(41,'UTI NEO'),(42,'VACUNATORIO');
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(55) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
UNLOCK TABLES;


-- Dump completed on 2021-06-29 21:14:52
