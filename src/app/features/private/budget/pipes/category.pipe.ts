import { Pipe, PipeTransform } from '@angular/core';
import { categories } from 'src/app/mocks/categories.mock';
import { Category } from 'src/app/core/interfaces/category.interface';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  
  transform(category: number): unknown {    
    return categories.find((cat: Category) => cat.id === category)?.name;
  }

}
