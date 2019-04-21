import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from "../model/document";
import { Student } from '../model/student';
import { DocumentService } from '../service/document/document.service';
import { StudentService } from '../service/student/student.service';
import { DateValidator } from '../shared/validator/DateValidator';

@Component({
  selector: 'app-onboard-student',
  templateUrl: './onboard-student.component.html',
  styleUrls: ['./onboard-student.component.css']
})
export class OnboardStudentComponent implements OnInit {

  @ViewChild(FormGroupDirective) form;
  documentsByCatogoryType: Document[];
  onboardingForm: FormGroup;
  disabled = false;
  requestType;
  formTitle:string = "Onboarding Form";
  buttonName: string = "Onboard";

  minValidDate = new Date(new Date().getFullYear() - 30, 0, 1);
  maxValidDate = new Date(new Date().getFullYear() - 16, 11, 31);

  constructor(private builder: FormBuilder,
    private documentService: DocumentService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private nav: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.initializeOnboardingForm();
    this.checkRequestType();

  }
  private checkRequestType() {
    let queryParams;
    this.route.queryParams.subscribe(params => queryParams = params);
    if (queryParams['edit']) {
      this.formTitle = "Edit Student Details";
      this.buttonName = "Save";
      const studentId = parseInt(queryParams['edit']);
      if (studentId) {
        this.requestType = 'edit';
        this.getAndAddStudentDataToForm(studentId);
      }
    } else if (queryParams['view']) {
      this.formTitle = "Student Details";
      const studentId = parseInt(queryParams['view']);
      if (studentId) {
        this.getAndAddStudentDataToForm(studentId);
        this.onboardingForm.disable();
        this.disabled = true;
      }
    }
  }

  private getAndAddStudentDataToForm(studentId: number) {
    this.studentService.getStudentById(studentId).subscribe(student => {
      if (student) {
        this.addStudentDataToForm(student)
      } else {
        this.nav.navigate(['/not-found']);
      }
    });
  }

  private initializeOnboardingForm() {
    this.onboardingForm = this.builder.group({
      id: [{ value: null, disabled: true }],
      name: ['', [Validators.required, Validators.minLength(4)]],
      category: ['', Validators.required],
      documents: this.builder.array([]),
      dob: ['', [Validators.required, DateValidator.validDate(this.minValidDate, this.maxValidDate)]],
      father: ['', [Validators.required, Validators.minLength(4)]],
      mother: ['', [Validators.required, Validators.minLength(4)]],
      score: ['', [Validators.required, Validators.pattern('^100$|^[0-9]{1,2}$')]]
    });
  }

  private addStudentDataToForm(student: Student): void {
    let submittedDoc: any[] = [];
    this.documentsByCatogoryType = this.documentService.getDocumentsByCategory(student.category);
    for (let i = 0; i < student.documents.length; i++) {
      if (this.requestType === 'edit') {
        submittedDoc.push([
          student.documents[i], this.documentsByCatogoryType[i].mandatory ?
            Validators.requiredTrue :
            null]);
      } else {
        submittedDoc.push({ value: student.documents[i], disabled: true });
      }
    }

    const dateParts = student.dob.split('/');
    const studentDob = new Date(parseInt(dateParts[2]), parseInt(dateParts[1]) - 1, parseInt(dateParts[0]));
    this.onboardingForm.patchValue({
      id: student.id,
      name: student.name,
      category: student.category,
      dob: studentDob,
      father: student.father,
      mother: student.mother,
      score: student.score
    });
    this.onboardingForm.setControl('documents', this.builder.array(submittedDoc));
  }

  get f() {
    return this.onboardingForm.controls;
  }
  get documents() {
    return this.onboardingForm.get('documents') as FormArray;
  }

  onSubmit() {
    const studentId = this.onboardingForm.get('id').value;
    let dob: Date = this.onboardingForm.get('dob').value;
    let dobString: string = dob.toLocaleDateString();
    this.onboardingForm.get('dob').setValue(dobString);
    const name: string = this.onboardingForm.get('name').value;
    if (!studentId) {
      this.studentService.onBoardStudent(this.onboardingForm.value).subscribe(data => {
        this.snackBar.open(name + ' onboarded', '', {
          duration: 2000, 
          verticalPosition: "top",
          horizontalPosition: "center",
        });
      });
    } else {
      this.studentService.update(studentId, this.onboardingForm.value).subscribe(data => {
        this.snackBar.open(name + `'s details updated`, '', {
          duration: 2000,
          verticalPosition: "top",
          horizontalPosition: "center",
        });
      });
    }
    this.nav.navigate(['/student/list']);
  }

  onSelectingCategory() {
    const categoryType = this.onboardingForm.get("category").value;
    // to clear the documents array before patching
    this.onboardingForm.get("documents").reset();
    (this.onboardingForm.get("documents") as FormArray)['controls'].splice(0);

    this.documentsByCatogoryType = this.documentService.getDocumentsByCategory(categoryType);
    const documents = this.onboardingForm.get("documents") as FormArray;
    for (let i = 0; i < this.documentsByCatogoryType.length; i++) {
      documents.push(
        new FormControl(false,
          this.documentsByCatogoryType[i].mandatory ? Validators.requiredTrue : null));
    }
    this.onboardingForm.setControl('documents', documents);
  }

}