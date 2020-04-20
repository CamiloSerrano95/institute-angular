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

  ngOnInit() {
    this.getAllStudent();
  }

  getAllStudent() {
    this.studentService.getAllStudents().subscribe((data: Student[]) => {
      this.students = data['Student'];
    })
  }

  deleteStudent(id:number) {
    this.studentService.deleteStudent(id).subscribe(data => {
      this.getAllStudent();
    });
  }
}
