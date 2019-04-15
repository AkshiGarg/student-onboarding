import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../service/student/student.service';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  @Output() deleteEvent = new EventEmitter();
  @Input() public student: Student;
  constructor(private studentService: StudentService,
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  delete(id: number): void {
    const dialogRef= this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Are you sure you want to delete?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.studentService.delete(id).subscribe();
        this.deleteEvent.emit(id);
      }
    });
  }
}
