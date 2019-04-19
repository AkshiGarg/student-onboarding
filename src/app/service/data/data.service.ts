import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from 'src/app/model/student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let students: Student[] = [
      {
        id: 1,
        name: "Amish Goel",
        category: "domestic",
        dob: '21/10/1991',
        documents: [ true, true, true, true, true , true],
        father: "Sandeep Goel",
        mother: "Manju Goel",
        score: 90
      },
      {
        id: 2,
        name: "John Smith",
        category: "international",
        dob: '02/02/1989',
        documents: [ true, true, true, true, true , true],
        father: "Steve Smith",
        mother: "Maria Smith",
        score: 52
      },
      {
        id: 3,
        name: "Priyank Sachdeva",
        category: "domestic",
        dob: '03/12/1990',
        documents: [ true, true, true, false, true , true],
        father: "Manoj Sachdeva",
        mother: "Aarti Sachdeva",
        score: 90
      }
    ];
    return { students };
  }

  constructor() { }


}
