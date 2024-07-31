<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model {
	protected $table = 'category';
	protected $primaryKey = 'cId';
	public $timestamps = true;
	protected $fillable = ['cName', 'parentId', 'level', 'cImg'];
    const CREATED_AT  = 'createdAt';
    const UPDATED_AT  = 'updatedAt';
}
