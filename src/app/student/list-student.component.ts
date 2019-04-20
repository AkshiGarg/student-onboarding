import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../service/student/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  categoryType: string = 'all';
  student: Student;
  students: Student[];
  filteredStudents: Student[];
  private _searchTerm: string;
  constructor(public studentService: StudentService) {
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  // }


  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(searchString: string) {
    this._searchTerm = searchString;
    this.searchByName();
  }
  searchByName() {
    this.filteredStudents = this.students.filter(
      student => student.name.toLowerCase().indexOf(this._searchTerm) !== -1);
  }
  ngOnInit() {
    this.studentService.getStudents().subscribe(
      students => {
        this.students = students
        this.filteredStudents = this.students;
      }
    );
  }

  onChange(categoryType: string) {
    this.studentService.getStudentsByCategory(categoryType).subscribe(
      students => {
        this.students = students
        this.filteredStudents = this.students;
      });
  }

  delete(id: number) {
    this.students = this.students.filter(student => student.id !== id);
  }
}
