import { Ingredients } from "../shared/ingredients.model";

export class Recipe {
    public name: string;
    public descripation: string;
    public imagePath: string;
    public ingredients: Ingredients[];

    constructor(name:string, descripation:string, imagePath:string,ingredients:Ingredients[]){
      this.name = name;
      this.descripation = descripation;
      this.imagePath = imagePath;
      this.ingredients = ingredients
    }
}
