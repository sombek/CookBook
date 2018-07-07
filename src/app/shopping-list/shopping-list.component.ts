import { Component, OnInit,Input } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[]
  constructor(private ShoppingListService:ShoppingListService) {}

  ngOnInit() {
      this.ingredients = this.ShoppingListService.getIngredients()
      this.ShoppingListService.ingredientsChanged.subscribe((updatedIngredients:Ingredients[]) => {
           return this.ingredients = updatedIngredients
       })
  }

  addToIngredients(newIngredient:Ingredients){
    this.ingredients.push(newIngredient)
  }

}
