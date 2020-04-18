import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {
  id:string;
  student:any = [];
  constructor(
    private activateRoute: ActivatedRoute,
    private serviceStudent: StudentsService
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.serviceStudent.getStudentById(this.id).subscribe(data => {
        this.student = data['Student'][0];
      })
    })
  }
}
