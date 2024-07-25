<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Menu;

class RoleMenu extends Model
{
    //
    protected $table = 'rolemenu';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = ['roleId','menuId', 'createdAt','updatedAt'];
    protected $created_at = 'createdAt';
    protected $updated_at = 'updatedAt';
    public function menu()
    {
        return $this->belongsTo(Menu::class, 'menuId');
    }
}
