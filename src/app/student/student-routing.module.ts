import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStudentComponent } from './list-student.component';
import { OnboardStudentComponent } from './onboard-student.component';

const routes: Routes = [
  { path: 'student', children: [
    { path: '', component: OnboardStudentComponent },
    { path: 'list', component: ListStudentComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
