import { Ingredients } from "../shared/ingredients.model";

export class Recipe {
    public id: number
    public name: string;
    public descripation: string;
    public imagePath: string;
    public ingredients: Ingredients[];

    constructor(id:number,name:string, descripation:string, imagePath:string,ingredients:Ingredients[]){
      this.id = id;
      this.name = name;
      this.descripation = descripation;
      this.imagePath = imagePath;
      this.ingredients = ingredients
    }
}
