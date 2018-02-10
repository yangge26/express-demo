/*
SQLyog v10.2 
MySQL - 5.5.28 : Database - haha
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`haha` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `haha`;

/*Data for the table `student` */

insert  into `student`(`id`,`name`,`teacher`,`birth`,`grade`,`gender`,`phone`) values (4,'mm','sasa','2016-12-02','1','boy','10086'),(5,'xiaoming','sasa','2016-12-03','2','boy','10086'),(20,'mary','dada',NULL,'2','boy','111456'),(22,'ccc','ccc',NULL,'1','1','123456'),(23,'james','cc',NULL,'1','1','159');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
