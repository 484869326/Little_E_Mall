<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// use App\Model\RoleMenu;

class Role extends Model
{
    //
    protected $table = 'role';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = ['name','intro', 'createdAt','updatedAt'];
    const CREATED_AT  = 'createdAt';
    const UPDATED_AT  = 'updatedAt';
    public function menus()
    {
        return $this->hasManyThrough(Menu::class, RoleMenu::class, 'roleId', 'id', 'id', 'menuId');
    }
}
