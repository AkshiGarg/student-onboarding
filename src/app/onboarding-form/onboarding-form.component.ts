import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.css']
})
export class OnboardingFormComponent implements OnInit {

  onboardingForm: FormGroup;
  constructor(private builder: FormBuilder) { }
  
  ngOnInit() {
    this.onboardingForm = this.builder.group({
      name : [''],
      category : [''],
      dob : [''],
      father : [''],
      mother : [''],
      score : ['']
    });
  }

}
