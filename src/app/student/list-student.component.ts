import { Component, OnInit } from '@angular/core';
import { Student } from './shared/student';
import { StudentService } from './shared/student.service';

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

  delete(id: number) {
    this.students = this.students.filter(student => student.id !== id);
    this.filteredStudents = this.students;
  }

  get searchTerm(): string {
    return this._searchTerm;
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

  searchByName() {
    this.filteredStudents = this.students.filter(
      student => student.name.toLowerCase().indexOf(this._searchTerm.toLowerCase()) !== -1);
  }

  set searchTerm(searchString: string) {
    this._searchTerm = searchString;
    this.searchByName();
  }
}
