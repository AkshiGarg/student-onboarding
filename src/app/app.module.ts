import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule, MatNativeDateModule, MatOptionModule, MatSelectModule, MatSnackBarModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { StudentModule } from './student/student.module';

import { InMemoryDataService } from './service/data/data.service';

import { AppComponent } from './app.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    MenuComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    StudentModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
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
