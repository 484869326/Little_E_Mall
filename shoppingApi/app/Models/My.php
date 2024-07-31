<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class My extends Model
{
    protected $table      = 'my';
    protected $primaryKey = 'id';
    public $timestamps    = true;
    protected $fillable   = ['nickName', 'gender', 'avatarUrl', 'city','defaultId','phone','password','status','createdAt','updatedAt'];
    const CREATED_AT  = 'createdAt';
    const UPDATED_AT  = 'updatedAt';
}
