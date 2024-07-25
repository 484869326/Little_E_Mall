<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

// use App\Model\RoleMenu;

class Role extends Model
{
    //
    protected $table = 'role';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = ['name','intro', 'createdAt','updatedAt'];
    public function getCreatedAtColumn()
    {
        return 'createdAt';
    }
    public function getUpdatedAtColumn()
    {
        return 'updatedAt';
    }
    public function menus()
    {
        return $this->hasManyThrough(Menu::class, RoleMenu::class, 'roleId', 'id', 'id', 'menuId');
    }
}
