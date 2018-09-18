import {Ingredients} from '../shared/ingredients.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {

  private ingredients: Ingredients[] = [
    new Ingredients('Tomato', 4),
    new Ingredients('Avocado', 2),
    new Ingredients('Banana', 5),
    new Ingredients('Orange', 3),
    new Ingredients('Basil', 2)
  ];

  ingredientsChanged = new Subject<Ingredients[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredient: Ingredients[]) {
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
