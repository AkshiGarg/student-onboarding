import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule, MatNativeDateModule, MatOptionModule, MatSelectModule, MatSnackBarModule, MatTabsModule, MatToolbarModule } from '@angular/material';

import { StudentRoutingModule } from './student-routing.module';

import { StudentDetailComponent } from './view-student.component';
import { ListStudentComponent } from './list-student.component';
import { OnboardStudentComponent } from './onboard-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    OnboardStudentComponent,
    ListStudentComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatGridListModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule
  ]
})
export class StudentModule { }
