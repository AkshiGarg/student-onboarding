import { Document } from '../model/document'

export interface Student {
    id?: number;
    name: string;
    category: string;
    documents: Document[]
    dob: Date;
    father: string;
    mother: string;
    score: number;
}
