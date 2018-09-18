import {Recipe} from './recipe.model';
import {Ingredients} from '../shared/ingredients.model';

export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(1, 'Test10', 'this is simply test', 'https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2014/09/30669_spicy_slow_cooker_beef_chili_3000x2000.jpg',
      [new Ingredients('cheese', 1), new Ingredients('Mango', 2)]),
    new Recipe(2, 'Test20', 'this is simply test', 'https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2014/09/30669_spicy_slow_cooker_beef_chili_3000x2000.jpg',
      [new Ingredients('cheese', 1), new Ingredients('Apple', 1)]),
    new Recipe(3, 'Test30', 'this is simply test', 'https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2014/09/30669_spicy_slow_cooker_beef_chili_3000x2000.jpg',
      [new Ingredients('cheese', 1), new Ingredients('Banana', 2)]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.filter((recipe) => {
      if (recipe.id == id) return recipe;
    });
  }
}
