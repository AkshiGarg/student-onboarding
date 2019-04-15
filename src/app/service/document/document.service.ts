import { Injectable } from '@angular/core';
import { Document } from 'src/app/model/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private _internationalDocuments: Document[] = [
    { name: 'Domicile Certificate', mandatory: true, checked: false },
    { name: 'Birth Certificate', mandatory: true, checked: false },
    { name: 'Previous Marksheets', mandatory: true, checked: false },
    { name: 'Police Clearance', mandatory: true, checked: false },
    { name: 'Passport', mandatory: true, checked: false },
    { name: 'Signed Declaration', mandatory: true, checked: false }
  ];

  private _domesticDocuments:  Document[] = [
    { name: 'Domicile Certificate', mandatory: true, checked: false },
    { name: 'Birth Certificate', mandatory: true, checked: false },
    { name: 'Previous Marksheets', mandatory: true, checked: false },
    { name: 'Police Clearance', mandatory: false, checked: false },
    { name: 'Passport', mandatory: false, checked: false },
    { name: 'Signed Declaration', mandatory: true, checked: false }
  ];
  private _url: string = "https:/localhost:8080/student/";
  constructor() { }

  getDocumentsByCategory(category: string): Document[] {
    if(category.toLowerCase() === 'international') {
      return this._internationalDocuments;
    } else if ( category.toLowerCase() === 'domestic') {
      return this._domesticDocuments
    } else {
      return [];
    }
  }
}
