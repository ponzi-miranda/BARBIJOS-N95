-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: n95database
-- ------------------------------------------------------
-- Server version	8.0.25-0ubuntu0.20.04.1

-- /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
-- /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
-- /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
-- /*!50503 SET NAMES utf8 */;
-- /*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
-- /*!40103 SET TIME_ZONE='+00:00' */;
-- /*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
-- /*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
-- /*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- /*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `entregas`
--

DROP TABLE IF EXISTS `entregas`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entregas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dniPersona` int NOT NULL,
  `fechaRetiro` varchar(10) NOT NULL,
  `observaciones` varchar(100) DEFAULT NULL,
  `idServicio` int NOT NULL,
  `createdAt` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- /*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entregas`
--

LOCK TABLES `entregas` WRITE;
-- /*!40000 ALTER TABLE `entregas` DISABLE KEYS */;
INSERT INTO `entregas` VALUES (1,3,'18-03-1997','nada',1,'2010-01-01 00:00:01'),(2,3,'18-03-1997','nada 2',2,'2010-01-01 00:00:01'),(3,3,'18-03-1997','nada 2',2,'2010-01-01 00:00:01'),(4,40247330,'18-03-1997','nada 2',2,'2010-01-01 00:00:01'),(5,40247330,'18-03-1992','nada 3',2,'2010-01-01 00:00:01'),(6,40247328,'2021-03-18','sadadadsadasda',14,'2021-07-04T06:42:33.210Z');
-- /*!40000 ALTER TABLE `entregas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personas`
--

DROP TABLE IF EXISTS `personas`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personas` (
  `dni` varchar(12) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `idRol` varchar(45) NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- /*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personas`
--

LOCK TABLES `personas` WRITE;
-- /*!40000 ALTER TABLE `personas` DISABLE KEYS */;
INSERT INTO `personas` VALUES ('40247328','Ponzi','2'),('40247330','Lucas','1');
-- /*!40000 ALTER TABLE `personas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- /*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
-- /*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Dr/Dra'),(2,'Tecnico/a'),(3,'Auxiliar'),(4,'Enfermero/a'),(5,'Camillero/a'),(6,'Administrativo/a'),(7,'Licenciado/a'),(8,'Otro');
-- /*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicios`
--

DROP TABLE IF EXISTS `servicios`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- /*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicios`
--

LOCK TABLES `servicios` WRITE;
-- /*!40000 ALTER TABLE `servicios` DISABLE KEYS */;
INSERT INTO `servicios` VALUES (1,'VARIOS'),(2,'ALERGIA'),(3,'ANESTESIA'),(4,'CARDIOLOGIA'),(5,'CIRUGIA GENERAL'),(6,'CIRUGIA'),(7,'CLINICA MEDICA'),(8,'CLINICA QUIRURGICA'),(9,'CONSULTORIOS EXTERNOS'),(10,'DERMATOLOGIA'),(11,'DIABETES'),(12,'DIAG POR IMAGEN'),(13,'DIALISIS'),(14,'ELECTROMEDICINA'),(15,'GUARDIA PEDIATRIA'),(16,'GASTROENTEROLOGIA'),(17,'GINECO-OBSTETRICIA'),(18,'GUARDIA CENTRAL'),(19,'GUARDIA DE OBSTETRICIA'),(20,'HEMOTERAPIA'),(21,'INFECTOLOGIA'),(22,'KINESIOLOGIA'),(23,'LABORATORIO'),(24,'LACTARIO'),(25,'LAVADERO'),(26,'LIMPIEZA'),(27,'MEDICINA FAMILIAR'),(28,'NEONATOLOGIA'),(29,'NEUROCIRUGIA'),(30,'NUTRICION'),(31,'OBSTETRICIA'),(32,'ODONTOLOGIA'),(33,'OFTALMOLOGIA'),(34,'QUIROFANO CENTRAL'),(35,'REHABILITACION'),(36,'UCI COVID'),(37,'UCI COVID 2'),(38,'UTI ADULTOS'),(39,'UTI COVID'),(40,'UTI COVID 2'),(41,'UTI NEO'),(42,'VACUNATORIO');
-- /*!40000 ALTER TABLE `servicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(55) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- /*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
-- /*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
-- /*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

-- /*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
-- /*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
-- /*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- /*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-04  4:30:49