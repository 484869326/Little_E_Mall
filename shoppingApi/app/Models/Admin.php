<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;


class Admin extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'admin';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = ['roleId', 'adminName', 'gender', 'email', 'address', 'adminPwd', 'tel', 'status', 'createdAt', 'updatedAt'];
    const CREATED_AT  = 'createdAt';
    const UPDATED_AT  = 'updatedAt';
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    //如果要用jwt的东西 修改密码字段就得这样
    public function getAuthPassword()
    {
        return $this->getAttribute('adminPwd');
    }
    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
//        return [];
        return [];
    }
    public function role()
    {
        return $this->belongsTo(Role::class, 'roleId');
    }
}
