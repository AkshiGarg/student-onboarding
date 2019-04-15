import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  constructor(private studentService : StudentService) { }

  ngOnInit() {
  }

  delete(id: number) {
    this.studentService.delete(id).subscribe();
    this.deleteEvent.emit(id);
  }
}
