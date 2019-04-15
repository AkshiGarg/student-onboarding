import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from "../model/document";
import { Student } from '../model/student';
import { DocumentService } from '../service/document/document.service';
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
    private _studentService: StudentService,
    private _route: ActivatedRoute,
    private _nav: Router) { }

  ngOnInit() {
    this.initializeOnboardingForm();
    this._checkRequestType();
    

    // this.addDocuments();
    // this.onboardingForm.get("category").valueChanges.subscribe(value => console.log(value));
    // this.onboardingForm.get("category").valueChanges.subscribe(value => {
    //   this.onboardingForm.setControl('documents', this._builder.group({
    //     this._documentService.getDocumentsByCategory(value)
    //   }));
    // });
  }
  private _checkRequestType() {
    let queryParams;
    this._route.queryParams.subscribe(params => queryParams = params);
    if(queryParams['edit'] ) {
      const studentId = parseInt(queryParams['edit']);
      if (studentId) {
        this._getAndAddStudentDataToForm(studentId);
      }
    } else if (queryParams['view']) {
      const studentId = parseInt(queryParams['view']);
      if (studentId) {
        this._getAndAddStudentDataToForm(studentId);
        this.onboardingForm.disable();
      }
    }
  }

  private _getAndAddStudentDataToForm(studentId: number) {
    this._studentService.getStudentById(studentId).subscribe(student => {
      if (student) {
        this._addStudentDataToForm(student)
      } else {
        this._nav.navigate(['/not-found']);
      }
    });
  }

  private initializeOnboardingForm() {
    this.onboardingForm = this._builder.group({
      name: [''],
      category: [''],
      documents: this._builder.array([]),
      dob: [],
      father: [],
      mother: [],
      score: []
    });
  }

  private _addStudentDataToForm(student: Student): void {
    let submittedDoc: boolean[] = [];
    for (let i = 0; i < student.documents.length; i++) {
      submittedDoc.push(student.documents[i].checked);
    }
    this.onboardingForm.patchValue({
      name: student.name,
      category: student.category,
      dob: student.dob,
      father: student.father,
      mother: student.mother,
      score: student.score
    });
    this.onboardingForm.setControl('documents', this._builder.array(submittedDoc));
    // this.onboardingForm.disable();
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
    // this._studentService.onBoardStudent(this.onboardingForm.value).subscribe();
    console.log(this.onboardingForm);
  }

  onSelecting() {
    const categoryType = this.onboardingForm.get("category").value;
    // to clear the documents array before patching
    this.onboardingForm.get("documents").reset();
    (this.onboardingForm.get("documents") as FormArray)['controls'].splice(0);

    this.documentsByCatogoryType = this._documentService.getDocumentsByCategory(categoryType);
    // const documentControls = this.documentsByCatogoryType.map(control => new FormControl(false));
    const documents = this.onboardingForm.get("documents") as FormArray;
    for (let i = 0; i < this.documentsByCatogoryType.length; i++) {
      documents.push(new FormControl(this.documentsByCatogoryType[i].checked));
    }
    // this.onboardingForm.patchValue({
    //   documents : documents
    // });
    this.onboardingForm.setControl('documents', documents);
    // console.log(this.onboardingForm.controls.documents)
  }
}