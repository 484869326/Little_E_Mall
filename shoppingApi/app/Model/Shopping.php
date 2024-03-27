<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Shopping extends Model {
	protected $table = 'shopping';
	protected $primaryKey = 'shoppingId';
	public $timestamps = true;
	protected $fillable = ['goodId', 'userId', 'type', 'color', 'num', 'isChecked', 'isBuy'];
	public function Good() {
		return $this->belongsTo('App\Model\Good', 'goodId', 'goodId');
	}
    public function getCreatedAtColumn()
    {
        return 'createdAt';
    }
    public function getUpdatedAtColumn()
    {
        return 'updatedAt';
    }
}
