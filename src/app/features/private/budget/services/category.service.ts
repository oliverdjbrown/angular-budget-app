import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { categories } from 'src/app/mocks/categories.mock';
import { Category } from 'src/app/core/interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories = new BehaviorSubject<Category[]>(categories);
  public categories$ = this.categories.asObservable();  
  
  constructor() {}

  addCategory(category: Category): void {
    const newCategory = [...this.categories.value ,category];
    this.categories.next(newCategory);
  }
}
