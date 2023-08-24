<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Category;
class Good extends Model {
	//
	protected $table = 'good';
	protected $primaryKey = 'Goodid';
	public $timestamps = true;
    public function category()
    {
            return $this->belongsTo(Category::class, 'cid');
    }
	protected $fillable = ['Goodname', 'Cid', 'Price', 'Explain', 'advertise', 'color', 'Goodimg', 'Type', 'Swiper', 'Detail'];
}
