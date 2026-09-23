<?php
header('Content-Type: application/json; charset=utf-8');

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($uri === '/health') {
    http_response_code(200);
    echo json_encode([
        'status' => 'ok',
        'runtime' => 'php',
        'version' => phpversion()
    ]);
    exit;
}

if ($uri === '/env-test') {
    http_response_code(200);
    echo json_encode([
        'sample_key' => getenv('SAMPLE_KEY') ?: 'php_default_value',
        'port' => getenv('PORT') ?: '8080'
    ]);
    exit;
}

// Default root endpoint
echo json_encode([
    'service' => 'plain-php-web',
    'runtime' => 'php',
    'version' => phpversion(),
    'time' => date('c'),
    'server_software' => $_SERVER['SERVER_SOFTWARE'] ?? 'built-in'
]);
