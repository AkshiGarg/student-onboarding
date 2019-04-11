import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { OnboardingFormComponent } from './onboarding-form/onboarding-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentViewComponent,
    OnboardingFormComponent,
    StudentListComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
