import { CategoryEnum } from "../enums/CategoryEnum";
import { ICategory } from "../interfaces/ICategory";

export class Category {
  index: number;
  name: string;
  type: CategoryEnum;
  route: string;

  constructor(data: ICategory) {
    this.index = data.index;
    this.name = data.name;
    this.type = data.type;
    this.route = data.route;
  }
}
