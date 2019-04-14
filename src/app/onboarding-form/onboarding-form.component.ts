import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { DocumentService } from '../service/document/document.service';
import { Document} from "../model/document"
import { StudentService } from '../service/student/student.service';

@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.css']
})
export class OnboardingFormComponent implements OnInit {

  documentsByCatogoryType: Document[];
  onboardingForm: FormGroup;
  constructor(private _builder: FormBuilder,
    private _documentService: DocumentService,
    private _studentService: StudentService) { }

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
  get documents() {
    return this.onboardingForm.get('documents') as FormArray;
  }
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
    this._studentService.onBoardStudent(this.onboardingForm.value).subscribe();
    // console.log(this.onboardingForm.value);
  }

  onSelecting() {
    const categoryType = this.onboardingForm.get("category").value;
    // to clear the documents array before patching
    this.onboardingForm.get("documents").reset();
    (this.onboardingForm.get("documents") as FormArray)['controls'].splice(0);
    
    this.documentsByCatogoryType = this._documentService.getDocumentsByCategory(categoryType); 
    // const documentControls = this.documentsByCatogoryType.map(control => new FormControl(false));
    const documents = this.onboardingForm.get("documents") as FormArray;
    for(let i = 0; i < this.documentsByCatogoryType.length; i++) {
      documents.push(new FormControl(false));
    }
    // this.onboardingForm.patchValue({
    //   documents : documents
    // });
    this.onboardingForm.setControl('documents', documents);
    console.log(this.onboardingForm.controls.documents)
  }
}