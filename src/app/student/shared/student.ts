import { Document } from '../../model/document'

export interface Student {
    id?: number;
    name: string;
    category: string;
    documents: boolean[]
    dob: string;
    father: string;
    mother: string;
    score: number;
}
