<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model {
	//
	protected $table = 'admin';
	protected $primaryKey = 'id';
	public $timestamps = true;
	protected $fillable = ['adminName', 'Sex', 'Email', 'Address', 'adminPwd', 'Tel', 'Status', 'created_at'];
}
