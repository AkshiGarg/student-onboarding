import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../shared/shared.module';

import { InMemoryDataService } from '../service/data/data.service';

import { StudentDetailComponent } from './view-student.component';
import { ListStudentComponent } from './list-student.component';
import { OnboardStudentComponent } from './onboard-student.component';

@NgModule({
  declarations: [
    OnboardStudentComponent,
    ListStudentComponent,
    StudentDetailComponent
  ],
  imports: [
    HttpClientModule,
    StudentRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ]
})
export class StudentModule { }
