<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class Good extends Model
{
    //
    protected $table = 'good';
    protected $primaryKey = 'goodId';
    public $timestamps = true;
    protected $fillable = ['goodName', 'cid', 'price', 'explain', 'advertise', 'color', 'goodImg', 'type', 'swiper', 'detail','createdAt','updatedAt'];
    const CREATED_AT  = 'createdAt';
    const UPDATED_AT  = 'updatedAt';
    public function category()
    {
        return $this->belongsTo(Category::class, 'cid');
    }
}
