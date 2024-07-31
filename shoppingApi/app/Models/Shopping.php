<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shopping extends Model {
	protected $table = 'shopping';
	protected $primaryKey = 'shoppingId';
	public $timestamps = true;
	protected $fillable = ['goodId', 'userId', 'type', 'color', 'num', 'isChecked', 'isBuy'];
    const CREATED_AT  = 'createdAt';
    const UPDATED_AT  = 'updatedAt';
	public function Good() {
		return $this->belongsTo('App\Models\Good', 'goodId', 'goodId');
	}
}
