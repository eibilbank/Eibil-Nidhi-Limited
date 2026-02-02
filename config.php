<?php
/**
 * EIBIL NIDHI LIMITED - Production Configuration
 * cPanel compatible secure PHP backbone
 */

define('DB_HOST', 'localhost');
define('DB_NAME', 'eibil_portal_db');
define('DB_USER', 'eibil_secure_admin');
define('DB_PASS', 'ComplexPassword_123');

// Application Constants
define('APP_NAME', 'EIBIL NIDHI LIMITED');
define('ADMIN_KEY', 'admin123'); // For SPA demonstration
define('ENCRYPTION_KEY', bin2hex(random_bytes(32)));

// PDO Security Settings
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4", DB_USER, DB_PASS, $options);
} catch (PDOException $e) {
    // Graceful error handling for production
    error_log($e->getMessage());
    die("Institutional connectivity disrupted. Please try again later.");
}

// Security Headers
header("X-Frame-Options: SAMEORIGIN");
header("X-Content-Type-Options: nosniff");
header("X-XSS-Protection: 1; mode=block");
?>