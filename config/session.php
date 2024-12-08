<?php

use Illuminate\Support\Str;

return [

'driver' => env('SESSION_DRIVER', 'cookie'),


   'driver' => 'database',

   // 'driver' => env('SESSION_DRIVER', 'cookie'),
  // 'driver' => 'null',
//'driver' => env('SESSION_DRIVER', 'file'),

'driver' => env('SESSION_DRIVER', 'file'),
'path' => env('SESSION_PATH', null),

    'lifetime' => env('SESSION_LIFETIME', 120),

    'expire_on_close' => env('SESSION_EXPIRE_ON_CLOSE', false),


    'encrypt' => env('SESSION_ENCRYPT', false),


    'files' => storage_path('framework/sessions'),


    'connection' => env('SESSION_CONNECTION'),

    'table' => env('SESSION_TABLE', 'sessions'),

    'store' => env('SESSION_STORE'),

    'lottery' => [2, 100],


    'cookie' => env(
        'SESSION_COOKIE',
        Str::slug(env('APP_NAME', 'laravel'), '_').'_session'
    ),



    'path' => env('SESSION_PATH', '/'),


    'domain' => env('SESSION_DOMAIN'),


    'secure' => env('SESSION_SECURE_COOKIE'),



    'http_only' => env('SESSION_HTTP_ONLY', true),


'same_site' => env('SESSION_SAME_SITE', 'lax'),

'secure' => env('SESSION_SECURE_COOKIE', true), // Ensure true if using HTTPS



    'partitioned' => env('SESSION_PARTITIONED_COOKIE', false),

];