import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { ListStudentComponent } from './student/list-student.component';
import { OnboardStudentComponent } from './student/onboard-student.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'student', component: OnboardStudentComponent },
  { path: 'student/list', component: ListStudentComponent },
  // { path: 'student', loadChildren: './student/student.module#StudentModule'},
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
