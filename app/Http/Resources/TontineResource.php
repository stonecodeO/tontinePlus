<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TontineResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'startedAt' => $this->startedAt,
            'cotisation' => $this->cotisation,
            'total_member' =>$this->users()->count()
        ];
    }
}
