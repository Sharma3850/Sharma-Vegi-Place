import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vegetables: Food[] = [];
  itemNotFound = false; // Flag to track if items are found

  constructor(private vegetableService: FoodService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.vegetables = this.vegetableService.getAllFoodsBySearchTerm(params['searchTerm']);
      } else if (params['tag']) {
        this.vegetables = this.vegetableService.getAllFoodsByTag(params['tag']);
      } else {
        this.vegetables = vegetableService.getAll();
      }

      // Set itemNotFound to true if no vegetables found
      this.itemNotFound = this.vegetables.length === 0;
    });
  }

  ngOnInit(): void {}


  getStars(stars: number): number[] {
    return Array(Math.floor(stars)).fill(0);
  }
}
