<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model {
	protected $table = 'menu';
	protected $primaryKey = 'id';
	public $timestamps = true;
	protected $fillable = ['text', 'icon', 'path', 'level', 'parentId'];
    public function getCreatedAtColumn()
    {
        return 'createdAt';
    }
    public function getUpdatedAtColumn()
    {
        return 'updatedAt';
    }
}
