
<?php
/**
 * EIBIL NIDHI LIMITED - Secure Backend API
 * Handles database operations for the Vanilla JS Frontend
 */

require_once 'config.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$action = $_GET['action'] ?? '';

switch($action) {
    case 'apply':
        submitApplication();
        break;
    case 'get_apps':
        fetchApplications();
        break;
    default:
        echo json_encode(['status' => 'error', 'message' => 'Endpoint not found']);
}

function submitApplication() {
    global $pdo;
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = strip_tags($_POST['name']);
        $mobile = strip_tags($_POST['mobile']);
        $product = strip_tags($_POST['type']);
        $amount = (float)$_POST['amount'];
        $app_id = "EIBIL-" . rand(10000, 99999);

        try {
            $stmt = $pdo->prepare("INSERT INTO loan_applications (app_id, full_name, mobile, product_id, amount) VALUES (?, ?, ?, ?, ?)");
            $stmt->execute([$app_id, $name, $mobile, $product, $amount]);
            
            echo json_encode([
                'status' => 'success',
                'app_id' => $app_id,
                'message' => 'Application recorded successfully'
            ]);
        } catch (PDOException $e) {
            echo json_encode(['status' => 'error', 'message' => 'Database error']);
        }
    }
}

function fetchApplications() {
    global $pdo;
    // Simple authentication check would go here
    $stmt = $pdo->query("SELECT * FROM loan_applications ORDER BY created_at DESC");
    echo json_encode(['status' => 'success', 'data' => $stmt->fetchAll()]);
}
?>
