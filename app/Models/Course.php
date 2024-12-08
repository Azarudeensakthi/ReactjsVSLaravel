<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $table = 'courses'; // Replace with your table name
    protected $fillable = ['Courses', 'Fees_Structure', 'Placements', 'Types'];
}

