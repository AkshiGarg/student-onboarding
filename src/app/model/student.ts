import { Category } from './category.enum';

export interface Student {
    name: string;
    category: Category;
    dob: Date;
    father: string;
    mother: string;
    score: number;
}
