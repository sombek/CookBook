import { Component, OnInit,Input } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[] = [
    new Ingredients('Tomato',4),
    new Ingredients('Avocado',2),
    new Ingredients('Banana',5),
    new Ingredients('Orange',3),
    new Ingredients('Basil',2)
  ];
  constructor() {}

  ngOnInit() {
  }
  addToIngredients(newIngredient){
    this.ingredients.push(newIngredient)
  }

}
