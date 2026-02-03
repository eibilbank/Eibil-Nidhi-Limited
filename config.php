
<?php
/**
 * EIBIL NIDHI LIMITED - Secure DB Configuration
 */

define('DB_HOST', 'localhost');
define('DB_NAME', 'eibil_db');
define('DB_USER', 'eibil_user');
define('DB_PASS', 'secure_password_123');

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4", DB_USER, DB_PASS, $options);
} catch (PDOException $e) {
    // In production, log error and show friendly msg
    error_log($e->getMessage());
    die("System maintenance in progress. Please try again later.");
}
?>
