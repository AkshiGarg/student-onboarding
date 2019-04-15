import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from 'src/app/model/student';
import { DocumentService } from '../document/document.service';

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
        dob: new Date(),
        documents: [
          { name: 'Domicile Certificate', mandatory: true, checked: true },
          { name: 'Birth Certificate', mandatory: true, checked: true },
          { name: 'Previous Marksheets', mandatory: true, checked: true },
          { name: 'Police Clearance', mandatory: true, checked: true },
          { name: 'Passport', mandatory: true, checked: true },
          { name: 'Signed Declaration', mandatory: true, checked: true }
        ],
        father: "Sandeep Goel",
        mother: "Manju Goel",
        score: 90
      },
      {
        id: 2,
        name: "John Smith",
        category: "international",
        dob: new Date(),
        documents: [
          { name: 'Domicile Certificate', mandatory: true, checked: true },
          { name: 'Birth Certificate', mandatory: true, checked: true },
          { name: 'Previous Marksheets', mandatory: true, checked: true },
          { name: 'Police Clearance', mandatory: true, checked: true },
          { name: 'Passport', mandatory: true, checked: true },
          { name: 'Signed Declaration', mandatory: true, checked: true }
        ],
        father: "Steve Smith",
        mother: "Maria Smith",
        score: 52
      },
      {
        id: 3,
        name: "Priyank Sachdeva",
        category: "domestic",
        dob: new Date(),
        documents: [
          { name: 'Domicile Certificate', mandatory: true, checked: true },
          { name: 'Birth Certificate', mandatory: true, checked: true },
          { name: 'Previous Marksheets', mandatory: true, checked: true },
          { name: 'Police Clearance', mandatory: false, checked: false },
          { name: 'Passport', mandatory: false, checked: true },
          { name: 'Signed Declaration', mandatory: true, checked: true }],
        father: "Manoj Sachdeva",
        mother: "Aarti Sachdeva",
        score: 90
      }
    ];
    return { students };
  }

  constructor(private _documentService: DocumentService) { }


}
