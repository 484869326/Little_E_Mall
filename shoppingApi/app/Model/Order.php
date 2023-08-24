<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Order extends Model {
	protected $table = 'order';
	protected $primaryKey = 'orderid';
	public $timestamps = true;
	protected $fillable = ['Userid', 'Goodid', 'Num', 'totalPrice', 'OrderDate', 'Name', 'Address', 'Phone', 'condition'];
}
