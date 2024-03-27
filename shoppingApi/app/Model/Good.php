<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Category;
class Good extends Model {
	//
	protected $table = 'good';
	protected $primaryKey = 'goodId';
	public $timestamps = true;
    public function category()
    {
            return $this->belongsTo(Category::class, 'cid');
    }
	protected $fillable = ['goodname', 'cid', 'price', 'explain', 'advertise', 'color', 'goodImg', 'type', 'swiper', 'detail','createdAt','updatedAt'];
        public function getCreatedAtColumn()
        {
            return 'createdAt';
        }
        public function getUpdatedAtColumn()
        {
            return 'updatedAt';
        }
}
