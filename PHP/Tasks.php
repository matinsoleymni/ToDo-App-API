<?php

// Get User Tasks
$postData = array(
    "user_id" => 7
);
$ch = curl_init('https://blokchainology.com/api/api/v1/tasks/');
curl_setopt_array($ch, array(
    CURLOPT_POST => TRUE,
    CURLOPT_RETURNTRANSFER => TRUE,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json'
    ),
    CURLOPT_POSTFIELDS => json_encode($postData)
));
$response = curl_exec($ch);
// End

/* ************************************ */

// Add New Task
$postData = array(
    "user_id" => 1,
    "title" => "Task 2411",
    "description" => "this is a test description",
    "completed"=> "false"
);
$ch = curl_init('https://blokchainology.com/api/api/v1/tasks/');
curl_setopt_array($ch, array(
    CURLOPT_POST => TRUE,
    CURLOPT_RETURNTRANSFER => TRUE,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json'
    ),
    CURLOPT_POSTFIELDS => json_encode($postData)
));
$response = curl_exec($ch);
// End

/* ************************************ */

// Edit Task
$postData = array(
    "id" => 60,
    "user_id" => 1,
    "title" => "Task 2411",
    "description" => "this is a test description",
    "completed"=> "false"
);
$ch = curl_init('https://blokchainology.com/api/api/v1/tasks/');
curl_setopt_array($ch, array(
    CURLOPT_RETURNTRANSFER => TRUE,
    CURLOPT_CUSTOMREQUEST => "PUT",
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json'
    ),
    CURLOPT_POSTFIELDS => json_encode($postData)
));
$response = curl_exec($ch);
// End


/* ************************************ */

// Delete Tasks
$postData = array(
    "id" => 60
);
$ch = curl_init('https://blokchainology.com/api/api/v1/tasks/');
curl_setopt_array($ch, array(
    CURLOPT_POST => TRUE,
    CURLOPT_CUSTOMREQUEST => "DELETE",
    CURLOPT_RETURNTRANSFER => TRUE,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json'
    ),
    CURLOPT_POSTFIELDS => json_encode($postData)
));
$response = curl_exec($ch);
// End
