<?php
namespace App\Http\Controllers;

use App\Models\StudentDetail;
use Illuminate\Http\Request;

class StudentDetailController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'pno' => 'required|string',
            'email' => 'required|email',
            'education' => 'required|string',
            'address' => 'required|string',
            'aadharno' => 'required|string',
            'joiningDate' => 'required|date',
            'courses' => 'required|string',
            'fees' => 'required|string',
        ]);

        // Save the student
        $student = new StudentDetail();
        $student->regId = $request->regId;
        $student->name = $request->name;
        $student->pno = $request->pno;
        $student->email = $request->email;
        $student->education = $request->education;
        $student->address = $request->address;
        $student->aadharno = $request->aadharno;
        $student->joiningDate = $request->joiningDate;
        $student->courses = $request->courses;
        $student->fees = $request->fees;

        $student->save();

        return response()->json(['message' => 'Student added successfully'], 200);
    }


    public function index()
    {
        $students = StudentDetail::all();

        return response()->json($students);
    }
    public function destroy($regid)
    {
        StudentDetail::whereregid($regid)->first()->delete();

        return response()->json('success');
    }
}
