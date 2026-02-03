
-- EIBIL NIDHI LIMITED Database Schema
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;

CREATE TABLE `loan_applications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_id` varchar(20) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `product_id` varchar(50) NOT NULL,
  `amount` decimal(15,2) NOT NULL,
  `status` enum('Pending','Approved','Rejected') DEFAULT 'Pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `admin_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

COMMIT;
