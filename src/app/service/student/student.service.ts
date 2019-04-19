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
  private _url: string = "https:/localhost:8080/students/";

  constructor(private _httpClient: HttpClient) {
    this.students$ = this.loadData();

  }
  loadData(): Observable<Student[]> {
    return this._httpClient.get<Student[]>(this._url);
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
    return this._httpClient.post(this._url, student);
  }

  getStudentById(studentId: number): Observable<Student> {
    return this._httpClient.get<Student>(this._url + `${studentId}`)
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
    return this._httpClient.get<Student[]>(this._url + `?category=${category}`);
  }

  update(studentId: number, student): Observable<Student> {
    student.id = studentId;
    return this._httpClient.put<Student>(this._url + `${studentId}`, student);
  }

  delete(id: number): Observable<Student> {
    return this._httpClient.delete<Student>(this._url + `${id}`);
  }
}
