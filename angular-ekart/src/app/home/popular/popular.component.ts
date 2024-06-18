import { Component, inject } from '@angular/core';
import { Course } from 'src/app/Models/Course';
import { Product } from 'src/app/Models/Product';
import { CourseService } from 'src/app/Services/course.service';
import { ProductService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  courseService = inject(CourseService)
  popularCourses: Course[] = [];

  productService = inject(ProductService);
  popularProducts: Product[] = [];

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
    this.popularProducts = this.productService.getLimitedProdcuts(0, 7);
  }
}
