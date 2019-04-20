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
        documents: [true, true, true, true, true, true],
        father: "Sandeep Goel",
        mother: "Manju Goel",
        score: 90
      },
      {
        id: 2,
        name: "John Smith",
        category: "international",
        dob: '02/02/1989',
        documents: [true, true, true, true, true, true],
        father: "Steve Smith",
        mother: "Maria Smith",
        score: 52
      },
      {
        id: 3,
        name: "Priyank Sachdeva",
        category: "domestic",
        dob: '03/12/1990',
        documents: [true, true, true, false, true, true],
        father: "Manoj Sachdeva",
        mother: "Aarti Sachdeva",
        score: 90
      }, {
        id: 4,
        name: "Colton Barry",
        category: "international",
        dob: '10/8/1989',
        documents: [true, true, true, true, true, true],
        father: "Oliver Osborne",
        mother: "Phillip Booth",
        score: 70
      },
      {
        id: 5,
        name: "Quinlan Walters",
        category: "domestic",
        dob: '12/6/1994',
        documents: [true, true, true, false, false, true],
        father: "Hoyt Fry",
        mother: "Rhea Hanson",
        score: 85
      },
      {
        id: 6,
        name: "Armand Bentley",
        category: "domestic",
        dob: '10/7/1998',
        documents: [true, true, true, false, true, true],
        father: "Jackson Blevins",
        mother: "Upton Juarez",
        score: 78
      },
      {
        id: 7,
        name: "Ella Rosales",
        category: "domestic",
        dob: '11/8/1990',
        documents: [true, true, true, false, false, true],
        father: "Leanard Melendez",
        mother: "Mariam Nicholson",
        score: 65
      },
      {
        id: 8,
        name: "Stella Mayo",
        category: "international",
        dob: '10/7/1990',
        documents: [true, true, true, true, true, true],
        father: "Zia Guzman",
        mother: "Gemma Turner",
        score: 60
      }
    ];
    return { students };
  }

  constructor() { }


}
