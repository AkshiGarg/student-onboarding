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
        documents: this._documentService.getDocumentsByCategory("domestic"),
        father: "Sandeep Goel",
        mother: "Manju Goel",
        score: 90
      },
      {
        id: 2,
        name: "John Smith",
        category: "International",
        dob: new Date(),
        documents: this._documentService.getDocumentsByCategory("International"),
        father: "Steve Smith",
        mother: "Maria Smith",
        score: 52
      },
      {
        id: 3,
        name: "Priyank Sachdeva",
        category: "domestic",
        dob: new Date(),
        documents: this._documentService.getDocumentsByCategory("domestic"),
        father: "Manoj Sachdeva",
        mother: "Aarti Sachdeva",
        score: 90
      }
    ];
    return { students };
  }

  constructor(private _documentService: DocumentService) { }


}
