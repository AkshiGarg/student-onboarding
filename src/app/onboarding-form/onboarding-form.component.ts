import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { DocumentService } from '../service/document/document.service';

@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.css']
})
export class OnboardingFormComponent implements OnInit {
  
  onboardingForm: FormGroup;
  constructor(private _builder: FormBuilder,
    private _documentService: DocumentService) { }
    
    get documents() {
      return this.onboardingForm.get('documents') as FormArray;
    }
  ngOnInit() {
    this.onboardingForm = this._builder.group({
      name : [''],
      category : [''],
      documents: this._builder.array([
        this._builder.control('')
      ]),
      dob : [],
      father : [],
      mother : [],
      score : []
    });

    // this.addDocuments();
    this.onboardingForm.get("category").valueChanges.subscribe(value => console.log(value));
    // this.onboardingForm.get("category").valueChanges.subscribe(value => {
    //   this.onboardingForm.setControl('documents', this._builder.group({
    //     this._documentService.getDocumentsByCategory(value)
    //   }));
    // });
  }
  addDocuments() {
    let documents = [{
      id: 1, name: 'Domicile Certificate', mandatory: true
    }];
    documents.map((o, i) => {
      const control = new FormControl(i === 0);
      (this.onboardingForm.controls.documents as FormArray).push(control);
    })
  }

  onSubmit() {
    console.log(this.onboardingForm.get("dob").value);
  }

  onChange(event) {
    console.log(event)
    this.documents.push(this._builder.control('Doc1'))
    this.onboardingForm.patchValue( {
      document: [this._documentService.getDocumentsByCategory(event)]
    });
    console.log(this.onboardingForm.get("document").value)
  }
}