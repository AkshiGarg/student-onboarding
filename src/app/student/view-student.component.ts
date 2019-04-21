import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { Student } from './shared/student';
import { StudentService } from './shared/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class StudentDetailComponent implements OnInit {

  public cardClasses = {};
  @Output() deleteEvent = new EventEmitter();
  @Input() public student: Student;

  private categoryClass: boolean;

  constructor(private studentService: StudentService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.categoryClass = this.student.category == 'domestic';
    this.cardClasses = {
      "example-card": true,
      "domestic": this.categoryClass,
      "international": !this.categoryClass
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
