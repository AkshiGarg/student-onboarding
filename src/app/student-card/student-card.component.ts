import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Student } from '../model/student';
import { StudentService } from '../service/student/student.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  @Output() deleteEvent = new EventEmitter();
  @Input() public student: Student;
  constructor(private studentService: StudentService,
    private _route: Router,
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

  view(id: number): void {
    
  }
}
