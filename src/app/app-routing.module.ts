import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',  redirectTo: '/student', pathMatch: 'full'},
  {path: 'student', component: StudentListComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
