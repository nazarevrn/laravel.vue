<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vacations extends Model
{
    protected $fillable = ['user_id', 'begin', 'end', 'is_agreed'];
}