import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from 'src/app/student/shared/student';
@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private students$: Observable<Student[]>;
  private url: string = "https:/localhost:8080/students/";

  constructor(private httpClient: HttpClient) {
    this.students$ = this.loadData();
  }

  delete(id: number): Observable<Student> {
    return this.httpClient.delete<Student>(this.url + `${id}`)
      .pipe(catchError(this.handleError<Student>('delete')));
  }

  getStudents(): Observable<Student[]> {
    return this.students$;
  }

  getStudentsByCategory(category: string): Observable<Student[]> {
    if (category === 'all') {
      return this.students$;
    }
    return this.httpClient.get<Student[]>(this.url + `?category=${category}`)
      .pipe(catchError(this.handleError<Student[]>('getStudentByCategory')));
  }

  getStudentById(studentId: number): Observable<Student> {
    return this.httpClient.get<Student>(this.url + `${studentId}`)
      .pipe(catchError(this.handleError<Student>('getStudentById')));
  }

  loadData(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.url)
      .pipe(catchError(this.handleError<Student[]>('loadData')));
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

  update(studentId: number, student): Observable<Student> {
    student.id = studentId;
    return this.httpClient.put<Student>(this.url + `${studentId}`, student)
      .pipe(catchError(this.handleError<Student>('update')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log(`${operation} failed`);
      return of(result as T);
    };
  }
}
