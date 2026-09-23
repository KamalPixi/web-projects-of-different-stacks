<?php
header('Content-Type: application/json; charset=utf-8');
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($uri === '/health') {
    http_response_code(200);
    echo json_encode([
        'status' => 'ok',
        'framework' => 'codeigniter4',
        'php' => phpversion()
    ]);
    exit;
}

if ($uri === '/env-test') {
    http_response_code(200);
    echo json_encode([
        'ci_environment' => getenv('CI_ENVIRONMENT') ?: 'production',
        'port' => getenv('PORT') ?: '8080'
    ]);
    exit;
}

echo json_encode([
    'service' => 'codeigniter-web',
    'framework' => 'codeigniter',
    'timestamp' => date('c'),
    'php_version' => phpversion()
]);
