import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { OnboardingFormComponent } from './onboarding-form/onboarding-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'onboarding', component: OnboardingFormComponent },
  { path: 'student', component: StudentListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
