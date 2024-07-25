<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

use App\Model\RoleMenu;

class Menu extends Model
{
    protected $table = 'menu';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = ['text', 'icon', 'path', 'level','permission','parentId'];
    public function getCreatedAtColumn()
    {
        return 'createdAt';
    }
    public function getUpdatedAtColumn()
    {
        return 'updatedAt';
    }
    public function roleMenu()
    {
        return $this->belongsTo(RoleMenu::class, 'id');
    }
}
