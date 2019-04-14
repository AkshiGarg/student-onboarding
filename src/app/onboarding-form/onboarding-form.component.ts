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

  ngOnInit() {
    this.onboardingForm = this._builder.group({
      name: [''],
      category: [''],
      documents: this._builder.array([]),
      dob: [],
      father: [],
      mother: [],
      score: []
    });

    // this.addDocuments();
    // this.onboardingForm.get("category").valueChanges.subscribe(value => console.log(value));
    // this.onboardingForm.get("category").valueChanges.subscribe(value => {
    //   this.onboardingForm.setControl('documents', this._builder.group({
    //     this._documentService.getDocumentsByCategory(value)
    //   }));
    // });
  }
  // get documents() {
  //   return this.onboardingForm.get('documents') as FormArray;
  // }
  // addDocuments() {
  //   let documents = [{
  //     id: 1, name: 'Domicile Certificate', mandatory: true
  //   }];
  //   documents.map((o, i) => {
  //     const control = new FormControl(i === 0);
  //     (this.onboardingForm.controls.documents as FormArray).push(control);
  //   })
  // }

  onSubmit() {
    console.log(this.onboardingForm.get("dob").value);
  }

  onSelecting(categoryType: string) {
    // to clear the documents array before patching
    this.onboardingForm.get("documents").reset();
    (this.onboardingForm.get("documents") as FormArray)['controls'].splice(0);
    
    let documentsByCatogoryType = this._documentService.getDocumentsByCategory(categoryType); 
    for(let i = 0; i < documentsByCatogoryType.length; i++) {
      const documents = this.onboardingForm.get("documents") as FormArray;
      documents.push(new FormControl(documentsByCatogoryType[i]));
    }
    this.onboardingForm.patchValue({

    });
    console.log(this.onboardingForm.get("documents").value)
  }
}