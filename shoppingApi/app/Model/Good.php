<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Good extends Model
{
    //
    protected $table='good';
    protected $primaryKey='Goodid';
    public $timestamps=false;
    protected $fillable=['Goodname','Cid','Price','Explain','advertise','color','Goodimg','Type','Swiper','Detail'];
}
