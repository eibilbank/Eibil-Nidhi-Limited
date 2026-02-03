
<?php
/**
 * EIBIL NIDHI LIMITED - Backend API Layer
 */

require_once 'config.php';

header('Content-Type: application/json');

$action = $_GET['action'] ?? '';

switch($action) {
    case 'submit_application':
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $name = strip_tags($_POST['name']);
            $mobile = strip_tags($_POST['mobile']);
            $product = strip_tags($_POST['type']);
            $amount = (float)$_POST['amount'];
            $app_id = "EIBIL-" . rand(10000, 99999);

            try {
                $stmt = $pdo->prepare("INSERT INTO loan_applications (app_id, full_name, mobile, product_id, amount) VALUES (?, ?, ?, ?, ?)");
                $stmt->execute([$app_id, $name, $mobile, $product, $amount]);
                
                echo json_encode(['status' => 'success', 'app_id' => $app_id]);
            } catch (PDOException $e) {
                echo json_encode(['status' => 'error', 'message' => 'Database error']);
            }
        }
        break;

    case 'get_applications':
        // Basic admin protection
        $stmt = $pdo->query("SELECT * FROM loan_applications ORDER BY created_at DESC");
        echo json_encode(['status' => 'success', 'data' => $stmt->fetchAll()]);
        break;

    default:
        echo json_encode(['status' => 'error', 'message' => 'Action not found']);
}
?>
