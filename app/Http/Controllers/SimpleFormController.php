<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SimpleFormController extends Controller
{
    public function index()
    {
        return Inertia::render('SimpleFormIndex', [
            'title' => 'Simple form'
        ]);
    }
}
