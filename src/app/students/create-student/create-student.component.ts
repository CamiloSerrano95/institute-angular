import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  studentForm: FormGroup;
  editMode = false;
  id:string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceStudent: StudentsService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      if (this.id) {
        this.editMode = true;
        this.fillForm();
      }
    });
    this.initForm();    
  }

  onSubmit() {
    if (this.id) {
      this.serviceStudent.updateStudent(this.id, this.studentForm.value).subscribe(data => {
        this.editMode = false;
        this.onCancel();
      })
    } else {
      this.serviceStudent.newStudent(this.studentForm.value).subscribe(data => {
        this.onCancel();
      })
    }
  }

  private fillForm() {
    this.serviceStudent.getStudentById(this.id).subscribe(data => {
      this.studentForm = new FormGroup({
        'nombres' : new FormControl(data['Student'][0].nombres, Validators.required),
        'apellidos' : new FormControl(data['Student'][0].apellidos, Validators.required),
        'cedula' : new FormControl(data['Student'][0].cedula, Validators.required)
      });
    }) 
  }

  private initForm() {
    this.studentForm = new FormGroup({
      'nombres' : new FormControl('', Validators.required),
      'apellidos' : new FormControl('', Validators.required),
      'cedula' : new FormControl('', Validators.required)
    });
  }

  onCancel() {
    this.router.navigate(['/students']);
  }
}
