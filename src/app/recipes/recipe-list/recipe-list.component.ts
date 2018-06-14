import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Test','this is simply test','https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2014/09/30669_spicy_slow_cooker_beef_chili_3000x2000.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

}
