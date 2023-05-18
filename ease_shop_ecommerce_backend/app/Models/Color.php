<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    use HasFactory;
    protected $fillable = ['color_name', 'color_value'];

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
}