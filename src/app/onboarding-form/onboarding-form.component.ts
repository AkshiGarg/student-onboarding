import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
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

  @ViewChild(FormGroupDirective) form;
  documentsByCatogoryType: Document[];
  onboardingForm: FormGroup;
  constructor(private _builder: FormBuilder,
    private _documentService: DocumentService,
    private _studentService: StudentService,
    private _route: ActivatedRoute,
    private _nav: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.initializeOnboardingForm();
    this._checkRequestType();

  }
  private _checkRequestType() {
    let queryParams;
    this._route.queryParams.subscribe(params => queryParams = params);
    if (queryParams['edit']) {
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
      name: ['', Validators.required],
      category: ['', Validators.required],
      documents: this._builder.array([]),
      dob: ['', Validators.required],
      father: ['', Validators.required],
      mother: ['', Validators.required],
      score: ['', Validators.required]
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
      dob: new Date(student.dob),
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
    let dob: Date = this.onboardingForm.get('dob').value;
    let dobString: string = dob.toLocaleDateString();
    this.onboardingForm.get('dob').setValue(dobString);
    const name: string = this.onboardingForm.get('name').value;
    this._studentService.onBoardStudent(this.onboardingForm.value).subscribe(data => {
      this.snackBar.open(name + ' onboarded', '', {
        duration: 2000,
      });
      this.form.resetForm();
    });
  }

  onSelectingCategory() {
    const categoryType = this.onboardingForm.get("category").value;
    // to clear the documents array before patching
    this.onboardingForm.get("documents").reset();
    (this.onboardingForm.get("documents") as FormArray)['controls'].splice(0);

    this.documentsByCatogoryType = this._documentService.getDocumentsByCategory(categoryType);
    // const documentControls = this.documentsByCatogoryType.map(control => new FormControl(false));
    const documents = this.onboardingForm.get("documents") as FormArray;
    for (let i = 0; i < this.documentsByCatogoryType.length; i++) {
      documents.push(
        new FormControl(this.documentsByCatogoryType[i].checked,
          this.documentsByCatogoryType[i].mandatory? Validators.required : null));
    }
    // this.onboardingForm.patchValue({
    //   documents : documents
    // });
    this.onboardingForm.setControl('documents', documents);
    console.log(this.onboardingForm)
  }
}