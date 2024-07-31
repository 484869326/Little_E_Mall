<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Menu;

class RoleMenu extends Model
{
    //
    protected $table = 'rolemenu';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = ['roleId','menuId', 'createdAt','updatedAt'];
    const CREATED_AT  = 'createdAt';
    const UPDATED_AT  = 'updatedAt';
    public function menu()
    {
        return $this->belongsTo(Menu::class, 'menuId');
    }
}
