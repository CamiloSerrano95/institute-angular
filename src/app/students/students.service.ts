import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient
  ){}

  getAllStudents() {
    const url = `${environment.apiUrl}/student`
    return this.http.get<Student[]>(url);
  }

  getStudentById(id:string) {
    const url = `${environment.apiUrl}/student/${id}`;
    return this.http.get<Student[]>(url);
  }

  newStudent(data: Student[]) {
    const url = `${environment.apiUrl}/student`;
    return this.http.post(url, data);
  }

  updateStudent(id:string, data:any) {
    const url = `${environment.apiUrl}/student/${id}`;
    return this.http.put(url, data);
  }

  deleteStudent(id:number) {
    const url = `${environment.apiUrl}/student/${id}`;
    return this.http.delete(url);
  }

}
