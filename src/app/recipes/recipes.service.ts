import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

export class RecipesService {
    private recipes: Recipe[] = [
        new Recipe('Test10', 'this is simply test','https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2014/09/30669_spicy_slow_cooker_beef_chili_3000x2000.jpg',
            [new Ingredients('cheese',1),new Ingredients('chicken',2)]),
        new Recipe('Test20', 'this is simply test','https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2014/09/30669_spicy_slow_cooker_beef_chili_3000x2000.jpg',
            [new Ingredients('cheese',1),new Ingredients('chicken',2)]),
        new Recipe('Test30', 'this is simply test','https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2014/09/30669_spicy_slow_cooker_beef_chili_3000x2000.jpg',
            [new Ingredients('cheese',1),new Ingredients('chicken',2)]),
    ]
    selectedRecipe = new EventEmitter<Recipe>()

    getRecipes() {
        return this.recipes.slice()
    }
}
