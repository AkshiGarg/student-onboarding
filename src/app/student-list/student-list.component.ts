import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../service/student/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  categoryType: string = 'all';
  student: Student;
  students: Student[];
  constructor(public studentService: StudentService) {
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  // }

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      students => this.students = students
    );
  }

  onChange(categoryType: string) {
    this.categoryType = categoryType;
    this.studentService.getStudentsByCategory(categoryType).subscribe(
      students => this.students = students
    );;
  }

  delete(id: number) {
    this.students = this.students.filter(student => student.id !== id);
  }
}
