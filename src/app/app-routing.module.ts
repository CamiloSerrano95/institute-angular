import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { ShowStudentComponent } from './students/show-student/show-student.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/students', pathMatch: 'full'},
    {path: 'students', component: StudentsComponent},
    {path: 'student/create', component: CreateStudentComponent},
    {path: 'student/:id', component: ShowStudentComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}