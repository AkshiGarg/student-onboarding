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
      name : ['Name'],
      category : ['Category'],
      dob : ['date'],
      father : [`Father's Name`],
      mother : [` Mother's Name`],
      score : ['%(marks)']
    });
  }

  onSubmit() {
    console.log(this.onboardingForm.get("dob").value);
  }
}
