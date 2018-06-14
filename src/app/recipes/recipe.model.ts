export class Recipe {
    public name: string;
    public descripation: string;
    public imagePath: string;

    constructor(name:string, descripation:string, imagePath:string){
      this.name = name;
      this.descripation = descripation;
      this.imagePath = imagePath;
    }
}
