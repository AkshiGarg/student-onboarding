import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDatepickerModule, MatIconModule, MatInputModule, MatOptionModule, MatSelectModule, MatToolbarModule, MatCheckboxModule, MatCardModule, MatTabsModule, MatDialogModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MenuComponent } from './menu/menu.component';
import { OnboardingFormComponent } from './onboarding-form/onboarding-form.component';
import { InMemoryDataService } from './service/data/data.service';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentViewComponent,
    OnboardingFormComponent,
    StudentListComponent,
    HeaderComponent,
    PageNotFoundComponent,
    MenuComponent,
    StudentCardComponent,
    LoginFormComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
