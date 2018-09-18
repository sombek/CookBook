import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private router:Router,
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
  onEditRecipe(){
    this.router.navigate(['recipes',this.route.snapshot.params['id'],'edit'])
  }

}
