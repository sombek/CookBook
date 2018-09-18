import {Component, OnInit, OnDestroy} from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  private subscription: Subscription;

  constructor(private ShoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.ShoppingListService.getIngredients();
    this.subscription = this.ShoppingListService.ingredientsChanged.subscribe((updatedIngredients: Ingredients[]) => {
      return this.ingredients = updatedIngredients;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addToIngredients(newIngredient: Ingredients) {
    this.ingredients.push(newIngredient);
  }

}
