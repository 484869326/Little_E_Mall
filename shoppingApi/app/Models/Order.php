<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model {
	protected $table = 'order';
	protected $primaryKey = 'orderId';
	public $timestamps = true;
	protected $fillable = ['userId', 'goodId', 'color','type','num', 'totalPrice','name', 'address', 'phone', 'condition'];
    const CREATED_AT  = 'createdAt';
    const UPDATED_AT  = 'updatedAt';
}
