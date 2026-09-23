<?php
define('LARAVEL_START', microtime(true));

header('Content-Type: application/json; charset=utf-8');
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($uri === '/health') {
    http_response_code(200);
    echo json_encode([
        'status' => 'ok',
        'framework' => 'laravel',
        'php' => phpversion()
    ]);
    exit;
}

if ($uri === '/env-test') {
    http_response_code(200);
    echo json_encode([
        'app_env' => getenv('APP_ENV') ?: 'production',
        'app_name' => getenv('APP_NAME') ?: 'LaravelPlatformTest',
        'port' => getenv('PORT') ?: '8000'
    ]);
    exit;
}

echo json_encode([
    'service' => 'laravel-web',
    'framework' => 'laravel-skeleton',
    'message' => 'Laravel Application running successfully on platform',
    'timestamp' => date('c')
]);
