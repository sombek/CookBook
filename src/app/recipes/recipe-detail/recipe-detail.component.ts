import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail:Recipe;
  constructor(
    private ShoppingListService:ShoppingListService,
    private route: ActivatedRoute,
    private recipeService:RecipesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.recipeDetail = this.recipeService.getRecipe(Number(params.id))[0]
    })
  }
  addToShoppingList(){
    this.ShoppingListService.addIngredients(this.recipeDetail.ingredients)
  }

}
