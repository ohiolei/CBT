<?php

namespace App\Services;

use Illuminate\Http\JsonResponse;

class ResponseService
{
    protected $message;
    protected $data = [];
    protected $status;
    protected $response;

    // Create a static method to initiate the builder
    public static function asSuccess($status = 200)
    {
        $instance = new self();
        $instance->status = $status;
        return $instance;
    }

    public static function asError($status = 404)
    {
        $instance = new self();
        $instance->status = $status;
        return $instance;
    }

    public function withHttpCode(Int $response)
    {
        $this->$response = $response;
        return $this;
    }

    // Method to add a success message
    public function withMessage(string $message)
    {
        $this->message = $message;
        return $this;
    }

    // Method to add data to the response
    public function withData(array $data)
    {
        $this->data = $data;
        return $this;
    }

    // Build the final response
    public function build(): JsonResponse
    {
        return response()->json([
            'message' => $this->message,
            'data' => $this->data,
            'response' => $this->response,
        ], $this->status);
    }
}
