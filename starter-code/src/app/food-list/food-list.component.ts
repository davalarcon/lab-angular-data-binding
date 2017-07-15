import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: any [] = foods;
  todayFood: any [] = this.todayFood;
  newFood: Object = {};


  constructor() { }

  ngOnInit() {

  }
  addFood(){
    console.log("New Food has been added");
    this.foods.push(this.newFood);
  }
  addForToday(){
    console.log('Food for today added');
    this.todayFood.push(this.foods)
  }

}
