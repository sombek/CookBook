import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Test1','this is simply test','https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2014/09/30669_spicy_slow_cooker_beef_chili_3000x2000.jpg'),
    new Recipe('Test2','this is simply test','https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2014/09/30669_spicy_slow_cooker_beef_chili_3000x2000.jpg'),
    new Recipe('Test3','this is simply test','https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2014/09/30669_spicy_slow_cooker_beef_chili_3000x2000.jpg')
  ]
  @Output() recipeEvent = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onSelectItem1(recipeEl2:Recipe){
    this.recipeEvent.emit(recipeEl2)
  }

}
