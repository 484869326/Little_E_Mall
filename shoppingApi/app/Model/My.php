<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class My extends Model
{
    protected $table      = 'my';
    protected $primaryKey = 'id';
    public $timestamps    = true;
    protected $fillable   = ['nickName', 'gender', 'avatarUrl', 'city','defaultId','phone','password','status','createdAt','updatedAt'];
    public function getCreatedAtColumn()
    {
        return 'createdAt';
    }
    public function getUpdatedAtColumn()
    {
        return 'updatedAt';
    }
}
