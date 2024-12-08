<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentDetail extends Model
{
    use HasFactory;

    protected $table = 'students_details'; // Specify table name

    protected $fillable = [
        'regId',
        'name',
        'pno',
        'email',
        'education',
        'address',
        'aadharno',
        'joiningDate',
        'courses',
        'fees'
    ];
}
