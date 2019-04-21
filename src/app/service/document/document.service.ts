import { Injectable } from '@angular/core';
import { Document } from 'src/app/model/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private internationalDocuments: Document[] = [
    { name: 'Domicile Certificate', mandatory: true },
    { name: 'Birth Certificate', mandatory: true },
    { name: 'Previous Marksheets', mandatory: true },
    { name: 'Police Clearance', mandatory: true },
    { name: 'Passport', mandatory: true },
    { name: 'Signed Declaration', mandatory: true }
  ];

  private domesticDocuments: Document[] = [
    { name: 'Domicile Certificate', mandatory: true },
    { name: 'Birth Certificate', mandatory: true },
    { name: 'Previous Marksheets', mandatory: true },
    { name: 'Police Clearance', mandatory: false },
    { name: 'Passport', mandatory: false },
    { name: 'Signed Declaration', mandatory: true }
  ];
  constructor() { }

  getDocumentsByCategory(category: string): Document[] {
    if (category.toLowerCase() === 'international') {
      return this.internationalDocuments;
    } else if (category.toLowerCase() === 'domestic') {
      return this.domesticDocuments
    } else {
      return [];
    }
  }
}
