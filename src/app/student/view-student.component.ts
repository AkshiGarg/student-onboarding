import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Student } from '../model/student';
import { StudentService } from '../service/student/student.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Output() deleteEvent = new EventEmitter();
  @Input() public student: Student;

  private _categoryClass: boolean;
  public cardClasses = {};
  constructor(private studentService: StudentService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this._categoryClass = this.student.category == 'domestic';
    this.cardClasses = {
      "example-card": true,
      "domestic": this._categoryClass,
      "international": !this._categoryClass
    }
  }

  delete(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Are you sure you want to delete?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentService.delete(id).subscribe();
        this.deleteEvent.emit(id);
      }
    });
  }
}
