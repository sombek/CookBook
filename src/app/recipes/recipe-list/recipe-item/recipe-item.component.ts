import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor(private RecipesService:RecipesService) { }

  ngOnInit() {}

  onSelectItem(recipe){
    this.RecipesService.selectedRecipe.emit(recipe)
  }

}
