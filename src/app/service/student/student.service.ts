import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/model/student';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
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
    id: number;
    name: string,
    category: string,
    documents: Document[],
    dob: Date,
    father: string,
    mother: string,
    score: number,
  }) {
    console.log(student);
    return this._httpClient.post(this._url, student);
  }

  getStudents(): Observable<Student[]> {
    return this.students$;
  }

  getStudentsByCategory(category: string): Observable<Student[]> {
    return this._httpClient.get<Student[]>(this._url + `?category=${category}`).pipe(tap(data => console.log(data)));
  }

  delete(id: number): Observable<Student> {
    return this._httpClient.delete<Student>(this._url + `${id}`);
  }
}
