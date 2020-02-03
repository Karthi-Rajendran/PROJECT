

export class Camp {
  public id : number;
  public name: string;
  public description: string;
  public imagePath: string;


  constructor(name: string, desc: string, imagePath: string , id:number) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.id = id;

  }

}
