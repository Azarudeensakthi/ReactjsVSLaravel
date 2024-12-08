<?php

return [
    'paths' => ['api/*', 'oauth/*', 'sanctum/csrf-cookie'],
    'allowed_origins' => ['http://localhost:3000'], // Make sure this matches your React app URL
    'allowed_methods' => ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
    'allowed_headers' => ['*'], // Allowed headers
  'supports_credentials' => true,
];
