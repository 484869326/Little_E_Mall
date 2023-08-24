<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Shopping extends Model {
	protected $table = 'shopping';
	protected $primaryKey = 'shoppingid';
	public $timestamps = true;
	protected $fillable = ['Goodid', 'Userid', 'type', 'color', 'Num', 'isChecked', 'isBuy'];
	public function Good() {
		return $this->belongsTo('App\Model\Good', 'Goodid', 'Goodid');
	}
}
