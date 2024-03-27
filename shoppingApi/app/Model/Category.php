<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category extends Model {
	protected $table = 'category';
	protected $primaryKey = 'cId';
	public $timestamps = true;
	protected $fillable = ['cName', 'parentId', 'level', 'cImg'];
    public function getCreatedAtColumn()
    {
        return 'createdAt';
    }
    public function getUpdatedAtColumn()
    {
        return 'updatedAt';
    }
}
