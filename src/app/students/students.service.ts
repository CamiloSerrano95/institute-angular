import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient
  ){}

  getAllStudents() {
    const url = 'http://localhost:3000/student';
    return this.http.get<Student[]>(url);
  }


}
