<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Order extends Model {
	protected $table = 'order';
	protected $primaryKey = 'orderId';
	public $timestamps = true;
	protected $fillable = ['userId', 'goodId', 'color','type','num', 'totalPrice','name', 'address', 'phone', 'condition'];
    public function getCreatedAtColumn()
    {
        return 'createdAt';
    }
    public function getUpdatedAtColumn()
    {
        return 'updatedAt';
    }
}
