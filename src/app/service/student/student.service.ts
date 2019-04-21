import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/model/student';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students$: Observable<Student[]>;
  private url: string = "https:/localhost:8080/students/";

  constructor(private httpClient: HttpClient) {
    this.students$ = this.loadData();

  }
  loadData(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.url);
  }

  onBoardStudent(student: {
    id?: number;
    name: string,
    category: string,
    documents: Document[],
    dob: Date,
    father: string,
    mother: string,
    score: number,
  }) {
    
    student.id = Math.floor(1 + Math.random() * (1000 + 1 - 1))
    return this.httpClient.post(this.url, student);
  }

  getStudentById(studentId: number): Observable<Student> {
    return this.httpClient.get<Student>(this.url + `${studentId}`)
      .pipe(catchError(this.handleError<Student>('getStudentById')));
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log(`${operation} failed`);
      return of(result as T);
    };
  }
  getStudents(): Observable<Student[]> {
    return this.students$;
  }

  getStudentsByCategory(category: string): Observable<Student[]> {
    if (category === 'all') {
      return this.students$;
    }
    return this.httpClient.get<Student[]>(this.url + `?category=${category}`);
  }

  update(studentId: number, student): Observable<Student> {
    student.id = studentId;
    return this.httpClient.put<Student>(this.url + `${studentId}`, student);
  }

  delete(id: number): Observable<Student> {
    return this.httpClient.delete<Student>(this.url + `${id}`);
  }
}
