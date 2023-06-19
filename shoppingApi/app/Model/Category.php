<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table='category';
    protected $primaryKey='Cid';
    public $timestamps=false;
    protected $fillable=['Cname','parentID','Clevel','parentimg','Cimg'];
}
