<?php

namespace App\Http\Controllers;

use App\Http\Resources\TontineResource;
use App\Models\Tontine;
use Illuminate\Http\Request;

class TontineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TontineResource::collection(Tontine::all()->sortByDesc("id"));

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        Tontine::create($data);
        return response()->json('nouvelle tontine créer avec succes', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tontine  $tontine
     * @return \Illuminate\Http\Response
     */
    public function show(Tontine $tontine)
    {
        return $tontine->toJson();
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tontine  $tontine
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tontine $tontine)
    {
        $data = $request->all();
       if($tontine->updateOrFail($data)){
            return response()->json([
                "updateSucces" => "informations mis à jour",
            ]);
       }
       return response()->json([
        "updateFailed" => "une erreur est survenu",
    ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tontine  $tontine
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tontine $tontine)
    {
        if ($tontine->delete()){
            return response()->json([
                "deleteSucces" => "tontine supprimé!",
            ]);
        }
        return response()->json([
            "deleteFailed" => "une erreur est survenu",
        ]);
    }
}
