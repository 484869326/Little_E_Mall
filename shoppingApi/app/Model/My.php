<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class My extends Model
{
    protected $table      = 'my';
    protected $primaryKey = 'id';
    public $timestamps    = true;
    protected $fillable   = ['signature', 'nickName', 'gender', 'avatarUrl', 'city','defaultID','phone','password','Status'];
}
