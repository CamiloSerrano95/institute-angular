import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import { Student } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];

  constructor(
    private studentService: StudentsService
  ) { }

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent() {
    this.studentService.getAllStudents().subscribe((data: Student[]) => {
      this.students = data['Student'];
    })
  }

  deleteStudent(id:number) {
    console.log(id);
    this.studentService.deleteStudent(id).subscribe(data => {
      console.log(data);
      this.getAllStudent();
    });
  }
}
