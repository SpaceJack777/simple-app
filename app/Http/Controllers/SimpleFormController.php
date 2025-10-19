<?php

namespace App\Http\Controllers;

use App\Models\SimpleForm;
use App\Http\Requests\StoreSimpleFormRequest;
use App\Http\Requests\UpdateSimpleFormRequest;
use Inertia\Inertia;

class SimpleFormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('SimpleForm', [

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSimpleFormRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(SimpleForm $simpleForm)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SimpleForm $simpleForm)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSimpleFormRequest $request, SimpleForm $simpleForm)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SimpleForm $simpleForm)
    {
        //
    }
}
