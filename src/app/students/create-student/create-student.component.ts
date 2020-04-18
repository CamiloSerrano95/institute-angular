import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  studentForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceStudent: StudentsService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {

    this.serviceStudent.newStudent(this.studentForm.value).subscribe(data => {
      console.log(data);
    })

    this.onCancel();
  }

  private initForm() {
    this.studentForm = new FormGroup({
      'nombres' : new FormControl('', Validators.required),
      'apellidos' : new FormControl('', Validators.required),
      'cedula' : new FormControl('', Validators.required)
    });
  }

  onCancel() {
    this.router.navigate(['/'], {relativeTo: this.route})
  }

}
