
<?php
/**
 * EIBIL NIDHI LIMITED - Backend API
 * Handles loan submissions and contact queries
 */

require_once 'config.php';

header('Content-Type: application/json');

$action = $_GET['action'] ?? '';

switch($action) {
    case 'apply':
        handleApplication();
        break;
    case 'get_products':
        fetchProducts();
        break;
    default:
        echo json_encode(['status' => 'error', 'message' => 'Invalid action']);
}

function handleApplication() {
    global $pdo;
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = $_POST['name'] ?? '';
        $mobile = $_POST['mobile'] ?? '';
        $product = $_POST['product'] ?? '';
        $amount = $_POST['amount'] ?? 0;
        
        $app_id = "EIBIL-" . rand(10000, 99999);
        
        // Example SQL (Assuming DB exists)
        // $stmt = $pdo->prepare("INSERT INTO loan_applications (app_id, full_name, mobile, product_id, amount) VALUES (?, ?, ?, ?, ?)");
        // $stmt->execute([$app_id, $name, $mobile, $product, $amount]);
        
        echo json_encode([
            'status' => 'success', 
            'app_id' => $app_id,
            'message' => 'Application submitted successfully'
        ]);
    }
}

function fetchProducts() {
    // In a live system, fetch from DB
    // $stmt = $pdo->query("SELECT * FROM products");
    // $products = $stmt->fetchAll();
    echo json_encode(['status' => 'success', 'data' => []]);
}
?>
