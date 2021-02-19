-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: tashmapossystemdb
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `tashmapossystemdb`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `tashmapossystemdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `tashmapossystemdb`;

--
-- Table structure for table `category_details`
--

DROP TABLE IF EXISTS `category_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_details` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `CategoryName` varchar(100) NOT NULL,
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ModifiedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_details`
--

LOCK TABLES `category_details` WRITE;
/*!40000 ALTER TABLE `category_details` DISABLE KEYS */;
INSERT INTO `category_details` VALUES (1,'Umma Umma','2021-02-08 00:35:46',NULL),(2,'asdasdasd','2021-02-08 00:46:23',NULL),(3,'Umma','2021-02-13 14:38:35',NULL),(4,'Umma','2021-02-13 17:07:07',NULL),(5,'Bottle','2021-02-13 17:09:12',NULL),(6,'helnew','2021-02-13 17:10:50',NULL),(7,'gg','2021-02-13 17:17:54',NULL),(8,'fgfg','2021-02-13 17:18:48',NULL),(9,'dasd','2021-02-13 17:19:19',NULL);
/*!40000 ALTER TABLE `category_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_details`
--

DROP TABLE IF EXISTS `customer_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_details` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `PhoneNumber` varchar(10) NOT NULL,
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CreatedBy` int NOT NULL,
  `ModifiedDate` datetime DEFAULT NULL,
  `ModifiedBy` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `PhoneNumber_UNIQUE` (`PhoneNumber`),
  UNIQUE KEY `PhoneNumber` (`PhoneNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_details`
--

LOCK TABLES `customer_details` WRITE;
/*!40000 ALTER TABLE `customer_details` DISABLE KEYS */;
INSERT INTO `customer_details` VALUES (1,'Gotukola','779767556','2021-01-30 02:50:13',10,NULL,NULL),(5,'ASdasdas','779767557','2021-01-30 03:17:44',10,NULL,NULL),(8,'Test','779764556','2021-01-30 03:19:10',10,NULL,NULL),(10,'ASdasdas','779767457','2021-01-30 03:32:38',10,NULL,NULL),(26,'Dulan','210938139','2021-02-13 18:37:48',1,NULL,NULL),(30,'Gotukola','0779767556','2021-02-19 03:34:04',1,NULL,NULL);
/*!40000 ALTER TABLE `customer_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee_commission_details`
--

DROP TABLE IF EXISTS `employee_commission_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee_commission_details` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `UserId` int NOT NULL,
  `OrderId` int NOT NULL,
  `Commission` decimal(10,2) NOT NULL,
  `IsCommissionPaid` tinyint NOT NULL DEFAULT '0',
  `CommissionPaidDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `employee_commission_detailsUserId_idx` (`UserId`),
  KEY `employee_commission_detailsOrderId_idx` (`OrderId`),
  CONSTRAINT `employee_commission_detailsOrderId` FOREIGN KEY (`OrderId`) REFERENCES `order_details` (`Id`),
  CONSTRAINT `employee_commission_detailsUserId` FOREIGN KEY (`UserId`) REFERENCES `user_details` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_commission_details`
--

LOCK TABLES `employee_commission_details` WRITE;
/*!40000 ALTER TABLE `employee_commission_details` DISABLE KEYS */;
INSERT INTO `employee_commission_details` VALUES (4,2,6,10.00,1,'2021-02-08 00:11:23'),(5,2,6,20.00,1,'2021-02-08 00:11:23');
/*!40000 ALTER TABLE `employee_commission_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `CustomerId` int NOT NULL,
  `OrderTotal` decimal(10,2) NOT NULL,
  `AdvancePayment` decimal(10,2) NOT NULL,
  `AmountDue` decimal(10,2) NOT NULL,
  `IsCompleted` tinyint NOT NULL,
  `CompletedDate` datetime DEFAULT NULL,
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CreatedBy` int NOT NULL,
  `ModifiedDate` datetime DEFAULT NULL,
  `ModifiedBy` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Amount_detailsCustomerId_idx` (`CustomerId`),
  CONSTRAINT `Order_DetailsCustomerId` FOREIGN KEY (`CustomerId`) REFERENCES `customer_details` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (1,8,700.00,200.00,500.00,1,NULL,'2021-01-30 09:39:26',1,NULL,NULL),(2,1,700.00,200.00,500.00,0,NULL,'2021-01-30 09:54:18',1,NULL,NULL),(3,1,700.00,200.00,500.00,0,NULL,'2021-01-30 09:55:33',1,NULL,NULL),(4,1,700.00,200.00,500.00,0,NULL,'2021-01-30 10:00:47',1,NULL,NULL),(5,1,700.00,200.00,500.00,0,NULL,'2021-01-31 00:00:05',1,NULL,NULL),(6,1,700.00,200.00,500.00,0,'2021-02-07 23:55:24','2021-01-31 00:01:48',1,NULL,NULL),(11,1,700.85,200.55,500.45,0,NULL,'2021-02-13 16:04:06',1,NULL,NULL),(12,26,2873.36,1000.00,1873.36,0,NULL,'2021-02-13 18:37:48',1,NULL,NULL),(13,1,120854.58,50000.65,70853.93,0,NULL,'2021-02-14 00:10:05',1,NULL,NULL),(14,1,76.23,50.00,26.23,0,NULL,'2021-02-14 01:41:06',1,NULL,NULL),(15,1,69.30,11.00,58.30,0,NULL,'2021-02-14 02:01:35',1,NULL,NULL),(16,30,5.00,0.00,5.00,0,NULL,'2021-02-19 03:34:04',1,NULL,NULL);
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details_item`
--

DROP TABLE IF EXISTS `order_details_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details_item` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `OrderId` int NOT NULL,
  `CategoryId` int NOT NULL,
  `ProductId` int NOT NULL,
  `Description` varchar(500) DEFAULT NULL,
  `Qty` int NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `Discount` decimal(10,2) NOT NULL,
  `WorkDoneBy` int NOT NULL,
  `Commission` decimal(10,2) NOT NULL,
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CreatedBy` int NOT NULL,
  `ModifiedDate` datetime DEFAULT NULL,
  `ModifiedBy` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `OrderDetailsItem_OrderID_idx` (`OrderId`),
  CONSTRAINT `OrderDetailsItem_OrderID` FOREIGN KEY (`OrderId`) REFERENCES `order_details` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details_item`
--

LOCK TABLES `order_details_item` WRITE;
/*!40000 ALTER TABLE `order_details_item` DISABLE KEYS */;
INSERT INTO `order_details_item` VALUES (1,1,6,6,'Description',5,20.00,10.00,1,1.00,'2021-01-30 23:47:27',10,NULL,NULL),(2,6,1,1,'null',6,100.00,50.00,2,10.00,'2021-01-31 00:01:48',10,NULL,NULL),(3,6,2,2,'TEST DESCRIPTION',6,210.00,50.00,2,20.00,'2021-01-31 00:01:48',10,NULL,NULL),(8,11,6,7,'null',6,100.62,50.40,1,10.30,'2021-02-13 16:04:06',10,NULL,NULL),(9,11,1,3,'TEST DESCRIPTION',6,210.33,50.88,2,20.22,'2021-02-13 16:04:06',10,NULL,NULL),(10,12,2,4,'qweqewqewdescritption',14,200.00,2.00,1,140.00,'2021-02-13 18:37:48',1,NULL,NULL),(11,12,6,7,'fsfs',44,3.00,2.00,1,6.60,'2021-02-13 18:37:48',1,NULL,NULL),(12,13,1,1,'sda',111,1111.00,2.00,1,6166.05,'2021-02-14 00:10:05',1,NULL,NULL),(13,14,2,2,'22',7,11.00,1.00,1,3.85,'2021-02-14 01:41:06',1,NULL,NULL),(14,15,6,6,'asdasdasd',7,10.00,1.00,1,3.50,'2021-02-14 02:01:35',1,NULL,NULL),(15,16,1,3,'sda',5,1.00,0.00,1,0.25,'2021-02-19 03:34:04',1,NULL,NULL);
/*!40000 ALTER TABLE `order_details_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_details`
--

DROP TABLE IF EXISTS `product_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_details` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `CategoryId` int NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` varchar(500) DEFAULT NULL,
  `BuyingPrice` decimal(10,2) NOT NULL,
  `SellingPrice` decimal(10,2) NOT NULL,
  `Quantity` int NOT NULL,
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ModifiedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `product_detailsProductCategoryId_idx` (`CategoryId`),
  CONSTRAINT `product_detailsProductCategoryId` FOREIGN KEY (`CategoryId`) REFERENCES `category_details` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_details`
--

LOCK TABLES `product_details` WRITE;
/*!40000 ALTER TABLE `product_details` DISABLE KEYS */;
INSERT INTO `product_details` VALUES (1,1,'Test','Test',20.00,40.00,20,'2021-02-13 15:08:48',NULL),(2,2,'Test 2','Test 2',25.50,50.50,2,'2021-02-13 15:09:44',NULL),(3,1,'SPTest','',55.32,85.23,20,'2021-02-13 16:26:47',NULL),(4,2,'Umma','Umma',87.22,69.99,20,'2021-02-13 16:38:36',NULL),(6,6,'asdad','asdasda',212.88,212.88,22,'2021-02-13 17:39:31',NULL),(7,6,'zzzzzzzzzzzzz','zzzzzzzz',34.00,66.00,4,'2021-02-13 17:45:26',NULL);
/*!40000 ALTER TABLE `product_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_details`
--

DROP TABLE IF EXISTS `user_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_details` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `PhoneNumber` varchar(10) NOT NULL,
  `NIC` varchar(12) NOT NULL,
  `EPFNumber` varchar(12) NOT NULL,
  `BasicSalary` int NOT NULL,
  `IsAdmin` tinyint NOT NULL DEFAULT '0',
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CreatedBy` int NOT NULL,
  `ModifiedDate` datetime DEFAULT NULL,
  `ModifiedBy` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `PhoneNumber_UNIQUE` (`PhoneNumber`),
  UNIQUE KEY `NIC_UNIQUE` (`NIC`),
  UNIQUE KEY `EPFNumber_UNIQUE` (`EPFNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_details`
--

LOCK TABLES `user_details` WRITE;
/*!40000 ALTER TABLE `user_details` DISABLE KEYS */;
INSERT INTO `user_details` VALUES (1,'Iman','0757575986','983612245V','5465465',20,0,'2021-02-07 20:17:28',1,NULL,NULL),(2,'Dulan','0779767556','984612245V','56465',30,1,'2021-02-07 20:18:44',1,NULL,NULL);
/*!40000 ALTER TABLE `user_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'tashmapossystemdb'
--
/*!50003 DROP PROCEDURE IF EXISTS `CompleteOrder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CompleteOrder`(IN orderId int )
BEGIN
       UPDATE order_details
SET CompletedDate = CURRENT_TIMESTAMP()
WHERE Id = orderId;

        INSERT INTO employee_commission_details
  (UserId, OrderId, Commission)
SELECT ODI.WorkDoneBy, orderId, ODI.Commission
FROM order_details_item AS ODI
WHERE ODI.OrderId = orderId;
  
       END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateCategory`(IN categoryName varchar(100) )
BEGIN
	INSERT INTO category_details(CategoryName)
	VALUES (categoryName);

  
       END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateProduct`(
IN categoryId varchar(100),
IN name varchar(100),
IN description varchar(500),
IN buyingPrice decimal(10,2),
IN sellingPrice decimal(10,2),
IN quantity int
 )
BEGIN
	INSERT INTO product_details(CategoryId, Name, Description, BuyingPrice, SellingPrice, Quantity)
	VALUES (categoryId, name, description, buyingPrice, sellingPrice, quantity);
       END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `EditCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `EditCategory`(IN categoryId int, IN categoryName varchar(100) )
BEGIN
	UPDATE category_details
    SET
    CategoryName = categoryName
    WHERE Id = categoryId;

  
       END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllCategories` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllCategories`()
BEGIN
       
      SELECT *
      FROM category_details;
  
       END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllOrders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllOrders`()
BEGIN
       
      SELECT OD.ID as OrderId, OrderTotal,AdvancePayment,AmountDue,IsCompleted, OD.CreatedDate, CD.Id AS CustomerId, CD.Name AS CustomerName, CD.PhoneNumber
      FROM order_details AS OD
      INNER JOIN customer_details AS CD
      ON OD.CustomerId = CD.Id;
  
       END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllProducts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllProducts`()
BEGIN
       
      SELECT PD.*, CD.CategoryName
      FROM product_details PD
      INNER JOIN category_details CD
      ON PD.CategoryId = CD.Id
      WHERE PD.Quantity > 0;
  
       END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetOrderbyId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetOrderbyId`( IN orderId int)
BEGIN
       
      SELECT OD.Id as OrderId, OrderTotal,AdvancePayment,AmountDue,IsCompleted, OD.CreatedDate, CD.Id AS CustomerId, CD.Name AS CustomerName, CD.PhoneNumber, UD.Name as CreatedBy
      FROM order_details AS OD
      INNER JOIN customer_details AS CD
      ON OD.CustomerId = CD.Id
      INNER JOIN user_details AS UD
      ON OD.CreatedBy = UD.Id
      Where OD.Id = orderId;
  
       END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetOrderItemsbyId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetOrderItemsbyId`( IN orderId int)
BEGIN
       
      SELECT ODI.*, CD.CategoryName, PD.Name as ProductName, UD.Name as WorkDoneByName
      FROM order_details_item as ODI
      INNER JOIN category_details AS CD
      ON ODI.CategoryId = CD.Id
      INNER JOIN product_details AS PD
      ON ODI.ProductId = PD.Id
	INNER JOIN user_details AS UD
      ON ODI.WorkDoneBy = UD.Id
      Where ODI.OrderId = orderId;
  
       END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertCustomer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertCustomer`(IN customerName varchar(100), IN phoneNo varchar(10), IN userId int, OUT customerId int)
BEGIN
	INSERT INTO customer_details
  (Name, PhoneNumber, CreatedBy)
VALUES
  (customerName, phoneNo, userId)
ON DUPLICATE KEY UPDATE
  Name = VALUES(Name);
  
  SELECT Id INTO customerId FROM customer_details
  WHERE PhoneNumber = phoneNo;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertOrderDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertOrderDetails`(IN customerId int,
 IN orderTotal decimal(10,2), 
 IN advancePayment decimal(10,2), 
 IN amountDue decimal(10,2), 
 IN isCompleted tinyint, 
 IN completedDate datetime, 
 IN userId int, 
 OUT orderId int)
BEGIN
       
         INSERT INTO order_details
  (CustomerId, OrderTotal, AdvancePayment, AmountDue, IsCompleted, CompletedDate, CreatedBy)
VALUES
  (customerId, orderTotal, advancePayment, amountDue, isCompleted, completedDate, userId);
  
   SELECT LAST_INSERT_ID() INTO orderId ;
       END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertOrderDetailsItem` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertOrderDetailsItem`(IN orderId int,
 IN categoryId int, 
 IN productId int, 
 IN description varchar(500), 
 IN qty int, 
 IN price decimal(10,2), 
 IN discount decimal(10,2), 
 IN workDoneBy int, 
 IN commission decimal(10,2), 
 IN userId int )
BEGIN
       
         INSERT INTO order_details_item
  (OrderId, CategoryId, ProductId, Description, Qty, Price, Discount, WorkDoneBy, Commission, CreatedBy)
VALUES
  (orderId, categoryId, productId, description, qty, price, discount, workDoneBy, commission, userId);
  
       END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `PayCommision` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `PayCommision`(IN orderId int, IN userId int )
BEGIN
       UPDATE employee_commission_details
SET CommissionPaidDate = CURRENT_TIMESTAMP(), IsCommissionPaid = 1
WHERE OrderId = orderId AND UserId = userId;

        
  
       END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-19 13:10:25
