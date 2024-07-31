<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\RoleMenu;

class Menu extends Model
{
    protected $table = 'menu';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = ['text', 'icon', 'path', 'level','permission','parentId'];
    const CREATED_AT  = 'createdAt';
    const UPDATED_AT  = 'updatedAt';
    public function roleMenu()
    {
        return $this->belongsTo(RoleMenu::class, 'id');
    }
}
