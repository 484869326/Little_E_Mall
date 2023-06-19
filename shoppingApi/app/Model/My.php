<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class My extends Model
{
    protected $table='my';
    protected $primaryKey='id';
    public $timestamps=false;
    protected $fillable=['signature','nickName','gender','avatarUrl','city','phone'];
}
